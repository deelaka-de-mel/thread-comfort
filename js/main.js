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

// ── Contact form: pre-fill item from URL param ──
window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const item = params.get('item');
  const field = document.getElementById('itemField');
  if (item && field) field.value = decodeURIComponent(item);
});

// ── Shop filter ──
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.product-card[data-category]');
const emptyState = document.getElementById('emptyState');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    // Update active button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    let visible = 0;

    cards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      if (match) {
        card.classList.remove('hidden');
        visible++;
      } else {
        card.classList.add('hidden');
      }
    });

    // Show empty state if nothing matches
    if (emptyState) {
      emptyState.style.display = visible === 0 ? 'block' : 'none';
    }
  });
});