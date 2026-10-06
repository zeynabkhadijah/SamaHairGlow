// ============================================
// SAMA HAIR GLOW — Client API (version sans backend)
// Le site est 100% statique : les commandes sont enregistrées dans le
// navigateur (voir js/orders.js). Il n'y a pas de paiement en ligne :
// la commande est envoyée par WhatsApp à la boutique pour préparation
// en vue d'un retrait en magasin.
// ============================================

const api = {
  async createOrder(payload) {
    // Recrée le comportement du backend : validation + recalcul du total
    // à partir du catalogue PRODUCTS (voir js/orders.js).
    return createLocalOrder(payload);
  }
};
