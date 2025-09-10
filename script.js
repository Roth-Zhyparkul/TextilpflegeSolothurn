/* Navigation, back-to-top, dynamic year, opening hours & lazy-load polyfill
   (Optional header shrink: uncomment code where noted) */
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');

  // Mobile navigation
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open');
      if (!expanded) {
        setTimeout(() => { nav.querySelector('a')?.focus(); }, 40);
      }
    });
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (window.innerWidth <= 860) {
          nav.classList.remove('is-open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // Back to top
  const backToTop = document.querySelector('[data-back-to-top]');
  const toggleBackToTop = () => {
    if (!backToTop) return;
    backToTop.style.display = window.scrollY > 600 ? 'flex' : 'none';
  };
  window.addEventListener('scroll', toggleBackToTop);
  backToTop?.addEventListener('click', () =>
    window.scrollTo({ top:0, behavior:'smooth' })
  );
  toggleBackToTop();

  // Optional shrink effect (uncomment if desired)
  /*
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) header?.classList.add('shrink');
    else header?.classList.remove('shrink');
  });
  */

  // Dynamic year
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Opening hours status
  (function openingHours() {
    const table = document.querySelector('.hours');
    if (!table) return;
    const statusEl = document.querySelector('[data-open-status]');
    const now = new Date();
    const day = now.getDay(); // 0 Sunday
    const minutes = now.getHours() * 60 + now.getMinutes();

    const schedule = {
      1:[[8*60,18*60+30]],
      2:[[8*60,18*60+30]],
      3:[[8*60,18*60+30]],
      4:[[8*60,18*60+30]],
      5:[[8*60,18*60+30]],
      6:[[9*60,14*60]],
      0:[]
    };

    let open = false;
    (schedule[day]||[]).forEach(r => {
      if (minutes >= r[0] && minutes <= r[1]) open = true;
    });

    table.querySelectorAll('tr[data-day]').forEach(tr => {
      if (Number(tr.getAttribute('data-day')) === day) {
        tr.classList.add('is-today');
        if (open) tr.classList.add('is-open');
      }
    });

    if (statusEl) {
      statusEl.classList.add(open ? 'status--open' : 'status--closed');
      statusEl.querySelector('.status__text').textContent = open ? 'Jetzt geöffnet' : 'Geschlossen';
    }
  })();

  // Lazy load fallback
  if (!('loading' in HTMLImageElement.prototype)) {
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      const src = img.getAttribute('data-src') || img.src;
      const temp = new Image();
      temp.src = src;
      temp.onload = () => { img.src = src; };
    });
  }
});