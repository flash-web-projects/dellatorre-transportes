import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FullBanner from "@/components/FullBanner";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Truck,
  Building2,
  Zap,
  Factory,
  Tent,
  Wheat,
  Forklift,
  Container,
  Construction,
  Shield,
  Clock,
  Award,
  Target,
  Users,
  ArrowRight,
} from "lucide-react";
import serviceTransport from "@/assets/service-transport.jpg";
import serviceForklift from "@/assets/service-forklift.jpg";
import serviceGenerator from "@/assets/service-generator.jpg";
import whatsapp from "@/assets/whatsapp.webp";
import bgGenerico from "@/assets/BGGENERICO.png";
import { motion } from "framer-motion";

const Index = () => {

  const transportServices = [
    {
      icon: Building2,
      title: "Construção Civil",
      description: "Transporte especializado de materiais, pré-moldados e maquinário pesado.",
      features: [
        "Logística sincronizada com cronogramas de obra",
        "Conformidade com normas NR-11/NR-12",
        "Entregas pontuais e seguras",
      ],
      image: serviceTransport,
    },
    {
      icon: Truck,
      title: "Cargas Pesadas",
      description: "Transporte técnico de equipamentos industriais e estruturais de grande porte.",
      features: [
        "Frota reforçada e especializada",
        "Rotas otimizadas e planejamento detalhado",
        "Seguro completo e cobertura nacional",
      ],
      image: serviceTransport,
    },
    {
      icon: Zap,
      title: "Geradores",
      description: "Transporte de geradores estacionários e móveis para múltiplos setores.",
      features: [
        "Fixação técnica especializada",
        "Acompanhamento 24h",
        "Entregas emergenciais e programadas",
      ],
      image: serviceGenerator,
    },
    {
      icon: Factory,
      title: "Industrial/Metalúrgico",
      description: "Transporte de peças, insumos e máquinas industriais.",
      features: [
        "Planejamento detalhado de rotas",
        "Cumprimento rigoroso de prazos",
        "Redução de paradas na produção",
      ],
      image: serviceTransport,
    },
    {
      icon: Tent,
      title: "Coberturas Provisórias",
      description: "Transporte de tendas e estruturas metálicas para eventos.",
      features: [
        "Prazos curtos e entregas urgentes",
        "Cuidado especial com materiais",
        "Suporte durante montagem",
      ],
      image: serviceTransport,
    },
    {
      icon: Wheat,
      title: "Agrícola",
      description: "Transporte de máquinas, insumos e implementos agrícolas.",
      features: [
        "Frota adaptada para estradas rurais",
        "Sincronização com safra",
        "Proteção contra intempéries",
      ],
      image: serviceTransport,
    },
  ];

  const rentalServices = [
    {
      icon: Forklift,
      title: "Empilhadeiras",
      description: "Modelos elétricos, GLP e diesel com operadores qualificados.",
      features: [
        "Contratos flexíveis",
        "Manutenção incluída",
        "Redução de custos fixos",
      ],
      image: serviceForklift,
    },
    {
      icon: Container,
      title: "Containers",
      description: "Soluções modulares para escritórios, armazenagem e apoio.",
      features: [
        "Estruturas reforçadas",
        "Personalização disponível",
        "Instalação rápida",
      ],
      image: serviceForklift,
    },
    {
      icon: Construction,
      title: "Munck e Guindastes",
      description: "Equipamentos modernos para içamento e movimentação pesada.",
      features: [
        "Operadores certificados NR-11/NR-18",
        "Planejamento técnico",
        "Precisão e segurança",
      ],
      image: serviceForklift,
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Segurança",
      description: "Proteção total em cada operação",
    },
    {
      icon: Clock,
      title: "Pontualidade",
      description: "Compromisso com prazos e cronogramas",
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Qualidade em todos os processos",
    },
    {
      icon: Target,
      title: "Inovação",
      description: "Tecnologia de ponta aplicada",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <FullBanner />
      <Hero />

      {/* Values Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
                  <value.icon size={32} className="text-accent-foreground" />
                </div>
                <h3 className="font-montserrat font-bold text-xl mb-2">{value.title}</h3>
                <p className="text-sm opacity-90 font-poppins">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Transport Services */}
      <section id="servicos" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
              Serviços de <span className="text-accent">Transporte</span>
            </h2>
            <p className="text-xl text-muted-foreground font-poppins max-w-2xl mx-auto">
              Soluções completas em logística para diversos segmentos
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {transportServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Rental Services */}
      <section
        className="py-20 bg-muted/30"
        style={{ backgroundImage: `url(${bgGenerico})` }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4 text-primary-foreground">
              Serviços de <span className="text-primary-foreground">Locação</span>
            </h2>
            <p className="text-xl text-primary-foreground font-poppins max-w-2xl mx-auto">
              Equipamentos modernos com flexibilidade e suporte completo
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-6 justify-center"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {rentalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-montserrat font-bold text-4xl md:text-5xl mb-12 text-center"
            >
              Por que escolher a <span className="text-accent">Dellatorre</span>?
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[Clock, Shield, Truck].map((Icon, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover-lift border-2">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="text-accent" size={24} />
                      </div>
                      <h3 className="font-montserrat font-bold text-xl mb-3">
                        {i === 0
                          ? "Atendimento 24h"
                          : i === 1
                            ? "Tecnologia de Ponta"
                            : "Frota Moderna"}
                      </h3>
                      <p className="text-muted-foreground font-poppins">
                        {i === 0
                          ? "Suporte full-time para emergências e consultas operacionais."
                          : i === 1
                            ? "Acompanhamento 24h, gestão de riscos e parceiros estratégicos."
                            : "Veículos modernos, rastreados e com manutenção preventiva regular."}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
              Pronto para iniciar seu projeto?
            </h2>
            <p className="text-xl mb-8 font-poppins opacity-90 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar a levar seu negócio
              adiante com segurança e eficiência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[hsl(var(--blue-deep))] text-primary-foreground hover:bg-[hsl(var(--blue-deep))]/80 font-montserrat font-bold text-lg px-8 py-6 group"
              >
                <a href="https://wa.link/ua64nw" target="_blank" rel="noopener noreferrer">
                  Fale com um Especialista
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground hover:bg-primary-foreground hover:text-accent/80 text-accent font-montserrat font-bold text-lg px-8 py-6 group"
              >
                <a href="/contato">Enviar Mensagem</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />

      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.link/ua64nw"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-50"
      >
        <img
          src={whatsapp} // coloque a logo na pasta /public
          alt="WhatsApp"
          className="w-20 h-20 hover:scale-110 transition-transform"
        />
      </a>
    </div>
  );
};

export default Index;
