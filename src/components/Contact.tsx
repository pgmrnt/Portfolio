import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Download, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://rnt-renan.app.n8n.cloud/webhook/portifolio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        toast({
          title: "Mensagem enviada!",
          description: "Obrigado pelo contato. Responderei em breve.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Falha ao enviar mensagem");
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Ocorreu um erro. Por favor, tente novamente ou entre em contato por email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadCV = (format: string) => {
    toast({
      title: `Download iniciado`,
      description: `Currículo em formato ${format.toUpperCase()} será baixado em breve.`,
    });
  };

  return (
    <section id="contato" className="py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interessado em colaborar ou discutir oportunidades? Estou sempre aberto a novos desafios e projetos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="card-gradient p-8 border-border/50 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Nome</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Seu nome completo"
                  required
                  className="bg-background/50 border-border/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu@email.com"
                  required
                  className="bg-background/50 border-border/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Assunto</label>
                <Input
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Qual o motivo do contato?"
                  required
                  className="bg-background/50 border-border/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Mensagem</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Descreva sua proposta ou mensagem..."
                  rows={5}
                  required
                  className="bg-background/50 border-border/50 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-glow text-primary-foreground glow-effect"
                size="lg"
                disabled={isSubmitting}
              >
                <Mail className="mr-2 h-5 w-5" />
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </Card>

          {/* Contact Info & Download */}
          <div className="space-y-6">
            <Card className="card-gradient p-8 border-border/50 space-y-6">
              <h3 className="text-2xl font-semibold text-accent">Informações de Contato</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:renatorenansilva@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-background/30 hover:bg-background/50 transition-all group"
                >
                  <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium">renatorenansilva@gmail.com</div>
                  </div>
                </a>

                <a 
                  href="tel:+5534992613141"
                  className="flex items-center gap-4 p-4 rounded-lg bg-background/30 hover:bg-background/50 transition-all group"
                >
                  <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-sm text-muted-foreground">Telefone</div>
                    <div className="font-medium">(34) 99261-3141</div>
                  </div>
                </a>
              </div>

              <div className="pt-4 border-t border-border/50">
                <h4 className="font-semibold mb-4">Redes Sociais</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/pgmrnt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-background/30 hover:bg-primary/10 transition-all group"
                  >
                    <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="https://linkedin.com/in/renato-silva-797b97263"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-background/30 hover:bg-primary/10 transition-all group"
                  >
                    <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </Card>

            <Card className="card-gradient p-8 border-border/50 space-y-6">
              <h3 className="text-2xl font-semibold text-accent flex items-center gap-2">
                <Download className="h-6 w-6" />
                Download Currículo
              </h3>
              
              <p className="text-muted-foreground">
                Faça o download do meu currículo em diferentes formatos:
              </p>

              <div className="space-y-3">
                <Button 
                  variant="outline"
                  className="w-full justify-start border-primary/50 hover:border-primary hover:bg-primary/10"
                  onClick={() => handleDownloadCV('pdf')}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Baixar em PDF
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full justify-start border-primary/50 hover:border-primary hover:bg-primary/10"
                  onClick={() => handleDownloadCV('docx')}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Baixar em Word
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full justify-start border-primary/50 hover:border-primary hover:bg-primary/10"
                  onClick={() => handleDownloadCV('txt')}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Baixar em Texto
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
