import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import sobreImg from "@/assets/sobre.png";
import { Truck, Shield, Gauge, MapPin, Wrench, Loader, Archive, Layout } from "lucide-react";
import { Badge } from "@/components/ui/badge";


const Sobre = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const valores = [
    {
      icon: Award,
      title: "Segurança",
      description: "Proteção total em cada operação, priorizando a integridade de pessoas e cargas.",
    },
    {
      icon: Users,
      title: "Comprometimento",
      description: "Dedicação genuína aos objetivos de nossos clientes e parceiros.",
    },
    {
      icon: Target,
      title: "Inovação",
      description: "Busca constante por soluções tecnológicas e processos mais eficientes.",
    },
    {
      icon: Award,
      title: "Pontualidade",
      description: "Cumprimento rigoroso de prazos e cronogramas estabelecidos.",
    },
    {
      icon: Users,
      title: "Respeito",
      description: "Valorização das pessoas, relações e compromissos assumidos.",
    },
  ];

  const vehicleTypes = [
    {
      name: "Utilitários",
      description: "Versáteis para cargas leves e entregas urbanas",
      capacity: "Até 1.5 toneladas",
    },
    {
      name: "Tocos",
      description: "Equilíbrio entre capacidade e mobilidade",
      capacity: "Até 6 toneladas",
    },
    {
      name: "Trucks",
      description: "Robustos para cargas médias e longas distâncias",
      capacity: "Até 14 toneladas",
    },
    {
      name: "Cavalos Mecânicos Simples",
      description: "Potência para grandes volumes",
      capacity: "Até 23 toneladas",
    },
    {
      name: "Cavalos Mecânicos Trucados",
      description: "Máxima capacidade de carga",
      capacity: "Até 35 toneladas",
    },
  ];

  const trailerTypes = [
    {
      name: "Carreta Graneleira",
      icon: Truck, // ícone Lucide
      usage: "Grãos, sementes e cargas a granel",
    },
    {
      name: "Carreta Caçamba",
      icon: Loader,
      usage: "Entulho, terra e materiais de construção",
    },
    {
      name: "Carreta Baú",
      icon: Archive,
      usage: "Cargas protegidas e produtos diversos",
    },
    {
      name: "Carreta Sider",
      icon: Layout,
      usage: "Carga e descarga lateral facilitada",
    },
  ];

  const differentials = [
    {
      icon: Shield,
      title: "100% Acompanhada",
      description: "Monitoramento em tempo real de toda a frota",
    },
    {
      icon: Wrench,
      title: "Manutenção Preventiva",
      description: "Inspeções regulares e manutenção programada para máxima disponibilidade",
    },
    {
      icon: Users,
      title: "Motoristas Qualificados",
      description: "Equipe treinada e certificada em segurança e atendimento",
    },
    {
      icon: Gauge,
      title: "Veículos Modernos",
      description: "Frota renovada com tecnologia de ponta e baixa emissão",
    },
    {
      icon: MapPin,
      title: "Cobertura Nacional",
      description: "Atendimento em todo território brasileiro",
    },
    {
      icon: Shield,
      title: "Seguro Completo",
      description: "Cobertura total de cargas e responsabilidade civil",
    },
  ];


  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-montserrat font-extrabold text-5xl md:text-6xl mb-6">
              Sobre a Dellatorre
            </h1>
            <p className="text-xl md:text-2xl font-poppins opacity-90 leading-relaxed">
              Movimento, confiança e inovação em cada quilômetro percorrido
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}

      <section className="relative py-16 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5 overflow-hidden">

        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-montserrat font-bold text-5xl mb-16 text-center text-primary"
          >
            Nossa <span className="text-accent">História</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Imagem ilustrativa */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-accent/10 rounded-2xl blur-3xl"></div>
              <img
                src={sobreImg}
                alt="Dellatorre Transportes - Nossa história"
                className="relative rounded-2xl shadow-lg object-cover w-full h-[400px] md:h-[450px]"
              />
            </motion.div>

            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg font-poppins text-muted-foreground leading-relaxed"
            >
              <p>
                A <strong>Dellatorre Transportes</strong> foi fundada em 2023, mas nossa história começou muito antes.
                Com mais de 15 anos de experiência do nosso diretor no setor de transporte e logística,
                a empresa nasceu da vontade de criar algo maior: uma operação que unisse expertise técnica,
                tecnologia de ponta e, acima de tudo, compromisso humano.
              </p>
              <p>
                Desde o início, estabelecemos nossa sede no interior de São Paulo com visão nacional.
                Atendemos diversos segmentos — da construção civil ao agronegócio, de hospitais a grandes
                eventos — sempre com o mesmo compromisso: levar movimento, confiança e segurança a cada destino.
              </p>
              <p>
                Cada entrega não é apenas logística. É uma história de parceria, responsabilidade e inovação.
                É o resultado de planejamento detalhado, equipe qualificada e tecnologia aplicada.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Propósito, Visão e Valores */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          {/* Propósito e Visão */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12"
          >
            {[{
              icon: <Target className="text-accent" size={32} />,
              title: "Propósito",
              text: "Levar movimento, confiança e segurança a cada destino, conectando pessoas, empresas e oportunidades através de soluções logísticas de excelência."
            }, {
              icon: <Eye className="text-accent" size={32} />,
              title: "Visão",
              text: "Ser reconhecida nacionalmente como referência em transporte e locação de equipamentos, pela excelência operacional e integridade nas relações."
            }].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift border-2 h-full">
                  <CardContent className="p-8 flex flex-col justify-between">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-accent/10 rounded-lg shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-montserrat font-bold text-2xl">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-lg font-poppins text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Valores */}
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-montserrat font-bold text-4xl mb-10 text-center text-primary-foreground"
            >
              Nossos <span className="text-primary-foreground">Valores</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
            >
              {valores.map((valor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover-lift border-2 text-center flex flex-col items-center justify-start h-full">
                    <CardContent className="p-6 flex flex-col items-center justify-between">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                        <valor.icon className="text-accent" size={28} />
                      </div>
                      <h3 className="font-montserrat font-bold text-lg mb-2 leading-tight min-h-[48px] flex items-center justify-center">
                        {valor.title}
                      </h3>
                      <p className="text-sm font-poppins text-muted-foreground leading-relaxed">
                        {valor.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>


      {/* Nossa Frota */}
      <section className="relative pt-20 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-montserrat font-bold text-5xl mb-8 text-primary"
          >
            Nossa <span className="text-accent">Frota</span>
          </motion.h2>
          <p className="text-lg md:text-xl font-poppins text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A Dellatorre Transportes mantém uma frota diversificada e moderna, composta por utilitários, tocos, trucks, cavalos mecânicos simples e trucados, além de diferentes tipos de carretas. Todos os veículos passam por manutenção preventiva rigorosa e são 100% acompanhados.
          </p>
        </div>
      </section>

      <div className="py-12 flex items-center justify-center gap-4 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5">
        <span className="block w-96 h-1 bg-primary rounded-full"></span>
        <Truck className="text-accent" size={36} />
        <span className="block w-96 h-1 bg-primary rounded-full"></span>
      </div>


      {/* Tipos de Veículos */}
      <section className="bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl mb-2">Tipos de <span className="text-accent">Veículos</span></h2>
            <p className="text-lg text-muted-foreground font-poppins max-w-2xl mx-auto">Diversidade para atender diferentes necessidades de transporte</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {vehicleTypes.map((vehicle, index) => (
              <Card key={index} className="hover-lift border-2 border-secondary/50 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm">
                <CardContent className="p-6 flex flex-col gap-3">
                  <div className="flex items-start gap-3 mb-2">
                    <Truck className="text-accent mt-1" size={28} />
                    <div>
                      <h3 className="font-montserrat font-bold text-xl mb-1">{vehicle.name}</h3>
                      <Badge className="bg-accent/10 text-accent border-accent/30">{vehicle.capacity}</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-poppins">{vehicle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      <div className="py-12 flex items-center justify-center gap-4 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5">
        <span className="block w-96 h-1 bg-primary rounded-full"></span>
        <Truck className="text-accent" size={36} />
        <span className="block w-96 h-1 bg-primary rounded-full"></span>
      </div>

      {/* Tipos de Carretas */}
      <section className="pb-20 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl mb-2">Tipos de <span className="text-accent">Carretas</span></h2>
            <p className="text-lg text-muted-foreground font-poppins max-w-2xl mx-auto">Equipamentos especializados para cada tipo de carga</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {trailerTypes.map((trailer, index) => (
              <Card key={index} className="hover-lift border-2 border-secondary/50 text-center">
                <CardContent className="p-6 flex flex-col items-center gap-3">
                  <div className="text-5xl mb-4">
                    <trailer.icon className="text-accent" size={32} />
                  </div>
                  <h3 className="font-montserrat font-bold text-lg">{trailer.name}</h3>
                  <p className="text-sm text-muted-foreground font-poppins">{trailer.usage}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais da Frota */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-12 text-white">
            Diferenciais da <span className="text-white">Nossa Frota</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {differentials.map((item, index) => (
              <Card key={index} className="hover-lift border-2">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                      <item.icon className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground font-poppins">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-gradient-to-b from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl mb-4">Benefícios para seu Negócio</h2>
            <p className="text-lg font-poppins text-primary-foreground/90">Frota eficiente, segura e moderna, garantindo mais produtividade e tranquilidade para você.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Redução de Tempo Ocioso", description: "Frota moderna e bem mantida minimiza paradas" },
              { title: "Menor Risco de Avarias", description: "Veículos adequados para cada tipo de carga" },
              { title: "Economia de Combustível", description: "Frota moderna com melhor eficiência energética" },
              { title: "Acompanhamento Total", description: "Acompanhamento completo da sua carga 24/7" },
              { title: "Atendimento Personalizado", description: "Suporte rápido e eficiente em todas as etapas" },
              { title: "Cobertura Nacional", description: "Atendemos em todo o território brasileiro" },
            ].map((benefit, index) => (
              <div key={index} className="flex gap-3 items-start bg-white/10 p-4 rounded-lg shadow-md hover:bg-white/20 transition-all">
                <div className="text-[hsl(var(--dellatorre-yellow))] text-2xl flex-shrink-0">✓</div>
                <div>
                  <h4 className="font-montserrat font-semibold mb-1">{benefit.title}</h4>
                  <p className="text-sm opacity-90">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Sobre;
