import { Button } from "@/components/ui/button";
import { ArrowRight, TruckIcon, Shield, Zap, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-transport.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image com Overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <img
          src={heroImage}
          alt="Transporte Dellatorre - Rodovias e logística"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Diagonal Line Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-accent/20 to-transparent transform skew-x-[-12deg] origin-top-right"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary backdrop-blur-sm rounded-full border border-accent/30 whitespace-nowrap"
          >
            <MapPin className="text-primary-foreground" size={20} />
            <span className="text-primary-foreground font-poppins text-sm font-medium">
              Atuação Nacional
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-montserrat text-5xl md:text-6xl lg:text-7xl text-primary mb-6 leading-tight"
          >
            Seu destino,{" "}
            <span className="relative inline-block">
              <span className="text-[hsl(var(--dellatorre-yellow))] font-extrabold">
                nossa missão
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-primary/90 mb-8 font-poppins font-light leading-relaxed"
          >
            Transportadora e locadora de equipamentos com excelência operacional.
            Levamos movimento, confiança e segurança a cada destino.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <div className="flex items-center gap-2 bg-primary backdrop-blur-sm px-4 py-2 rounded-lg border border-primary/20">
              <Shield className="text-primary-foreground" size={20} />
              <span className="text-primary-foreground font-poppins text-sm font-medium">
                Segurança Total
              </span>
            </div>
            <div className="flex items-center gap-2 bg-primary backdrop-blur-sm px-4 py-2 rounded-lg border border-primary/20">
              <TruckIcon className="text-primary-foreground" size={20} />
              <span className="text-primary-foreground font-poppins text-sm font-medium">
                Frota Moderna
              </span>
            </div>
            <div className="flex items-center gap-2 bg-primary backdrop-blur-sm px-4 py-2 rounded-lg border border-primary/20">
              <Zap className="text-primary-foreground" size={20} />
              <span className="text-primary-foreground font-poppins text-sm font-medium">
                Tecnologia Avançada
              </span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-[hsl(var(--blue-deep))] text-white hover:bg-[hsl(var(--blue-deep))]/80 font-montserrat font-bold text-lg px-8 py-6 group"
            >
              <a href="https://wa.me/5518998060024" target="_blank" rel="noopener noreferrer">
                Solicitar Cotação
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </Button>
            <Button
              asChild
              variant="white"
              size="lg"
              className="border-2 border-[hsl(var(--blue-dark))] text-[hsl(var(--blue-dark))] 
          hover:text-[hsl(var(--blue-deep))] hover:bg-transparent
          font-montserrat font-semibold text-lg px-8 py-6 transition-colors duration-200"
            >
              <a href="#servicos">Conheça Nossos Serviços</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2 animate-bounce">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
