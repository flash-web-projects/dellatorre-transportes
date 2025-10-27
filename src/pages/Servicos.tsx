import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Truck, Building2, Zap, Factory, Tent, Wheat, Forklift, Container, Construction } from "lucide-react";
import serviceTransport from "@/assets/service-transport.jpg";
import serviceForklift from "@/assets/service-forklift.jpg";
import serviceGenerator from "@/assets/service-generator.jpg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

const Servicos = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const transportServices = [
    {
      icon: Building2,
      title: "Construção Civil",
      description: "Transporte especializado de materiais, pré-moldados, blocos e maquinário pesado para obras de qualquer porte.",
      features: [
        "Logística sincronizada com cronogramas de obra",
        "Redução de custos operacionais",
        "Conformidade com normas NR-11 e NR-12",
        "Entregas pontuais e seguras",
        "Equipe especializada em cargas volumosas",
      ],
      image: serviceTransport,
    },
    {
      icon: Truck,
      title: "Cargas Pesadas",
      description: "Transporte técnico de equipamentos industriais, estruturais e maquinário de grande porte com segurança total.",
      features: [
        "Frota reforçada e especializada",
        "Rotas otimizadas e planejamento detalhado",
        "Seguro completo para cargas de alto valor",
        "Cobertura nacional com rastreamento",
        "Equipe técnica especializada",
      ],
      image: serviceTransport,
    },
    {
      icon: Zap,
      title: "Geradores",
      description: "Transporte especializado de geradores estacionários e móveis para obras, indústrias, hospitais e eventos.",
      features: [
        "Fixação técnica especializada",
        "Rastreamento em tempo real 24/7",
        "Entregas emergenciais disponíveis",
        "Programação de entregas recorrentes",
        "Proteção total durante o transporte",
      ],
      image: serviceGenerator,
    },
    {
      icon: Factory,
      title: "Industrial/Metalúrgico",
      description: "Transporte de peças, insumos industriais e máquinas com planejamento logístico integrado.",
      features: [
        "Planejamento detalhado de rotas e horários",
        "Cumprimento rigoroso de prazos",
        "Redução de paradas na produção",
        "Documentação completa e rastreável",
        "Soluções personalizadas por cliente",
      ],
      image: serviceTransport,
    },
    {
      icon: Tent,
      title: "Coberturas Provisórias",
      description: "Transporte de tendas, galpões e estruturas metálicas para eventos corporativos e sociais.",
      features: [
        "Prazos curtos e entregas urgentes",
        "Cuidado especial com materiais frágeis",
        "Suporte durante montagem e desmontagem",
        "Experiência em eventos de grande porte",
        "Logística reversa incluída",
      ],
      image: serviceTransport,
    },
    {
      icon: Wheat,
      title: "Agrícola",
      description: "Transporte de máquinas agrícolas, insumos e implementos com conhecimento do setor do agronegócio.",
      features: [
        "Frota adaptada para estradas rurais",
        "Sincronização com calendário de safra",
        "Proteção contra intempéries",
        "Conhecimento das necessidades do campo",
        "Disponibilidade em todo território nacional",
      ],
      image: serviceTransport,
    },
  ];

  const rentalServices = [
    {
      icon: Forklift,
      title: "Empilhadeiras",
      description: "Locação de empilhadeiras elétricas, GLP e diesel com operadores qualificados e certificados.",
      features: [
        "Contratos flexíveis (diária, semanal, mensal)",
        "Manutenção preventiva incluída",
        "Redução de custos fixos com equipamentos",
        "Operadores certificados disponíveis",
        "Modelos diversos para cada necessidade",
      ],
      image: serviceForklift,
    },
    {
      icon: Container,
      title: "Containers",
      description: "Soluções modulares para escritórios temporários, armazenagem e apoio em obras e eventos.",
      features: [
        "Estruturas reforçadas e seguras",
        "Opções de personalização disponíveis",
        "Instalação rápida e desinstalação",
        "Diversos tamanhos e configurações",
        "Manutenção e suporte incluídos",
      ],
      image: serviceForklift,
    },
    {
      icon: Construction,
      title: "Munck e Guindastes",
      description: "Equipamentos modernos para içamento, movimentação e posicionamento de cargas pesadas.",
      features: [
        "Operadores certificados NR-11 e NR-18",
        "Planejamento técnico de içamento",
        "Equipamentos modernos e inspecionados",
        "Precisão e segurança garantidas",
        "Cobertura de seguro completa",
      ],
      image: serviceForklift,
    },
    // {
    //   icon: Zap,
    //   title: "Locação de Geradores",
    //   description: "Geradores potentes e silenciosos para garantir energia estável em obras, eventos e emergências.",
    //   features: [
    //     "Energia estável e confiável",
    //     "Suporte técnico 24 horas",
    //     "Instalação imediata",
    //     "Modelos de diversas potências",
    //     "Manutenção preventiva regular",
    //   ],
    //   image: serviceForklift,
    // },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-montserrat font-extrabold text-5xl md:text-6xl mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl md:text-2xl font-poppins opacity-90 leading-relaxed">
              Soluções completas em transporte e locação de equipamentos para impulsionar seu negócio
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="transporte" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-14">
              <TabsTrigger value="transporte" className="text-lg font-montserrat font-semibold">
                Transporte
              </TabsTrigger>
              <TabsTrigger value="locacao" className="text-lg font-montserrat font-semibold">
                Locação
              </TabsTrigger>
            </TabsList>

            <TabsContent value="transporte">
              <div className="mb-12 text-center max-w-3xl mx-auto">
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
                  Serviços de <span className="text-accent">Transporte</span>
                </h2>
                <p className="text-lg text-muted-foreground font-poppins">
                  Frota diversificada e moderna para atender múltiplos segmentos com segurança e eficiência
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {transportServices.map((service, index) => (
                  <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                    <ServiceCard {...service} />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="locacao" className="flex justify-center align-center flex-col w-full">
              <div className="mb-12 text-center max-w-3xl mx-auto">
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
                  Serviços de <span className="text-accent">Locação</span>
                </h2>
                <p className="text-lg text-muted-foreground font-poppins">
                  Equipamentos modernos com flexibilidade de contrato e suporte técnico completo
                </p>
              </div>
              <div className="grid gap-6 justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-w-6xl mx-auto">                {
                rentalServices.map((service, index) => (
                  <div key={index} className="animate-fade-in-up h-full" style={{ animationDelay: `${index * 50}ms` }}>
                    <ServiceCard {...service} />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      {/* CTA Section - Serviços */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
              Precisa de uma <span className="underline underline-offset-4 decoration-accent">solução</span> em transporte?
            </h2>
            <p className="text-xl mb-8 font-poppins opacity-90 max-w-2xl mx-auto">
              Solicite uma cotação e descubra como podemos otimizar sua operação logística.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[hsl(var(--blue-deep))] text-primary-foreground hover:bg-[hsl(var(--blue-deep))]/80 font-montserrat font-bold text-lg px-8 py-6 group"
              >
                <a href="https://wa.link/ua64nw" target="_blank" rel="noopener noreferrer">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground hover:bg-primary-foreground hover:text-accent/80 text-accent font-montserrat font-bold text-lg px-8 py-6 group"
              >
                <a href="/contato">Entre em Contato</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Servicos;
