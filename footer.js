document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class="bg-[#FFFFFF] text-[#A31621] w-full border-t border-[#A31621]/20">

  <div class="max-w-7xl mx-auto px-6 py-20">

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">

      <div class="sm:col-span-2 lg:col-span-4 space-y-8">
        <a href="index.html" class="flex items-center gap-3 group">
          <img src="images/logo.svg" alt="Achar logo" width="64" height="64"
            class="h-10 w-10 flex-none rounded-full bg-white object-contain ring-1 ring-[#A31621]/20 transition group-hover:ring-[#D64530] dark:ring-white/15" />
          <div class="font-serif text-2xl font-bold tracking-tight leading-none">
            Achar
          </div>
        </a>

        <p class="text-xs tracking-widest leading-relaxed opacity-80 font-semibold sm:max-w-md lg:max-w-xs">
          Specialty pickle &amp; homemade preserve store. Slow-fermented in small
          batches with raw mango, seasonal vegetables and grandmother's spice blends.
          No preservatives, no artificial colour.
        </p>

        <div class="flex gap-5 text-xl">
          <a href="#" aria-label="Instagram" class="hover:text-[#D64530] transition"><i class="bi bi-instagram"></i></a>
          <a href="#" aria-label="Facebook" class="hover:text-[#D64530] transition"><i class="bi bi-facebook"></i></a>
          <a href="#" aria-label="WhatsApp" class="hover:text-[#D64530] transition"><i class="bi bi-whatsapp"></i></a>
          <a href="#" aria-label="YouTube" class="hover:text-[#D64530] transition"><i class="bi bi-youtube"></i></a>
        </div>
      </div>

      <div class="lg:col-span-2">
        <h3 class="font-sans text-[10px] font-bold uppercase tracking-[0.3em] mb-8 opacity-50">
          Quick Links
        </h3>
        <ul class="space-y-4 text-xs font-semibold tracking-wide">
          <li><a href="about.html" class="hover:text-[#D64530] transition-all">About Us</a></li>
          <li><a href="services.html" class="hover:text-[#D64530] transition-all">Services</a></li>
          <li><a href="products.html" class="hover:text-[#D64530] transition-all">Products</a></li>
          <li><a href="bulk-gifting.html" class="hover:text-[#D64530] transition-all">Bulk &amp; Gifting</a></li>
          <li><a href="recipes.html" class="hover:text-[#D64530] transition-all">Recipes</a></li>
          <li><a href="contact.html" class="hover:text-[#D64530] transition-all">Contact</a></li>
        </ul>
      </div>

      <div class="lg:col-span-3">
        <h3 class="font-sans text-[10px] font-bold uppercase tracking-[0.3em] mb-8 opacity-50">
          Our Pickles
        </h3>
        <ul class="space-y-4 text-xs font-semibold tracking-wide">
          <li><a href="products.html#mango" class="hover:text-[#D64530] transition-all">Mango Pickle</a></li>
          <li><a href="products.html#mixed-veg" class="hover:text-[#D64530] transition-all">Mixed Veg Pickle</a></li>
          <li><a href="products.html#spicy" class="hover:text-[#D64530] transition-all">Spicy Pickle</a></li>
          <li><a href="products.html#sweet" class="hover:text-[#D64530] transition-all">Sweet &amp; Murabba</a></li>
          <li><a href="products.html#amla" class="hover:text-[#D64530] transition-all">Amla &amp; Lemon</a></li>
          <li><a href="products.html#chutney" class="hover:text-[#D64530] transition-all">Chutney &amp; Pickle Mix</a></li>
        </ul>
      </div>

      <div class="lg:col-span-3">
        <h3 class="font-sans text-[10px] font-bold uppercase tracking-[0.3em] mb-8 opacity-50">
          Visit The Kitchen
        </h3>
        <ul class="space-y-6 text-xs font-semibold tracking-wide">
          <li class="flex items-start gap-3">
            <i class="bi bi-geo-alt mt-0.5"></i>
            <span>Shop 14, Gandhi Market,<br/>Varanasi, Uttar Pradesh 221001</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="bi bi-clock mt-0.5"></i>
            <span>Mon - Sat: 9:00 AM - 8:00 PM<br/>Sunday: 10:00 AM - 5:00 PM</span>
          </li>
          <li class="flex items-center gap-3">
            <i class="bi bi-telephone"></i>
            <span>+91 98765 43210</span>
          </li>
          <li class="flex items-center gap-3">
            <i class="bi bi-envelope"></i>
            <span class="border-b border-[#A31621] hover:text-[#D64530] hover:border-[#D64530] transition">hello@acharstore.in</span>
          </li>
        </ul>
      </div>

    </div>

  </div>

  <div class="border-t border-[#A31621]/20 py-8 text-center text-[9px] font-semibold uppercase tracking-[0.2em] md:tracking-[0.4em] px-6">
    &copy; ${new Date().getFullYear()} ACHAR PICKLE &amp; HOMEMADE PRESERVE. <br class="md:hidden"/> HANDMADE IN SMALL BATCHES / NO PRESERVATIVES.
  </div>

</footer>
`;
});