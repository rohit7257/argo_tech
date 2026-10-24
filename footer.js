// footer.js

// 1. CDNs ko dynamically head me inject karna
(function loadDependencies() {
  const head = document.head;

  // Google Fonts preconnect
  const preconnect1 = document.createElement('link');
  preconnect1.rel = 'preconnect';
  preconnect1.href = 'https://fonts.googleapis.com';
  head.appendChild(preconnect1);

  const preconnect2 = document.createElement('link');
  preconnect2.rel = 'preconnect';
  preconnect2.href = 'https://fonts.gstatic.com';
  preconnect2.crossOrigin = 'anonymous';
  head.appendChild(preconnect2);

  // Google Fonts stylesheet
  const googleFonts = document.createElement('link');
  googleFonts.rel = 'stylesheet';
  googleFonts.href = 'https://fonts.googleapis.com/css2?family=Fraunces:wght@600;700;800&family=Nunito+Sans:wght@400;600;700;800&display=swap';
  head.appendChild(googleFonts);

  // Remixicon CDN
  const remixIcon = document.createElement('link');
  remixIcon.rel = 'stylesheet';
  remixIcon.href = 'https://cdn.jsdelivr.net/npm/remixicon@4.6.0/fonts/remixicon.css';
  head.appendChild(remixIcon);

  // Tailwind CSS script
  if (!window.tailwind) {
    const tailwindScript = document.createElement('script');
    tailwindScript.src = 'https://cdn.tailwindcss.com';
    tailwindScript.onload = () => {
      // Tailwind custom config (gold color aur fonts ke liye)
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              gold: '#D4AF37',
              dark: '#1a1a1a',
            },
            fontFamily: {
              head: ['Fraunces', 'serif'],
              sans: ['Nunito Sans', 'sans-serif'],
            }
          }
        }
      };
    };
    head.appendChild(tailwindScript);
  }
})();

// 2. Custom Footer Component
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-green-800 text-green-100 pt-12">
        <div class="max-w-6xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_1fr_1fr_1.3fr] gap-x-10 gap-y-12 pb-10">
          
          <!-- Column 1: Logo aur Intro -->
          <div class="lg:col-span-1">
            <a href="index.html" class="flex items-center gap-3 font-head font-extrabold text-white text-sm leading-tight mb-4">
              <img src="logoagro.png.jpeg" alt="Vinayramkrishna Agro Tech logo" class="h-14 w-14 shrink-0 rounded-full object-contain bg-white ring-2 ring-white/20">
              <span>Vinayramkrishna<br>Agro Tech Pvt. Ltd.</span>
            </a>
            <p class="text-sm leading-7 text-green-100">
              Helping farmers grow more with healthy soil, trusted inputs and practical guidance. Serving farms since 2022.
            </p>
            <div class="flex items-center gap-3 mt-4">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="w-10 h-10 rounded-full bg-white/10 grid place-items-center text-white text-xl hover:bg-gold hover:text-dark transition">
                <i class="ri-instagram-line" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="w-10 h-10 rounded-full bg-white/10 grid place-items-center text-white text-xl hover:bg-gold hover:text-dark transition">
                <i class="ri-linkedin-fill" aria-hidden="true"></i>
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="w-10 h-10 rounded-full bg-white/10 grid place-items-center text-white text-xl hover:bg-gold hover:text-dark transition">
                <i class="ri-facebook-fill" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <!-- Column 2: Quick Links -->
          <div>
            <h4 class="font-head text-white text-lg mb-3">Quick Links</h4>
            <ul class="space-y-3 text-sm leading-relaxed">
              <li><a href="index.html" class="hover:text-gold">Home</a></li>
              <li><a href="about.html" class="hover:text-gold">About Us</a></li>
              <li><a href="career.html" class="hover:text-gold">Career</a></li>
              <li><a href="get-started.html" class="hover:text-gold">Contact</a></li>
            </ul>
          </div>

          <!-- Column 3: Products -->
          <div>
            <h4 class="font-head text-white text-lg mb-3">Products</h4>
            <ul class="space-y-3 text-sm leading-relaxed">
              <li><a href="bio-fertilizers.html" class="hover:text-gold">Bio-Fertilizers</a></li>
              <li><a href="organic-manure.html" class="hover:text-gold">Organic Manure</a></li>
              <li><a href="bio-pesticides.html" class="hover:text-gold">Bio-Pesticides</a></li>
              <li><a href="seeds-soil-kits.html" class="hover:text-gold">Seeds &amp; Soil Kits</a></li>
            </ul>
          </div>

          <!-- Column 4: Services -->
          <div>
            <h4 class="font-head text-white text-lg mb-3">Services</h4>
            <ul class="space-y-3 text-sm leading-relaxed">
              <li><a href="soil-testing.html" class="hover:text-gold">Soil Testing</a></li>
              <li><a href="agri-consultancy.html" class="hover:text-gold">Agri Consultancy</a></li>
              <li><a href="plant-care.html" class="hover:text-gold">Plant Care</a></li>
              <li><a href="farmer-training.html" class="hover:text-gold">Farmer Training</a></li>
              <li><a href="training.html" class="hover:text-gold">Training</a></li>
              <li><a href="internship.html" class="hover:text-gold">Internship</a></li>
            </ul>
          </div>

          <!-- Column 5: Contact -->
          <div>
            <h4 class="font-head text-white text-lg mb-3">Contact</h4>
            <ul class="space-y-4 text-sm leading-relaxed">
              <li>📍 Ahmadpur, Bidupur, Vaishali, Bihar - 844502</li>
              <li class="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto: krishnaagrotech23@gmail.com" class="hover:text-gold">krishnaagrotech23@gmail.com</a>
              </li>
              <li>
                📞
                <a href="tel:+916299791343" class="hover:text-gold">+91 6299791343</a>
              </li>
            </ul>
          </div>

        </div>

        <!-- Copyright -->
        <div class="border-t border-white/15 mt-11 py-5 text-center text-sm">
          © 2022–<span id="yr"></span> Vinayramkrishna Agro Tech Private Limited. All rights reserved.
        </div>
      </footer>
    `;

    // Dynamic current year automatically update karega
    const yrSpan = this.querySelector('#yr');
    if (yrSpan) {
      yrSpan.textContent = new Date().getFullYear();
    }
  }
}

customElements.define('main-footer', SiteFooter);