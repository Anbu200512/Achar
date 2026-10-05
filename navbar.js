document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  navbar.innerHTML = `
<header id="mainNavbar"
  class="fixed top-0 left-0 w-full z-50 bg-[#FFFFFF] text-[#A31621] border-b border-[#A31621]/20 transition-all duration-300">

  <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
<a href="index.html" class="flex items-center gap-3 group shrink-0">
      <img src="images/logo.svg" alt="Achar logo" width="64" height="64"
        class="h-10 w-10 flex-none rounded-full bg-white object-contain ring-1 ring-[#A31621]/20 transition group-hover:ring-[#D64530] dark:ring-white/15" />
      <div class="font-serif text-2xl font-bold tracking-tight leading-none">
        Achar
      </div>
    </a>

    <div id="centerLinksWrapper" class="hidden lg:flex flex-1 justify-center">
      <ul class="flex items-center gap-5 font-serif text-[13px] font-semibold tracking-wide" id="navLinks">

        <li class="relative">
          <button id="homeDropdownBtn" class="flex items-center gap-1 transition hover:text-[#D64530]">
            Home <i class="bi bi-chevron-down text-[10px]"></i>
          </button>
          <ul id="homeDropdownMenu" class="absolute left-0 mt-5 w-48 bg-[#FFFFFF] text-[#A31621] border border-[#A31621]/30 shadow-lg hidden z-50 rounded">
            <li><a href="index.html" class="block px-4 py-3 border-b border-[#A31621]/15 hover:bg-[#A31621] hover:text-[#FFFFFF] transition font-sans text-xs font-bold uppercase tracking-widest">Home 1</a></li>
            <li><a href="home2.html" class="block px-4 py-3 hover:bg-[#A31621] hover:text-[#FFFFFF] transition font-sans text-xs font-bold uppercase tracking-widest">Home 2</a></li>
          </ul>
        </li>

        <li><a href="about.html" class="hover:text-[#D64530] transition">About</a></li>
        <li><a href="services.html" class="hover:text-[#D64530] transition">Services</a></li>
        <li><a href="products.html" class="hover:text-[#D64530] transition">Products</a></li>
        <li><a href="bulk-gifting.html" class="hover:text-[#D64530] transition">Bulk &amp; Gifting</a></li>
        <li><a href="recipes.html" class="hover:text-[#D64530] transition">Recipes</a></li>
        <li><a href="contact.html" class="hover:text-[#D64530] transition">Contact</a></li>
      </ul>
    </div>

    <div id="rightButtons" class="hidden lg:flex items-center gap-3">

      <button id="theme-toggle" aria-label="Toggle theme" class="w-10 h-10 border border-[#A31621]/40 flex items-center justify-center rounded-full hover:bg-[#A31621] hover:text-[#FFFFFF] transition">
        <i class="bi bi-moon-fill" id="theme-icon"></i>
      </button>

      <button id="rtlToggle" class="h-10 border border-[#A31621]/40 px-3 text-[10px] font-bold uppercase tracking-widest hover:bg-[#A31621] rounded-full hover:text-[#FFFFFF] transition">
        RTL
      </button>

      <a href="login.html" class="font-sans text-[11px] font-bold uppercase tracking-widest bg-[#A31621] text-[#FFFFFF] border border-[#A31621] px-5 py-3 h-10 flex items-center rounded-full hover:bg-[#D64530] hover:border-[#D64530] transition">
        Login
      </a>
    </div>

    <button id="hamburgerBtn" aria-label="Open menu" class="lg:hidden text-3xl hover:text-[#D64530] transition">
      <i class="bi bi-list"></i>
    </button>
  </div>
</header>

<div id="mobileMenuOverlay" class="fixed inset-0 bg-[#A31621]/25 backdrop-blur-sm hidden lg:hidden z-40"></div>
<div id="mobileMenu" class="fixed top-0 right-0 h-full w-72 bg-[#FFFFFF] text-[#A31621] z-50 transform translate-x-full transition-transform duration-300 lg:hidden border-l border-[#A31621]/30">
  <div class="flex items-center justify-between p-5 border-b border-[#A31621]/20">
    <h2 class="font-serif text-base font-bold">Menu</h2>
    <button id="closeMenuBtn" class="text-3xl leading-none">&times;</button>
  </div>

  <div class="p-6 overflow-y-auto h-full">
    <ul class="space-y-4 font-serif text-base font-semibold pb-20">
      <li>
        <button id="mobileDropdownBtn" class="w-full flex items-center justify-between py-2">
          <span>Home</span>
          <i id="mobileHomeChevron" class="bi bi-chevron-down transition-transform duration-300"></i>
        </button>
        <ul id="mobileDropdownMenu" class="hidden mt-2 ml-4 space-y-2 border-l border-[#A31621]/30 pl-4 font-sans text-xs font-bold uppercase tracking-widest">
          <li><a href="index.html" class="block py-1">Home 1</a></li>
          <li><a href="home2.html" class="block py-1">Home 2</a></li>
        </ul>
      </li>

      <li><a href="about.html" class="block py-2 hover:text-[#D64530] transition">About</a></li>
      <li><a href="services.html" class="block py-2 hover:text-[#D64530] transition">Services</a></li>
      <li><a href="products.html" class="block py-2 hover:text-[#D64530] transition">Products</a></li>
      <li><a href="bulk-gifting.html" class="block py-2 hover:text-[#D64530] transition">Bulk &amp; Gifting</a></li>
      <li><a href="recipes.html" class="block py-2 hover:text-[#D64530] transition">Recipes</a></li>
      <li><a href="contact.html" class="block py-2 hover:text-[#D64530] transition">Contact</a></li>

      <li class="pt-6 border-t border-[#A31621]/20 space-y-3">
        <div class="flex justify-between gap-4">
          <button id="mobile-theme-toggle" aria-label="Toggle theme" class="flex-1 border border-[#A31621]/40 py-3 text-xl rounded-full"><i class="bi bi-moon-fill" id="mobile-theme-icon"></i></button>
          <button id="mobile-rtl-toggle" class="flex-1 border border-[#A31621]/40 py-3 text-xs font-bold uppercase tracking-widest rounded-full">RTL</button>
        </div>
        <a href="login.html" class="block text-center bg-[#A31621] text-[#FFFFFF] border border-[#A31621] py-3 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-[#D64530] hover:border-[#D64530] transition">Login</a>
      </li>
    </ul>
  </div>
</div>
`;

  // --- LOGIC ---
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const homeDropdownMenu = document.getElementById('homeDropdownMenu');
  const mobileDropdownMenu = document.getElementById('mobileDropdownMenu');

  // Toggle Sidebar Logic
  const toggleSidebar = () => {
    mobileMenu.classList.toggle('translate-x-0');
    mobileMenu.classList.toggle('translate-x-full');
    mobileMenuOverlay.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
  };

  document.getElementById('hamburgerBtn').addEventListener('click', toggleSidebar);
  document.getElementById('closeMenuBtn').addEventListener('click', toggleSidebar);
  mobileMenuOverlay.addEventListener('click', toggleSidebar);

  // Home Dropdowns
  document.getElementById('homeDropdownBtn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    homeDropdownMenu.classList.toggle('hidden');
  });

  document.getElementById('mobileDropdownBtn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileDropdownMenu.classList.toggle('hidden');
    document.getElementById('mobileHomeChevron').classList.toggle('rotate-180');
  });

  // Theme Logic (Icon Switching)
  const themeIcon = document.getElementById('theme-icon');
  const mobileThemeIcon = document.getElementById('mobile-theme-icon');

  const updateThemeUI = (theme) => {
    const isDark = theme === "dark";
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.toggle("dark", isDark);
    const iconClass = isDark ? "bi-brightness-high-fill" : "bi-moon-fill";
    themeIcon.className = iconClass;
    mobileThemeIcon.className = iconClass;
  };

  const handleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    updateThemeUI(newTheme);
  };

  document.getElementById('theme-toggle').addEventListener('click', handleTheme);
  document.getElementById('mobile-theme-toggle').addEventListener('click', handleTheme);

  // Initialize Theme on Load
  const savedTheme = localStorage.getItem("theme") || "light";
  updateThemeUI(savedTheme);

  // RTL Logic
  const handleRTL = () => {
    const html = document.documentElement;
    html.setAttribute("dir", html.getAttribute("dir") === "rtl" ? "ltr" : "rtl");
  };
  document.getElementById('rtlToggle').addEventListener('click', handleRTL);
  document.getElementById('mobile-rtl-toggle').addEventListener('click', handleRTL);

  // Global Close
  document.addEventListener('click', () => {
    homeDropdownMenu?.classList.add('hidden');
  });

  // Active Link Logic (Mixed Active States)
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const allLinks = document.querySelectorAll('#navLinks a, #mobileMenu a, #homeDropdownMenu a, #mobileDropdownMenu a');

  allLinks.forEach(link => {
    const href = link.getAttribute('href');

    if (href === currentPath) {
      // 1. Make the active link fully opaque
      link.classList.add('nav-active');

      // 2. Check if the link is inside the Home dropdown
      const isHomeDropdownLink = link.closest('#homeDropdownMenu') || link.closest('#mobileDropdownMenu');

      if (isHomeDropdownLink) {
        link.classList.add('font-bold');

        // Also make the parent dropdown button bold
        const desktopBtn = document.getElementById('homeDropdownBtn');
        const mobileBtn = document.getElementById('mobileDropdownBtn');

        if (desktopBtn) desktopBtn.classList.add('nav-active');
        if (mobileBtn) mobileBtn.classList.add('nav-active');
      }
    }
  });
}); // End of DOMContentLoaded