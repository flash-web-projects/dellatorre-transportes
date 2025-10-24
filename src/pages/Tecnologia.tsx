import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Satellite, Lock, TrendingDown, Bell, FileCheck } from "lucide-react";

const Tecnologia = () => {
  const partners = [
    {
      name: "Buonny",
      description: "Gestão de risco e monitoramento em tempo real",
      features: ["Acompanhamento 24/7", "Alertas de desvio de rota", "Gestão automatizada de riscos"],
    },
    {
      name: "Tokio Marine",
      description: "Seguros de frota e cargas com cobertura completa",
      features: ["Cobertura nacional", "Proteção de alto valor", "Assistência 24 horas"],
    },
    {
      name: "AT&M",
      description: "Averbação eletrônica de transportes",
      features: ["Processo automatizado", "Conformidade legal", "Gestão documental"],
    },
    {
      name: "Sem Parar",
      description: "Mobilidade e gestão de pedágios",
      features: ["Passagem automática", "Relatórios detalhados", "Economia de tempo"],
    },
    {
      name: "Roadcard",
      description: "Gestão de fretes e abastecimento",
      features: ["Controle de despesas", "Rede de postos", "Relatórios gerenciais"],
    },
    {
      name: "Pamcard",
      description: "Pagamentos digitais e vale-pedágio",
      features: ["Segurança financeira", "Gestão centralizada", "Redução de custos"],
    },
  ];

  const benefits = [
    {
      icon: Satellite,
      title: "Acompanhamento em Tempo Real",
      description: "Acompanhamos sua carga 24/7 com precisão e confiabilidade total.",
    },
    {
      icon: Shield,
      title: "Gestão Automatizada de Riscos",
      description: "Sistemas inteligentes que identificam e mitigam riscos automaticamente.",
    },
    {
      icon: Lock,
      title: "Transparência Total",
      description: "Relatórios completos e acesso às informações em tempo real.",
    },
    {
      icon: Bell,
      title: "Bloqueio Remoto",
      description: "Segurança adicional com possibilidade de bloqueio à distância.",
    },
    {
      icon: TrendingDown,
      title: "Redução de Sinistros",
      description: "Tecnologia que comprovadamente reduz índices de sinistros.",
    },
    {
      icon: FileCheck,
      title: "Confiabilidade Total",
      description: "Processos certificados e parceiros homologados.",
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
              Tecnologia & Segurança
            </h1>
            <p className="text-xl md:text-2xl font-poppins opacity-90 leading-relaxed">
              Inovação e parcerias estratégicas para garantir a máxima proteção das suas cargas
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg font-poppins text-muted-foreground leading-relaxed">
              Na Dellatorre Transportes, a tecnologia não é um diferencial — é um compromisso.
              Trabalhamos com os melhores parceiros do mercado para garantir rastreamento total,
              gestão de riscos automatizada e transparência em cada operação.
            </p>
          </div>
        </div>
      </section>

      {/* Parceiros Estratégicos */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-montserrat font-bold text-4xl mb-4 text-white">
              Parceiros <span className="text-white">Estratégicos</span>
            </h2>
            <p className="text-lg text-white font-poppins">
              Trabalhamos com líderes de mercado em tecnologia e segurança
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <Card key={index} className="hover-lift border-2">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="font-montserrat font-bold text-2xl text-accent mb-2">{partner.name}</h3>
                    <p className="text-muted-foreground font-poppins">{partner.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {partner.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></div>
                        <span className="font-poppins">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios da Tecnologia */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat font-bold text-4xl mb-12 text-center">
            Benefícios da Nossa <span className="text-accent">Tecnologia</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover-lift border-2 text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                    <benefit.icon className="text-accent" size={32} />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground font-poppins">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Processo de Segurança */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-montserrat text-white font-bold text-4xl mb-12 text-center">
              Nosso <span className="">Processo de Segurança</span>
            </h2>

            <div className="space-y-6">
              <Card className="hover-lift border-2 border-accent/20">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-montserrat font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl mb-2">Análise de Risco Prévia</h3>
                    <p className="text-muted-foreground font-poppins">
                      Avaliação detalhada da rota, carga e condições antes de cada transporte.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift border-2 border-accent/20">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-montserrat font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl mb-2">Acompanhamento Contínuo</h3>
                    <p className="text-muted-foreground font-poppins">
                      Monitoramento 24/7 com alertas automáticos de desvios.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift border-2 border-accent/20">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-montserrat font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl mb-2">Gestão de Incidentes</h3>
                    <p className="text-muted-foreground font-poppins">
                      Protocolo de resposta rápida com central de monitoramento dedicada.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift border-2 border-accent/20">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-montserrat font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl mb-2">Relatório Completo</h3>
                    <p className="text-muted-foreground font-poppins">
                      Documentação detalhada de cada operação com acesso online ao cliente.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tecnologia;
