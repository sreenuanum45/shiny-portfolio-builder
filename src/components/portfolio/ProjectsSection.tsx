import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard. Built with modern technologies for optimal performance.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend"
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive analytics dashboard with interactive charts, real-time data visualization, and customizable reporting features for business intelligence.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Data Visualization"
    },
    {
      title: "Social Media App",
      description: "Modern social media application with real-time messaging, content sharing, and advanced user interaction features. Optimized for mobile and desktop.",
      image: "/api/placeholder/400/250",
      technologies: ["React Native", "Node.js", "Socket.io", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Mobile"
    },
    {
      title: "Learning Management System",
      description: "Comprehensive LMS platform with course management, video streaming, progress tracking, and interactive assessments for educational institutions.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS S3"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Education"
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather application with detailed forecasts, location-based services, and interactive maps. Features offline capabilities and push notifications.",
      image: "/api/placeholder/400/250",
      technologies: ["Flutter", "Dart", "OpenWeather API", "SQLite"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Mobile"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work demonstrating various skills and technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-elevated group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
                  <Eye className="w-12 h-12 text-white/50" />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button size="sm" variant="secondary" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-skill-bg text-primary text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-2 pt-4 border-t border-border">
                  <Button variant="default" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;