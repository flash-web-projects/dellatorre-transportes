import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Instagram, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const Contato = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Criar mensagem para WhatsApp
    const whatsappMessage = `*Nova solicitação de contato*%0A%0A*Nome:* ${formData.name}%0A*E-mail:* ${formData.email}%0A*Telefone:* ${formData.phone || 'Não informado'}%0A*Assunto:* ${formData.subject || 'Não informado'}%0A%0A*Mensagem:*%0A${formData.message}`;

    const whatsappURL = `https://wa.me/5518998060024?text=${whatsappMessage}`;
    window.open(whatsappURL, '_blank');

    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para completar o contato via WhatsApp.",
    });

    // Limpar formulário
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-montserrat font-extrabold text-5xl md:text-6xl mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl md:text-2xl font-poppins opacity-90 leading-relaxed">
              Estamos prontos para atender sua necessidade com agilidade e profissionalismo
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pt-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="hover-lift border-2 text-center">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full mb-4">
                  <Phone className="text-accent" size={24} />
                </div>
                <h3 className="font-montserrat font-bold text-lg mb-2">Telefone</h3>
                <a
                  href="https://wa.me/5518998060024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors font-poppins"
                >
                  +55 18 99806-0024
                </a>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 text-center">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full mb-4">
                  <Mail className="text-accent" size={24} />
                </div>
                <h3 className="font-montserrat font-bold text-lg mb-2">E-mail</h3>
                <a
                  href="mailto:comercial@dellatorretransportes.com.br"
                  className="text-muted-foreground hover:text-accent transition-colors font-poppins text-sm break-all"
                >
                  comercial@dellatorretransportes.com.br
                </a>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 text-center">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full mb-4">
                  <MapPin className="text-accent" size={24} />
                </div>
                <h3 className="font-montserrat font-bold text-lg mb-2">Localização</h3>
                <p className="text-muted-foreground font-poppins text-sm">
                  Interior de São Paulo
                  <br />
                  Atuação Nacional
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 text-center">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full mb-4">
                  <Instagram className="text-accent" size={24} />
                </div>
                <h3 className="font-montserrat font-bold text-lg mb-2">Instagram</h3>
                <a
                  href="https://instagram.com/dellatorretransportes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors font-poppins"
                >
                  @dellatorretransportes
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pt-16 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-montserrat font-bold text-4xl mb-4">
                Envie sua <span className="text-accent">Mensagem</span>
              </h2>
              <p className="text-lg text-muted-foreground font-poppins">
                Preencha o formulário abaixo e entraremos em contato em breve
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-poppins font-medium">
                        Nome Completo *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="font-poppins"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-poppins font-medium">
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="font-poppins"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-poppins font-medium">
                        Telefone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(00) 00000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="font-poppins"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="font-poppins font-medium">
                        Assunto
                      </Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="Assunto da mensagem"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="font-poppins"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-poppins font-medium">
                      Mensagem *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Descreva sua necessidade ou dúvida..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="font-poppins"
                    />
                  </div>
                  <div className="h-full flex align-center justify-center">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-max bg-accent hover:bg-accent/90 font-montserrat font-bold text-lg group"
                    >
                      <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                      Enviar Mensagem
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground text-center font-poppins">
                    Ao enviar, você será redirecionado para o WhatsApp para completar o contato.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* WhatsApp Direct CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
            Prefere falar diretamente?
          </h2>
          <p className="text-lg mb-8 font-poppins opacity-90 max-w-2xl mx-auto">
            Clique no botão abaixo e fale agora mesmo com um de nossos especialistas via WhatsApp
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[hsl(var(--blue-deep))] text-primary-foreground hover:bg-[hsl(var(--blue-deep))]/80 font-montserrat font-bold text-lg px-8 py-6 group"
          >
            <a href="https://wa.me/5518998060024" target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2" size={20} />
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
