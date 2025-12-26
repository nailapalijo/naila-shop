let cart = JSON.parse(localStorage.getItem('naila_shop_cart')) || [];

function updateCartUI() {
    const counts = document.querySelectorAll('#cart-count');
    counts.forEach(c => c.innerText = cart.length);
}

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('naila_shop_cart', JSON.stringify(cart));
    updateCartUI();

    // Modern Alert
    const msg = document.createElement('div');
    msg.className = "fixed bottom-10 right-10 bg-slate-900 text-white px-8 py-4 rounded-2xl shadow-2xl z-50 animate-bounce";
    msg.innerHTML = `✅ ${name} Added!`;
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 2000);
}

document.addEventListener('DOMContentLoaded', updateCartUI);
