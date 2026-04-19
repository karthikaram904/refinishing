/* ===========================
   REGRAIN STUDIO — main.js
   =========================== */

document.addEventListener('DOMContentLoaded', function () {

  // ========================
  // NAVBAR — scroll & active
  // ========================
  const nav = document.getElementById('mainNav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Active nav link on scroll (one-page)
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) link.classList.add('active');
      });
    });
  }

  // ========================
  // HAMBURGER MENU
  // ========================
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navCollapse = document.getElementById('navbarNav');
  if (hamburgerBtn && navCollapse) {
    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('open');
      navCollapse.classList.toggle('show');
    });
    // Close on link click
    navCollapse.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 1024) {
          hamburgerBtn.classList.remove('open');
          navCollapse.classList.remove('show');
        }
      });
    });
  }

  // ========================
  // SCROLL TO TOP BUTTON
  // ========================
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    });
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ========================
  // PRICING CALCULATOR
  // ========================
  const calcPriceEl = document.getElementById('calcPrice');
  if (calcPriceEl) {
    function updateCalc() {
      const base = parseFloat(document.getElementById('furnitureType')?.value || 0);
      const mult = parseFloat(document.getElementById('serviceType')?.value || 1);
      const finish = parseFloat(document.getElementById('finishType')?.value || 0);
      const condEl = document.querySelector('input[name="condition"]:checked');
      const cond = condEl ? parseFloat(condEl.value) : 0;
      const total = base > 0 ? Math.round((base * mult) + finish + cond) : 0;
      calcPriceEl.textContent = total > 0 ? '₹' + total.toLocaleString('en-IN') : '₹0';
    }
    ['furnitureType', 'serviceType', 'finishType'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('change', updateCalc);
    });
    document.querySelectorAll('input[name="condition"]').forEach(r => r.addEventListener('change', updateCalc));
  }

  // ========================
  // PORTFOLIO FILTER
  // ========================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      portfolioItems.forEach(item => {
        const show = filter === 'all' || item.dataset.cat === filter;
        item.style.display = show ? '' : 'none';
        if (show) item.style.animation = 'fadeUp 0.3s ease';
      });
    });
  });

  // ========================
  // PASSWORD TOGGLE (global)
  // ========================
  window.togglePassword = function (inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const isText = input.type === 'text';
    input.type = isText ? 'password' : 'text';
    btn.querySelector('i').className = isText ? 'fas fa-eye' : 'fas fa-eye-slash';
  };

  // ========================
  // DASHBOARD SIDEBAR
  // ========================
  const dashSidebar = document.getElementById('dashSidebar');
  const dashHamburger = document.getElementById('dashHamburger');
  const sidebarClose = document.getElementById('sidebarClose');
  const sidebarOverlay = document.getElementById('sidebarOverlay');

  function openSidebar() {
    dashSidebar?.classList.add('open');
    sidebarOverlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar() {
    dashSidebar?.classList.remove('open');
    sidebarOverlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  dashHamburger?.addEventListener('click', openSidebar);
  sidebarClose?.addEventListener('click', closeSidebar);
  sidebarOverlay?.addEventListener('click', closeSidebar);

  // ========================
  // DASHBOARD TABS
  // ========================
  const sidebarLinks = document.querySelectorAll('.sidebar-link[data-tab]');
  const tabPanes = document.querySelectorAll('.tab-pane');
  const dashTitle = document.getElementById('dashTitle');

  function activateTab(tabId) {
    tabPanes.forEach(p => p.classList.remove('active'));
    sidebarLinks.forEach(l => l.classList.remove('active'));
    const pane = document.getElementById('tab-' + tabId);
    const link = document.querySelector(`.sidebar-link[data-tab="${tabId}"]`);
    if (pane) pane.classList.add('active');
    if (link) link.classList.add('active');
    if (dashTitle) {
      const labels = {
        overview: 'Overview', submit: 'Submit a Piece',
        projects: 'My Projects', mockups: 'Design Mockups',
        gallery: 'Before & After', invoices: 'Invoices',
        messages: 'Messages', settings: 'Settings'
      };
      dashTitle.textContent = labels[tabId] || 'Dashboard';
    }
    // Close sidebar on mobile after tab click
    if (window.innerWidth < 1024) closeSidebar();
  }

  sidebarLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      activateTab(link.dataset.tab);
    });
  });

  // Tab link from welcome button
  document.querySelectorAll('[data-tab-link]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      activateTab(btn.dataset.tabLink);
    });
  });

  // ========================
  // UPLOAD ZONE
  // ========================
  const uploadZone = document.getElementById('uploadZone');
  const fileInput = document.getElementById('fileInput');
  if (uploadZone && fileInput) {
    uploadZone.addEventListener('click', () => fileInput.click());
    uploadZone.addEventListener('dragover', e => {
      e.preventDefault();
      uploadZone.style.borderColor = 'var(--accent)';
    });
    uploadZone.addEventListener('dragleave', () => {
      uploadZone.style.borderColor = '';
    });
    uploadZone.addEventListener('drop', e => {
      e.preventDefault();
      uploadZone.style.borderColor = '';
      const files = e.dataTransfer.files;
      showUploadedFiles(files);
    });
    fileInput.addEventListener('change', () => showUploadedFiles(fileInput.files));

    function showUploadedFiles(files) {
      if (!files.length) return;
      const names = Array.from(files).map(f => f.name).join(', ');
      uploadZone.querySelector('p').textContent = `${files.length} file(s) selected: ${names.substring(0, 60)}${names.length > 60 ? '...' : ''}`;
      uploadZone.style.borderColor = 'var(--accent)';
    }
  }

  // ========================
  // SMOOTH SCROLL FOR # links
  // ========================
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 80;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      }
    });
  });

  // ========================
  // INTERSECTION OBSERVER — reveal on scroll
  // ========================
  const reveals = document.querySelectorAll('.service-card, .portfolio-card, .testimonial-card, .tier-card, .feature-card, .stat-widget, .project-card');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      obs.observe(el);
    });
  }

  // ========================
  // WINDOW RESIZE — sidebar reset
  // ========================
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      closeSidebar();
    }
  });


  // ============================================
  // THEME TOGGLE — Dark / Light Mode
  // ============================================
  const themeToggleBtn = document.getElementById('themeToggleBtn');

  function applyTheme(theme) {
    if (theme === 'light') {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      if (themeToggleBtn) {
        themeToggleBtn.querySelector('i').className = 'fas fa-sun';
        themeToggleBtn.title = 'Switch to Dark Mode';
        themeToggleBtn.classList.add('active');
      }
    } else {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      if (themeToggleBtn) {
        themeToggleBtn.querySelector('i').className = 'fas fa-moon';
        themeToggleBtn.title = 'Switch to Light Mode';
        themeToggleBtn.classList.remove('active');
      }
    }
    localStorage.setItem('rg_theme', theme);
  }

  applyTheme(localStorage.getItem('rg_theme') || 'dark');

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      applyTheme(document.body.classList.contains('light-mode') ? 'dark' : 'light');
    });
  }

  // ============================================
  // RTL TOGGLE — LTR / RTL Direction
  // ============================================
  const rtlToggleBtn = document.getElementById('rtlToggleBtn');

  function applyDir(dir) {
    document.documentElement.setAttribute('dir', dir);
    if (rtlToggleBtn) {
      const label = rtlToggleBtn.querySelector('.rtl-label');
      if (dir === 'rtl') {
        rtlToggleBtn.querySelector('i').className = '';
        rtlToggleBtn.title = 'Switch to LTR';
        rtlToggleBtn.classList.add('active');
        if (label) label.textContent = 'LTR';
      } else {
        rtlToggleBtn.querySelector('i').className = '';
        rtlToggleBtn.title = 'Switch to RTL';
        rtlToggleBtn.classList.remove('active');
        if (label) label.textContent = 'RTL';
      }
    }
    localStorage.setItem('rg_dir', dir);
  }

  applyDir(localStorage.getItem('rg_dir') || 'ltr');

  if (rtlToggleBtn) {
    rtlToggleBtn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('dir') || 'ltr';
      applyDir(cur === 'rtl' ? 'ltr' : 'rtl');
    });
  }

});
