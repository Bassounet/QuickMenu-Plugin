(function () {
  function initPythonLibrary() {
    const filters = document.querySelectorAll('.qm-py-filter');
    const cards = document.querySelectorAll('.qm-py-card');
    const intro = document.querySelector('.qm-py-intro__count strong');
    const empty = document.querySelector('.qm-py-empty');
    if (!filters.length || !cards.length) return;

    // Compute counts per category from the actual cards
    const counts = { all: cards.length };
    cards.forEach(card => {
      const cat = (card.dataset.category || '').toLowerCase();
      if (!cat) return;
      counts[cat] = (counts[cat] || 0) + 1;
    });

    // Update count badges, dim pills with 0 cards
    filters.forEach(pill => {
      const cat = (pill.dataset.filter || '').toLowerCase();
      const countEl = pill.querySelector('.qm-py-filter__count');
      const count = counts[cat] || 0;
      if (countEl) countEl.textContent = count;
      pill.classList.toggle('qm-py-filter--empty', cat !== 'all' && count === 0);
    });

    if (intro) intro.textContent = counts.all;

    function applyFilter(cat) {
      let visibleCount = 0;
      cards.forEach(card => {
        const cardCat = (card.dataset.category || '').toLowerCase();
        const match = cat === 'all' || cardCat === cat;
        card.style.display = match ? '' : 'none';
        if (match) visibleCount++;
      });
      filters.forEach(p => {
        const isActive = (p.dataset.filter || '').toLowerCase() === cat;
        p.classList.toggle('qm-py-filter--active', isActive);
      });
      if (empty) {
        empty.style.display = visibleCount === 0 ? '' : 'none';
        const label = filters.length
          ? ([...filters].find(f => f.classList.contains('qm-py-filter--active'))?.firstChild?.textContent || '').trim()
          : '';
        const labelEl = empty.querySelector('.qm-py-empty__cat');
        if (labelEl) labelEl.textContent = label;
      }
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

    // Initial state: ensure empty placeholder is hidden if cards present
    if (empty) empty.style.display = 'none';
  }

  document.addEventListener('DOMContentLoaded', initPythonLibrary);
  document.addEventListener('DOMContentSwitch', initPythonLibrary);
})();
