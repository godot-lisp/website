// Custom JS for docs overview toggle
document.addEventListener('DOMContentLoaded', function() {
  const indicators = document.querySelectorAll('.docs-stack-indicator');
  
  indicators.forEach(indicator => {
    indicator.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const stack = this.closest('.docs-stack');
      stack.classList.toggle('expanded');
    });
  });

  // Expand all toggle
  const expandAllButton = document.getElementById('expand-all');
  if (expandAllButton) {
    let allExpanded = false;

    expandAllButton.addEventListener('click', function() {
      const stacks = document.querySelectorAll('.docs-stack');
      stacks.forEach(stack => {
        if (stack.querySelector('.docs-children .docs-card-link')) {
          if (allExpanded) {
            stack.classList.remove('expanded');
          } else {
            stack.classList.add('expanded');
          }
        }
      });
      allExpanded = !allExpanded;
      expandAllButton.textContent = allExpanded ? 'Collapse Everything' : 'Expand Everything';
    });
  }

  // Search functionality
  const searchInputs = [
    document.getElementById('docs-search'), // sidebar search
    document.getElementById('docs-search-overview') // overview search
  ].filter(Boolean);

  searchInputs.forEach(searchInput => {
    const searchButton = searchInput.nextElementSibling?.querySelector('.input-group-text');
    const searchIcon = searchButton?.querySelector('i');

    function performSearch() {
      const query = searchInput.value.trim();
      if (query) {
        window.location.href = '/search/?q=' + encodeURIComponent(query);
      }
    }

    // Enter key in input
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        performSearch();
      }
    });

    // Click on search button/icon
    if (searchButton) {
      searchButton.addEventListener('click', performSearch);
    }
    if (searchIcon) {
      searchIcon.addEventListener('click', performSearch);
    }
  });
});