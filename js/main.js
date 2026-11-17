// ── Mobile menu ──
const toggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (toggle) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Contact page: WhatsApp link with item from URL ──
const WHATSAPP_NUMBER = '94712658999';

window.addEventListener('DOMContentLoaded', () => {
  const waBtn = document.getElementById('whatsappBtn');
  if (!waBtn) return;

  const params = new URLSearchParams(window.location.search);
  const item = params.get('item');

  let message = "Hi, I'd like to order from Thread & Comfort.";
  if (item) {
    message = `Hi, I'd like to order: ${item}`;
    const box = document.getElementById('inquiryItem');
    const name = document.getElementById('inquiryItemName');
    if (box && name) {
      name.textContent = item;
      box.style.display = 'block';
    }
  }

  waBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
});

// ── Shop filter ──
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.product-card[data-category]');
const emptyState = document.getElementById('emptyState');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    let visible = 0;

    cards.forEach(card => {
      const categories = card.dataset.category.split(' ');
      const match = filter === 'all' || categories.includes(filter);
      
      card.classList.toggle('hidden', !match);
      if (match) visible++;
    });

    if (emptyState) {
      emptyState.style.display = visible === 0 ? 'block' : 'none';
    }
  });
});