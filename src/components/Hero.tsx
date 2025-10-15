import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={142}
        className="flex items-center flex-col justify-center px-4 md:px-10 py-20 w-full h-full min-h-screen"
      >
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              Renato R. Silva
            </h1>
            <p className="text-2xl md:text-3xl gradient-text font-semibold">
              Desenvolvedor & Analista de Dados
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Em transição de carreira para programação, buscando desenvolver soluções 
            inovadoras nas áreas de Desenvolvimento e Análise de Dados
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow text-primary-foreground glow-effect transition-all"
              onClick={() => scrollToSection("contato")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Entre em Contato
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 text-white"
              onClick={() => scrollToSection("projetos")}
            >
              Ver Projetos
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-8">
            <a 
              href="https://github.com/pgmrnt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/renato-silva-797b97263" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:renatorenansilva@gmail.com"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Download className="h-6 w-6" />
            </button>
          </div>

          <button 
            onClick={() => scrollToSection("sobre")}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-gray-400 hover:text-primary transition-colors"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </Vortex>
    </section>
  );
};
