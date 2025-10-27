import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/dellatorre-logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Sobre Nós", path: "/sobre" },
    { name: "Serviços", path: "/servicos" },
    { name: "Tecnologia", path: "/tecnologia" },
    { name: "Contato", path: "/contato" },
    { name: "FAQ", path: "/faq" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-foreground text-primary shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <img src={logo} alt="Dellatorre Transportes" className="h-12 w-auto" />
            <div className="hidden md:block">
              <div className="font-montserrat font-bold text-xl">Dellatorre Transportes</div>
              <div className="text-xs opacity-90">Seu destino, nossa missão.</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md font-poppins font-medium transition-all ${isActive(link.path)
                  ? "bg-primary text-accent-foreground"
                  : "hover:bg-primary-foreground/10"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="ml-4 bg-[hsl(var(--blue-deep))] text-white hover:bg-[hsl(var(--blue-deep))]/80 font-montserrat font-semibold transition-colors duration-300"
            >
              <a href="https://wa.link/ua64nw" target="_blank" rel="noopener noreferrer">
                Solicitar Cotação
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-primary-foreground/10 rounded-md transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-fade-in-up">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-md font-poppins font-medium transition-all ${isActive(link.path)
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-primary-foreground/10"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                asChild
                className="ml-4 bg-[hsl(var(--blue-deep))] text-white hover:bg-[hsl(var(--blue-deep))]/80 font-montserrat font-semibold transition-colors duration-300"
              >
                <a href="https://wa.link/ua64nw" target="_blank" rel="noopener noreferrer">
                  Solicitar Cotação
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
