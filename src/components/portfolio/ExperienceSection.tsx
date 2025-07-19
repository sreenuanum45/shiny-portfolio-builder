import { Calendar, MapPin, ExternalLink } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Hyderabad, India",
      duration: "2022 - Present",
      type: "Full-time",
      description: "Leading development of scalable web applications using modern technologies.",
      achievements: [
        "Led a team of 5 developers in building a microservices architecture",
        "Improved application performance by 40% through optimization techniques",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd.",
      location: "Bangalore, India",
      duration: "2021 - 2022",
      type: "Full-time",
      description: "Developed and maintained multiple client projects with focus on user experience.",
      achievements: [
        "Built responsive web applications serving 10,000+ daily users",
        "Integrated third-party APIs and payment gateways",
        "Collaborated with UX/UI designers to implement pixel-perfect designs",
        "Reduced bug reports by 50% through comprehensive testing"
      ],
      technologies: ["Vue.js", "Python", "PostgreSQL", "Redis", "Heroku"]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Remote",
      duration: "2020 - 2021",
      type: "Contract",
      description: "Focused on creating engaging user interfaces and improving user experience.",
      achievements: [
        "Developed mobile-first responsive designs",
        "Implemented real-time features using WebSocket connections",
        "Optimized bundle size resulting in 30% faster load times",
        "Created reusable component library used across multiple projects"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"]
    }
  ];

  return (
    <section id="experience" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            My journey through various roles and the impact I've made in each position
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-12">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-5 h-5 bg-gradient-primary rounded-full border-4 border-background shadow-medium"></div>

                {/* Content */}
                <div className="ml-20 w-full">
                  <div className="card-elevated p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                          <div className="flex items-center">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 lg:mt-0">
                        <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="skill-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;