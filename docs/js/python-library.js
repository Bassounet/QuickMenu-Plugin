(function () {
  function initPythonLibrary() {
    const searchInput = document.querySelector('.qm-py-search__input');
    const filters = document.querySelectorAll('.qm-py-filter');
    const cards = document.querySelectorAll('.qm-py-card');
    const intro = document.querySelector('.qm-py-intro__count strong');
    const empty = document.querySelector('.qm-py-empty');
    if (!filters.length || !cards.length) return;

    // Index each card: lowercased tag set + searchable text (title + description)
    const cardData = [...cards].map(card => {
      const tags = new Set(
        [...card.querySelectorAll('.qm-py-card__tag')]
          .map(t => t.textContent.replace(/^#/, '').trim().toLowerCase())
          .filter(Boolean)
      );
      const titleText = (card.querySelector('h3')?.textContent || '').toLowerCase();
      const descText = (card.querySelector('.qm-py-card__titles p')?.textContent || '').toLowerCase();
      return { card, tags, search: `${titleText} ${descText}` };
    });

    // Count cards per tag (used for pill counts)
    const counts = { all: cards.length };
    cardData.forEach(({ tags }) => {
      tags.forEach(tag => { counts[tag] = (counts[tag] || 0) + 1; });
    });

    // Populate pill counts + dim those with zero cards
    filters.forEach(pill => {
      const tag = (pill.dataset.filter || '').toLowerCase();
      const countEl = pill.querySelector('.qm-py-filter__count');
      const count = counts[tag] || 0;
      if (countEl) countEl.textContent = count;
      pill.classList.toggle('qm-py-filter--empty', tag !== 'all' && count === 0);
    });
    if (intro) intro.textContent = counts.all;

    // Filter state
    const activeTags = new Set();
    let searchTerm = '';

    function apply() {
      let visible = 0;
      cardData.forEach(({ card, tags, search }) => {
        const tagMatch = activeTags.size === 0
          || [...activeTags].some(t => tags.has(t));
        const searchMatch = searchTerm === '' || search.includes(searchTerm);
        const show = tagMatch && searchMatch;
        card.style.display = show ? '' : 'none';
        if (show) visible++;
      });
      filters.forEach(p => {
        const tag = (p.dataset.filter || '').toLowerCase();
        const isActive = tag === 'all' ? activeTags.size === 0 : activeTags.has(tag);
        p.classList.toggle('qm-py-filter--active', isActive);
      });
      if (empty) {
        empty.style.display = visible === 0 ? '' : 'none';
        const labelEl = empty.querySelector('.qm-py-empty__cat');
        if (labelEl) {
          if (activeTags.size === 0 && searchTerm === '') {
            labelEl.textContent = 'this';
          } else if (activeTags.size > 0 && searchTerm !== '') {
            labelEl.textContent = [...activeTags].map(t => '#' + t).join(' + ') + ' + "' + searchTerm + '"';
          } else if (activeTags.size > 0) {
            labelEl.textContent = [...activeTags].map(t => '#' + t).join(' + ');
          } else {
            labelEl.textContent = '"' + searchTerm + '"';
          }
        }
      }
    }

    filters.forEach(pill => {
      pill.addEventListener('click', () => {
        if (pill.classList.contains('qm-py-filter--empty')) return;
        const tag = (pill.dataset.filter || '').toLowerCase();
        if (tag === 'all') {
          activeTags.clear();
        } else if (activeTags.has(tag)) {
          activeTags.delete(tag);
        } else {
          activeTags.add(tag);
        }
        apply();
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

    if (searchInput) {
      searchInput.addEventListener('input', () => {
        searchTerm = searchInput.value.trim().toLowerCase();
        apply();
      });
    }

    apply();
  }

  document.addEventListener('DOMContentLoaded', initPythonLibrary);
  document.addEventListener('DOMContentSwitch', initPythonLibrary);
})();
