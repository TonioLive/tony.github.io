
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}



// Dropdown del menú DUBEDITION
const dropdowns = document.querySelectorAll('.nav-dropdown');
dropdowns.forEach(dropdown => {
  const button = dropdown.querySelector('.nav-dropdown-toggle');
  button?.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = dropdown.classList.toggle('open');
    button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    dropdowns.forEach(other => {
      if (other !== dropdown) {
        other.classList.remove('open');
        other.querySelector('.nav-dropdown-toggle')?.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
document.addEventListener('click', () => {
  dropdowns.forEach(dropdown => {
    dropdown.classList.remove('open');
    dropdown.querySelector('.nav-dropdown-toggle')?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanels.forEach(panel => panel.classList.remove('active'));
    button.classList.add('active');
    document.getElementById(tab)?.classList.add('active');
  });
});


document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', (event) => {
    if (!form.getAttribute('action')) {
      event.preventDefault();
      alert('Formulario preparado. Para recibir solicitudes, conecta este formulario con Formspree, Netlify Forms o Google Forms. Revisa el README.');
    }
  });
});



// Merch: carrito persistente, total en menú y checkout por Formspree
(function(){
  const CART_KEY = 'dubEditionMerchCart';
  const merchForm = document.getElementById('merchOrderForm');
  const cartItemsEl = document.getElementById('cartItems');
  const subtotalEl = document.getElementById('cartSubtotal');
  const shippingEl = document.getElementById('cartShipping');
  const totalEl = document.getElementById('cartTotal');
  const deliveryEl = document.getElementById('merchDelivery');
  const shippingAddress = document.getElementById('shippingAddress');
  const hiddenPedido = document.getElementById('pedidoResumen');
  const hiddenSubtotal = document.getElementById('pedidoSubtotal');
  const hiddenEnvio = document.getElementById('pedidoEnvio');
  const hiddenTotal = document.getElementById('pedidoTotal');
  const clearCartBtn = document.getElementById('clearCart');

  const money = value => new Intl.NumberFormat('es-ES', { style:'currency', currency:'EUR' }).format(Number(value || 0));
  const loadCart = () => {
    try { return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); }
    catch(e){ return []; }
  };
  let cart = loadCart();
  const saveCart = () => localStorage.setItem(CART_KEY, JSON.stringify(cart));

  function subtotal(){
    return cart.reduce((sum, item) => sum + Number(item.price || 0) * Number(item.qty || 0), 0);
  }

  function currentShipping(){
    if (!deliveryEl || deliveryEl.value !== 'envio' || cart.length === 0) return 0;
    const onlyStickers = cart.every(item => item.type === 'pegatina');
    return onlyStickers ? 1 : 5.50;
  }

  function buildSummary(){
    if (!cart.length) return '';
    return cart.map((item, index) => {
      const opts = Object.entries(item.options || {}).map(([k,v]) => `${k}: ${v}`).join(' | ');
      return `${index+1}. ${item.name} x${item.qty} (${opts}) - ${money(item.price * item.qty)}`;
    }).join('\n');
  }

  function updateCartNav(){
    const cartSubtotal = subtotal();
    document.querySelectorAll('[data-cart-total]').forEach(el => {
      el.textContent = money(cartSubtotal);
    });
    document.querySelectorAll('[data-cart-count]').forEach(el => {
      el.textContent = cart.reduce((sum, item) => sum + Number(item.qty || 0), 0);
    });
  }

  function showToast(text){
    const toast = document.createElement('div');
    toast.className = 'cart-toast';
    toast.textContent = text;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2600);
  }

  function renderCart(){
    const cartSubtotal = subtotal();
    const shipping = currentShipping();
    const total = cartSubtotal + shipping;

    if (cartItemsEl){
      if (!cart.length){
        cartItemsEl.innerHTML = '<p class="empty-cart">Todavía no has añadido productos.</p>';
      } else {
        cartItemsEl.innerHTML = cart.map((item, index) => {
          const opts = Object.entries(item.options || {}).map(([k,v]) => `${k}: ${v}`).join(' · ');
          return `<div class="cart-item"><strong>${item.name}</strong><small>${opts}</small><div class="cart-item-actions"><span>${item.qty} × ${money(item.price)}</span><button class="cart-remove" type="button" data-remove="${index}">Quitar</button></div></div>`;
        }).join('\n');
      }
    }

    if (subtotalEl) subtotalEl.textContent = money(cartSubtotal);
    if (shippingEl) shippingEl.textContent = money(shipping);
    if (totalEl) totalEl.textContent = money(total);
    if (hiddenPedido) hiddenPedido.value = buildSummary();
    if (hiddenSubtotal) hiddenSubtotal.value = money(cartSubtotal);
    if (hiddenEnvio) hiddenEnvio.value = money(shipping);
    if (hiddenTotal) hiddenTotal.value = money(total);
    if (shippingAddress) shippingAddress.hidden = !(deliveryEl && deliveryEl.value === 'envio');
    updateCartNav();
  }

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const product = button.closest('[data-name][data-price]');
      if (!product) return;
      const options = {};
      product.querySelectorAll('[data-option]').forEach(field => options[field.dataset.option] = field.value);
      const qtyInput = product.querySelector('[data-qty]');
      const qty = Math.max(1, parseInt(qtyInput?.value || '1', 10));
      cart.push({
        name: product.dataset.name,
        price: Number(product.dataset.price),
        type: product.dataset.type || 'producto',
        options,
        qty
      });
      saveCart();
      renderCart();
      showToast('Añadido al carrito: ' + product.dataset.name);
      if (cartItemsEl && document.querySelector('.cart-panel')) document.querySelector('.cart-panel')?.scrollIntoView({ behavior:'smooth', block:'start' });
    });
  });

  cartItemsEl?.addEventListener('click', event => {
    const removeIndex = event.target?.dataset?.remove;
    if (removeIndex !== undefined){
      cart.splice(Number(removeIndex), 1);
      saveCart();
      renderCart();
    }
  });

  clearCartBtn?.addEventListener('click', () => {
    cart = [];
    saveCart();
    renderCart();
  });

  deliveryEl?.addEventListener('change', renderCart);

  merchForm?.addEventListener('submit', event => {
    if (!cart.length){
      event.preventDefault();
      alert('Añade al menos un producto al carrito antes de enviar el pedido.');
      return;
    }
    renderCart();
  });

  renderCart();
})();
