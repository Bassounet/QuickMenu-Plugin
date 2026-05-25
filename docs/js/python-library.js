(function () {
  function initPythonLibrary() {
    const filters = document.querySelectorAll('.qm-py-filter');
    const cards = document.querySelectorAll('.qm-py-card');
    const intro = document.querySelector('.qm-py-intro__count strong');
    if (!filters.length || !cards.length) return;

    // Compute counts per category from the actual cards
    const counts = { all: cards.length };
    cards.forEach(card => {
      const cat = (card.dataset.category || '').toLowerCase();
      if (!cat) return;
      counts[cat] = (counts[cat] || 0) + 1;
    });

    // Update count badges + reset all to 0 if missing
    filters.forEach(pill => {
      const cat = (pill.dataset.filter || '').toLowerCase();
      const countEl = pill.querySelector('.qm-py-filter__count');
      if (countEl) countEl.textContent = counts[cat] || 0;
    });

    if (intro) intro.textContent = counts.all;

    function applyFilter(cat) {
      cards.forEach(card => {
        const cardCat = (card.dataset.category || '').toLowerCase();
        const match = cat === 'all' || cardCat === cat;
        card.style.display = match ? '' : 'none';
      });
      filters.forEach(p => {
        const isActive = (p.dataset.filter || '').toLowerCase() === cat;
        p.classList.toggle('qm-py-filter--active', isActive);
      });
    }

    filters.forEach(pill => {
      pill.addEventListener('click', () => {
        const cat = (pill.dataset.filter || '').toLowerCase();
        applyFilter(cat);
      });
      pill.setAttribute('role', 'button');
      pill.setAttribute('tabindex', '0');
      pill.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          pill.click();
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', initPythonLibrary);
  document.addEventListener('DOMContentSwitch', initPythonLibrary);
})();
