import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "2the Point (Adaptive Learning)",
      description: "Built hybrid Selenium automation framework (POM + DDT) from scratch with cross-browser testing capabilities. Automated 80+ test cases achieving 100% functional coverage of checkout, quiz, and dashboard modules.",
      image: "/api/placeholder/400/250",
      technologies: ["Selenium WebDriver", "TestNG", "Maven", "Java", "Jenkins", "Cucumber", "BDD"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Test Automation"
    },
    {
      title: "IoT Marketplace Testing",
      description: "Comprehensive API testing framework with performance testing using JMeter. Automated 50+ REST API test cases and simulated 10,000+ concurrent device requests, identifying memory leaks.",
      image: "/api/placeholder/400/250",
      technologies: ["REST Assured", "Postman", "JMeter", "WireMock", "TestNG", "Java"],
      liveUrl: "#",
      githubUrl: "#",
      category: "API Testing"
    },
    {
      title: "NLP-Driven Test Automation",
      description: "Innovative codeless automation system converting natural-language requirements into executable tests with 82% accuracy. Reduced test design effort by 65% through NLP integration.",
      image: "/api/placeholder/400/250",
      technologies: ["Selenium", "Java", "BDD", "Natural Language Processing", "API Testing"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Innovation"
    },
    {
      title: "CI/CD Test Integration",
      description: "Integrated test suites into Jenkins CI/CD pipeline with Git hooks, enabling automated nightly and post-deployment builds. Reduced manual effort by 70% and flaky test failures by 30%.",
      image: "/api/placeholder/400/250",
      technologies: ["Jenkins", "Git", "Maven", "TestNG", "Selenium", "CI/CD"],
      liveUrl: "#",
      githubUrl: "#",
      category: "DevOps"
    },
    {
      title: "Performance Testing Framework",
      description: "Designed and executed comprehensive performance testing using JMeter. Identified memory leaks and optimized API response times by 40% during peak traffic conditions.",
      image: "/api/placeholder/400/250",
      technologies: ["JMeter", "Performance Testing", "Load Testing", "API Optimization"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Performance"
    },
    {
      title: "Cross-Browser Testing Suite",
      description: "Comprehensive cross-browser testing framework ensuring 100% compliance across Chrome, Firefox, and Edge browsers. Detected and logged 20+ compatibility issues.",
      image: "/api/placeholder/400/250",
      technologies: ["Selenium Grid", "Cross-browser Testing", "TestNG", "Maven"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Testing"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
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