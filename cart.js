// ============================================
// SAMA HAIR GLOW — Moteur du panier
// Le panier est stocké en localStorage (persiste entre les pages/visites)
// Le TOTAL est toujours recalculé automatiquement à partir des lignes du panier
// ============================================

const CART_KEY = "samahairglow_cart";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const cart = getCart();
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: product.id,
      nom: product.nom,
      prix: product.prix,
      image: product.image,
      qty: qty
    });
  }

  saveCart(cart);
  showToast(`${product.nom} ajouté au panier`);
}

function updateQty(productId, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    return removeFromCart(productId);
  }
  saveCart(cart);
  if (typeof renderCartPage === "function") renderCartPage();
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(i => i.id !== productId);
  saveCart(cart);
  if (typeof renderCartPage === "function") renderCartPage();
}

// ---- Calculs automatiques ----
function formatPrix(n) {
  return Number(n).toLocaleString("fr-FR") + " FCFA";
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function getSousTotal() {
  return getCart().reduce((sum, item) => sum + (item.prix * item.qty), 0);
}

function getTotal() {
  return getSousTotal();
}

// ---- UI : badge panier dans le header (toutes les pages) ----
function updateCartBadge() {
  document.querySelectorAll(".cart-count").forEach(el => {
    const count = getCartCount();
    el.textContent = count;
    el.style.display = count > 0 ? "flex" : "none";
  });
}

// ---- Toast de confirmation ----
function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `✓ ${message}`;
  toast.classList.add("show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

document.addEventListener("DOMContentLoaded", updateCartBadge);
