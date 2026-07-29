const footerLinks = [
  {
    heading: "Navigation",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Research", href: "#research" },
      { label: "Training Programs", href: "#training" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Training Programs",
    links: [
      { label: "Business Analytics", href: "#training" },
      { label: "Statistical Methods", href: "#training" },
      { label: "Financial Analytics", href: "#training" },
      { label: "Operations Research", href: "#training" },
      { label: "Research Methodology", href: "#training" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                PKD
              </div>
              <div>
                <div className="text-white font-semibold">Prof. Prabir Kumar Das</div>
                <div className="text-gray-400 text-xs">PhD · Professor · Statistics & Analytics</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              30 years of excellence in teaching, research, and professional training.
              Empowering professionals and organizations with data-driven insights and
              analytical skills.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="mailto:brmkolkata@gmail.com"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-[#2563EB] hover:text-white transition-colors"
                aria-label="Email"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-[#2563EB] hover:text-white transition-colors"
                aria-label="Google Scholar"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-[#2563EB] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav Links */}
          {footerLinks.map((section) => (
            <div key={section.heading}>
              <h4 className="text-white font-semibold text-sm mb-4">
                {section.heading}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {currentYear} Prof. Prabir Kumar Das. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built with Next.js & Tailwind CSS · Hosted on GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  );
}
