const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Dashboards", href: "#dashboards" },
  { label: "Certifications", href: "#certifications" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          className="font-bold text-xl text-blue-400 hover:text-blue-300 transition-colors"
        >
          Kavin Kumar N
        </a>

        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-blue-400 transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
