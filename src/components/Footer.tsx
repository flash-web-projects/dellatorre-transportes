import { Link } from "react-router-dom";
import { Phone, Mail, Instagram, MapPin } from "lucide-react";
import logo from "@/assets/dellatorre-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-accent text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Slogan */}
          <div>
            <img src={logo} alt="Dellatorre Transportes" className="h-16 w-auto mb-4" />
            <p className="font-montserrat font-bold text-lg mb-2">Dellatorre Transportes</p>
            <p className="text-sm opacity-90 italic">"Seu destino, nossa missão."</p>
            <div className="mt-4">
              <a
                href="https://instagram.com/dellatorretransportes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <Instagram size={20} />
                <span className="text-sm">@dellatorretransportes</span>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-secondary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-sm hover:text-secondary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-sm hover:text-secondary transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/frota" className="text-sm hover:text-secondary transition-colors">
                  Frota
                </Link>
              </li>
              <li>
                <Link to="/tecnologia" className="text-sm hover:text-secondary transition-colors">
                  Tecnologia & Segurança
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-sm hover:text-secondary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Transporte de Cargas Pesadas</li>
              <li>Transporte de Geradores</li>
              <li>Construção Civil</li>
              <li>Locação de Empilhadeiras</li>
              <li>Locação de Containers</li>
              <li>Locação de Munck e Guindastes</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/5518998060024"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm hover:text-secondary transition-colors"
              >
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span>+55 18 99806-0024</span>
              </a>
              <a
                href="mailto:comercial@dellatorretransportes.com.br"
                className="flex items-start gap-2 text-sm hover:text-secondary transition-colors"
              >
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span>comercial@dellatorretransportes.com.br</span>
              </a>
              <div className="flex items-start gap-2 text-sm">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Interior de São Paulo - Atuação Nacional</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-sm opacity-75">
            © {new Date().getFullYear()} Dellatorre Transportes. Todos os direitos reservados.
          </p>
          <p className="text-xs opacity-60 mt-2">
            Segurança • Comprometimento • Inovação • Pontualidade • Respeito
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
