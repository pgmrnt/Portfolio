import { Card } from "@/components/ui/card";
import { Briefcase, Code, TrendingUp } from "lucide-react";

const experiences = [
  {
    title: "Projetos Pessoais de Desenvolvimento",
    period: "2023 - Presente",
    type: "Aprendizado Prático",
    description: "Desenvolvimento de projetos pessoais para consolidar conhecimentos e construir portfólio profissional.",
    achievements: [
      "Desenvolvimento de portfólio profissional responsivo com React, TypeScript e Tailwind CSS",
      "Integração com n8n para automação de emails - sistema envia notificações automáticas quando o formulário de contato é preenchido",
      "Criação de scripts de automação com Python para otimização de tarefas",
      "Desenvolvimento de análises de dados usando bibliotecas como Pandas e Matplotlib",
      "Implementação de controle de versão com Git e GitHub em todos os projetos",
      "Configuração e gerenciamento de ambientes Linux para desenvolvimento",
    ],
    icon: Code,
  },
  {
    title: "Transição de Carreira - Área Tech",
    period: "2024 - Presente",
    type: "Desenvolvimento Profissional",
    description: "Processo de transição estruturada para a área de tecnologia com foco em desenvolvimento e análise de dados.",
    achievements: [
      "Estudo intensivo de Python e suas aplicações em automação e análise de dados",
      "Participação em comunidades de desenvolvedores e projetos open source",
      "Desenvolvimento de projetos práticos alinhados com demandas do mercado",
      "Networking ativo com profissionais da área de tecnologia",
    ],
    icon: TrendingUp,
  },
];

export const Experience = () => {
  return (
    <section id="experiencia" className="py-24 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Experiência <span className="gradient-text">Profissional</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <Card 
                key={index}
                className="card-gradient p-8 md:p-10 border-border/50 hover:border-primary/50 transition-all hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 glow-effect">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 items-center text-muted-foreground">
                          <span className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4" />
                            {exp.type}
                          </span>
                          <span>•</span>
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/90 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-3 pt-2">
                    <h4 className="font-semibold text-accent">Principais Entregas & Resultados:</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Future Pipeline */}
        <Card className="card-gradient p-8 border-border/50 mt-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-accent flex items-center gap-3">
              <TrendingUp className="h-6 w-6" />
              Pipeline de Projetos Futuros
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Desenvolvimento Full Stack</h4>
                <p className="text-sm text-muted-foreground">
                  Expandir conhecimentos para incluir desenvolvimento frontend e backend completo
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Machine Learning</h4>
                <p className="text-sm text-muted-foreground">
                  Aprofundar em algoritmos de ML e suas aplicações práticas em análise de dados
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Cloud Computing</h4>
                <p className="text-sm text-muted-foreground">
                  Dominar plataformas cloud como AWS, Azure ou GCP para deploy e escalabilidade
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">DevOps & CI/CD</h4>
                <p className="text-sm text-muted-foreground">
                  Implementar práticas de DevOps e pipelines automatizados de integração contínua
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
