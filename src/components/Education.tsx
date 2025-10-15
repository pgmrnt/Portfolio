import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const education = {
  degree: "Sistemas da Informação",
  status: "Cursando 6º Período",
  institution: "Universidade",
};

const courses = [
  {
    title: "Versionamento de Código com Git e GitHub",
    description: "Controle de versão, branches, pull requests e colaboração em projetos",
    icon: Award,
  },
  {
    title: "Manipulação de Arquivos no Linux",
    description: "Comandos shell, gerenciamento de sistemas e automação de tarefas",
    icon: Award,
  },
  {
    title: "Linguagem Python 3",
    description: "Fundamentos, estruturas de dados e desenvolvimento de aplicações",
    icon: Award,
  },
];

export const Education = () => {
  return (
    <section id="formacao" className="py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Formação <span className="gradient-text">Acadêmica</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Main Degree */}
        <Card className="card-gradient p-8 md:p-12 border-border/50 shadow-lg max-w-3xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="p-4 rounded-2xl bg-primary/10 glow-effect">
              <GraduationCap className="h-12 w-12 text-primary" />
            </div>
            <div className="space-y-3 flex-1">
              <h3 className="text-2xl md:text-3xl font-bold gradient-text">
                {education.degree}
              </h3>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-muted-foreground">
                <span className="font-medium text-accent">{education.status}</span>
                <span className="hidden md:inline">•</span>
                <span>{education.institution}</span>
              </div>
              <p className="text-foreground/90 leading-relaxed pt-2">
                Graduação focada em desenvolvimento de software, análise de sistemas, 
                gestão de projetos e infraestrutura de TI. Formação completa em 
                tecnologias modernas e metodologias ágeis.
              </p>
            </div>
          </div>
        </Card>

        {/* Courses */}
        <div className="space-y-8 pt-8">
          <div className="flex items-center gap-3 justify-center">
            <BookOpen className="h-6 w-6 text-accent" />
            <h3 className="text-2xl font-semibold text-accent">Cursos & Certificações</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <Card 
                  key={index}
                  className="card-gradient p-6 border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:scale-105 cursor-default animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent/10">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <h4 className="font-semibold text-foreground">{course.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Timeline of Goals */}
        <div className="space-y-8 pt-12">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-accent">Linha do Tempo de Evolução</h3>
            <p className="text-muted-foreground mt-2">Objetivos e metas de desenvolvimento profissional</p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-accent" />
            
            <div className="space-y-12">
              {[
                { year: "Atual", title: "Transição de Carreira", description: "Focado em construir portfólio e adquirir experiência prática" },
                { year: "2025", title: "Primeira Oportunidade", description: "Ingressar em empresa de tecnologia como desenvolvedor júnior" },
                { year: "2026", title: "Especialização", description: "Aprofundar conhecimentos em Data Science e Machine Learning" },
                { year: "2027+", title: "Evolução Contínua", description: "Contribuir com projetos de impacto e crescer profissionalmente" },
              ].map((goal, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <Card className="card-gradient p-6 border-border/50 inline-block">
                      <div className="space-y-2">
                        <div className="text-primary font-bold text-lg">{goal.year}</div>
                        <h4 className="font-semibold text-foreground">{goal.title}</h4>
                        <p className="text-sm text-muted-foreground">{goal.description}</p>
                      </div>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 rounded-full bg-primary glow-effect" />
                  </div>
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
