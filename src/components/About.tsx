export const About = () => {
  return (
    <section id="sobre" className="py-24 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="card-gradient rounded-2xl p-8 md:p-12 space-y-6 shadow-lg border border-border/50">
          <h3 className="text-2xl font-semibold text-primary">Perfil Profissional</h3>
          
          <p className="text-lg text-foreground/90 leading-relaxed">
            Estou em transição de carreira para a área de programação e busco minha primeira 
            oportunidade de trabalho nas áreas de Desenvolvimento ou Análise de Dados. 
          </p>

          <p className="text-lg text-foreground/90 leading-relaxed">
            Minha experiência inclui projetos pessoais que me proporcionaram uma base 
            sólida. Estou motivado a aprender e crescer na área, contribuindo com minha 
            dedicação e habilidades.
          </p>

          <div className="grid md:grid-cols-3 gap-6 pt-6">
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">6º</div>
              <p className="text-muted-foreground">Período em Sistemas da Informação</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">4+</div>
              <p className="text-muted-foreground">Tecnologias Dominadas</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">100%</div>
              <p className="text-muted-foreground">Dedicação e Proatividade</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card-gradient rounded-xl p-6 space-y-4 border border-border/50">
            <h4 className="text-xl font-semibold text-accent">Estudos em Andamento</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Automações com Python
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Inglês Técnico
              </li>
            </ul>
          </div>

          <div className="card-gradient rounded-xl p-6 space-y-4 border border-border/50">
            <h4 className="text-xl font-semibold text-accent">Objetivo de Carreira</h4>
            <p className="text-muted-foreground leading-relaxed">
              Desenvolver soluções tecnológicas inovadoras, contribuindo para projetos 
              de impacto enquanto expando minhas competências técnicas e comportamentais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
