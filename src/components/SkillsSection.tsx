import { Mic, Music, Sliders, Star } from "lucide-react";

const skills = [
  {
    icon: Mic,
    title: "Vocal Mastery",
    description: "Expertise in various vocal techniques, range expansion, and breath control for powerful performances.",
  },
  {
    icon: Music,
    title: "Composition",
    description: "Advanced understanding of music theory, melody creation, and harmonic structures.",
  },
  {
    icon: Sliders,
    title: "Audio Engineering",
    description: "Proficiency in mixing and mastering tools to ensure studio-quality sound production.",
  },
  {
    icon: Star,
    title: "Stage Presence",
    description: "Dynamic performance skills that engage audiences and create memorable live experiences.",
  },
];

const SkillsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="section-subtitle mb-4">Expertise</p>
              <h2 className="section-title leading-tight">
                Professional Skills & <br />
                <span className="text-gradient-primary">Artistic Abilities</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              With years of dedicated practice and professional experience, I have honed a diverse set of skills
              that allow me to deliver exceptional musical experiences. From vocal precision to creative composition,
              every aspect of my craft is polished to perfection.
            </p>
          </div>

          {/* Right - Skills Grid */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-secondary/30 border border-border/30 hover:border-primary/50 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {skill.title}
                </h4>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
