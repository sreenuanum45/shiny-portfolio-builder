import { Code, Database, Globe, Smartphone, Server, Palette } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "Angular"]
    },
    {
      title: "Backend Development", 
      icon: Server,
      skills: ["Node.js", "Python", "Express", "Django", "REST APIs", "GraphQL"]
    },
    {
      title: "Database & Cloud",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "AWS", "Docker", "Kubernetes"]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["React Native", "Flutter", "iOS", "Android", "Expo", "Ionic"]
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Go"]
    },
    {
      title: "Design & Tools",
      icon: Palette,
      skills: ["Figma", "Adobe XD", "Git", "VS Code", "Postman", "Jira"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical expertise and the tools I use to build amazing applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card-elevated p-8 group hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-primary rounded-lg mr-4 group-hover:shadow-glow transition-all duration-300">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-3 bg-skill-bg rounded-lg hover:bg-accent/10 transition-colors duration-200"
                  >
                    <span className="text-foreground font-medium">{skill}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? 'bg-accent' : 'bg-border'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Redux", "Zustand", "Prisma", "Supabase", "Firebase", "Stripe", 
              "Socket.io", "Jest", "Cypress", "Webpack", "Vite", "ESLint",
              "Prettier", "GitHub Actions", "Vercel", "Netlify"
            ].map((tech, index) => (
              <span
                key={index}
                className="skill-tag"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;