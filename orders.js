// ============================================
// SAMA HAIR GLOW — Gestion des commandes (sans backend)
// Les commandes sont enregistrées dans le navigateur (localStorage).
// Le total est toujours recalculé à partir du catalogue PRODUCTS,
// jamais pris tel quel depuis le formulaire.
// Pas de paiement en ligne, pas de livraison : la commande est envoyée
// par WhatsApp à la boutique, qui la prépare pour un retrait sur place.
// ============================================

const ORDERS_KEY = "samahairglow_commandes";

function genererIdCommande() {
  return "CMD-" + Date.now().toString(36).toUpperCase() + "-" + Math.random().toString(16).slice(2, 6).toUpperCase();
}

function getOrders() {
  try {
    return JSON.parse(localStorage.getItem(ORDERS_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveOrders(orders) {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

function getOrderById(id) {
  return getOrders().find(o => o.id === id) || null;
}

// Crée une commande : valide les champs et recalcule le total
// à partir des prix réels du catalogue (PRODUCTS), pas depuis le panier envoyé.
function createLocalOrder({ client, items }) {
  if (!client || !client.nom || !client.telephone) {
    throw new Error("Informations client incomplètes");
  }
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error("Le panier est vide");
  }
  const telRegex = /^[0-9+ ]{8,15}$/;
  if (!telRegex.test(client.telephone)) {
    throw new Error("Numéro de téléphone invalide");
  }

  let sousTotal = 0;
  const lignesVerifiees = [];
  for (const item of items) {
    const produit = PRODUCTS.find(p => p.id === item.id);
    if (!produit) throw new Error(`Produit inconnu : ${item.id}`);
    const quantite = Math.max(1, parseInt(item.qty, 10) || 1);
    sousTotal += produit.prix * quantite;
    lignesVerifiees.push({ id: produit.id, nom: produit.nom, prix: produit.prix, qty: quantite });
  }

  const total = sousTotal;
  const order = {
    id: genererIdCommande(),
    client_nom: client.nom,
    client_telephone: client.telephone,
    client_adresse: client.adresse || null,
    client_ville: client.ville || null,
    client_email: client.email || null,
    items: lignesVerifiees,
    sous_total: sousTotal,
    total,
    // Statut de la commande (préparation/retrait), plus de paiement en ligne :
    // "nouvelle" -> "en_preparation" -> "recuperee" (ou "annulee")
    statut: "nouvelle",
    created_at: new Date().toISOString()
  };

  const orders = getOrders();
  orders.push(order);
  saveOrders(orders);

  return order;
}

function updateOrderStatus(id, statut) {
  const orders = getOrders();
  const order = orders.find(o => o.id === id);
  if (order) {
    order.statut = statut;
    saveOrders(orders);
  }
  return order || null;
}

// Construit le message WhatsApp listant la commande, pour que la
// cliente l'envoie à la boutique et que la boutique puisse la préparer
// en vue du retrait en magasin.
function construireMessageWhatsApp(order) {
  const formatPrixLocal = n => Number(n).toLocaleString("fr-FR") + " FCFA";
  const lignes = order.items
    .map(i => `• ${i.nom} × ${i.qty} — ${formatPrixLocal(i.prix * i.qty)}`)
    .join("\n");

  return (
    `🛍️ Nouvelle commande ${order.id}\n\n` +
    `${lignes}\n\n` +
    `Total : ${formatPrixLocal(order.total)}\n\n` +
    `👤 Client : ${order.client_nom}\n` +
    `📞 Téléphone : ${order.client_telephone}` +
    (order.client_adresse ? `\n📍 Quartier : ${order.client_adresse}${order.client_ville ? ", " + order.client_ville : ""}` : "") +
    (order.client_email ? `\n✉️ Email : ${order.client_email}` : "") +
    `\n\nc:` + order.client_livraison
  );
}
