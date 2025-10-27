import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Faq = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const faqs = [
    {
      question: "Qual é a área de atuação da Dellatorre Transportes?",
      answer:
        "Atuamos em todo o território nacional, oferecendo serviços de transporte e locação de equipamentos para diversos segmentos, incluindo construção civil, indústria, agronegócio e eventos.",
    },
    {
      question: "Como funciona o rastreamento em tempo real?",
      answer:
        "Todos os nossos veículos são equipados com tecnologia GPS de última geração, permitindo o acompanhamento completo da sua carga em tempo real através de nossa plataforma online. Você recebe atualizações constantes sobre a localização e status da entrega.",
    },
    {
      question: "Quais tipos de equipamentos estão disponíveis para locação?",
      answer:
        "Oferecemos locação de empilhadeiras, containers, muncks, guindastes e geradores de energia. Todos os equipamentos passam por manutenção periódica e são operados por profissionais qualificados.",
    },
    {
      question: "A Dellatorre realiza transporte de cargas especiais?",
      answer:
        "Sim, somos especializados em transporte de cargas pesadas, equipamentos de grande porte, geradores e materiais para construção civil. Nossa frota diversificada nos permite atender necessidades específicas de cada tipo de carga.",
    },
    {
      question: "Como solicitar um orçamento?",
      answer:
        "Você pode solicitar um orçamento através do formulário de contato em nosso site, pelo WhatsApp (+55 18 99806-0024) ou por e-mail (comercial@dellatorretransportes.com.br). Nossa equipe responde rapidamente com uma proposta personalizada.",
    },
    {
      question: "A frota possui seguro?",
      answer:
        "Sim, trabalhamos com parceiros de seguros renomados como Tokio Marine Seguradora, garantindo cobertura completa para todas as operações de transporte e locação.",
    },
    {
      question: "Qual o diferencial da Dellatorre?",
      answer:
        "Combinamos mais de 15 anos de experiência com tecnologia de ponta, frota moderna 100% rastreada, parceiros confiáveis e um compromisso inabalável com segurança, pontualidade e excelência no atendimento.",
    },
    {
      question: "Há suporte disponível fora do horário comercial?",
      answer:
        "Sim, oferecemos suporte 24/7 para atender emergências e garantir que suas operações nunca parem. Nossa equipe está sempre disponível para auxiliar.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="py-20 bg-background relative overflow-hidden flex-1">
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full translate-y-48 -translate-x-48"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16 mt-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
                Perguntas Frequentes
              </h2>
              <div className="h-1 w-24 bg-gradient-accent mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground">
                Tire suas dúvidas sobre nossos serviços
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-lg transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
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
              Ficou com alguma dúvida?
            </h2>
            <p className="text-xl mb-8 font-poppins opacity-90 max-w-2xl mx-auto">
              Entre em contato conosco para um atendimento personalizado. Estamos prontos para ajudar!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[hsl(var(--blue-deep))] text-primary-foreground hover:bg-[hsl(var(--blue-deep))]/80 font-montserrat font-bold text-lg px-8 py-6 group"
              >
                <a href="https://wa.link/ua64nw" target="_blank" rel="noopener noreferrer">
                  Falar com especialista
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Faq;
