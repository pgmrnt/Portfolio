import { Card } from "@/components/ui/card";
import { 
  Code2, 
  Database, 
  GitBranch, 
  Terminal, 
  FileSpreadsheet,
  MessageSquare,
  Users,
  Lightbulb,
  Target,
  Heart
} from "lucide-react";
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  ResponsiveContainer 
} from "recharts";

const technicalSkills = [
  { name: "Python", level: 85, icon: Code2 },
  { name: "Git/GitHub", level: 80, icon: GitBranch },
  { name: "Linux", level: 75, icon: Terminal },
  { name: "Excel", level: 90, icon: FileSpreadsheet },
  { name: "Análise de Dados", level: 70, icon: Database },
];

const softSkills = [
  { name: "Comunicação", icon: MessageSquare, description: "Habilidade em transmitir ideias de forma clara e eficaz" },
  { name: "Resiliência", icon: Target, description: "Capacidade de lidar com desafios e se adaptar a novas situações" },
  { name: "Colaboração Ativa", icon: Users, description: "Trabalho em equipe e disposição para ajudar colegas" },
  { name: "Proatividade", icon: Lightbulb, description: "Iniciativa para identificar problemas e buscar soluções" },
  { name: "Curiosidade", icon: Heart, description: "Para aprender sempre e evoluir continuamente" },
];

const radarData = [
  { skill: "Python", value: 85 },
  { skill: "Git", value: 80 },
  { skill: "Linux", value: 75 },
  { skill: "Excel", value: 90 },
  { skill: "Dados", value: 70 },
];

export const Skills = () => {
  return (
    <section id="habilidades" className="py-24 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Competências & <span className="gradient-text">Habilidades</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Radar Chart */}
          <Card className="card-gradient p-8 border-border/50 shadow-lg">
            <h3 className="text-2xl font-semibold mb-8 text-center text-accent">
              Proficiência Técnica
            </h3>
            <ResponsiveContainer width="100%" height={350}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis 
                  dataKey="skill" 
                  tick={{ fill: "hsl(var(--foreground))", fontSize: 14 }}
                />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "hsl(var(--muted-foreground))" }} />
                <Radar 
                  name="Skills" 
                  dataKey="value" 
                  stroke="hsl(var(--primary))" 
                  fill="hsl(var(--primary))" 
                  fillOpacity={0.5}
                />
              </RadarChart>
            </ResponsiveContainer>
          </Card>

          {/* Technical Skills List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-accent">Habilidades Técnicas</h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="space-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-primary" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="space-y-8 pt-12">
          <h3 className="text-2xl font-semibold text-center text-accent">Soft Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card 
                  key={index} 
                  className="card-gradient p-6 border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:scale-105 cursor-default animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">{skill.name}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
