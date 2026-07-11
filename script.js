// ============================================
// Vivian Murathimi — Portfolio Script
// Handles active-tab highlighting on scroll + footer year.
// ============================================

const sections = ['home', 'work', 'education', 'contact'].map(id => document.getElementById(id));
  const tabs = document.querySelectorAll('.tab');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === entry.target.id));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => s && observer.observe(s));

  document.getElementById('year').textContent = new Date().getFullYear();