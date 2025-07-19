import { Calendar, MapPin, ExternalLink } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "QA Engineer",
      company: "Getinfy Solutions Private Limited",
      location: "Hyderabad, India",
      duration: "06/2023 - 06/2025",
      type: "Full-time",
      description: "Building scalable test automation frameworks for web and API platforms, integrating them into CI/CD pipelines.",
      achievements: [
        "Built hybrid Selenium automation framework (POM + DDT) from scratch using TestNG, Maven, and Java, improving test scalability and reducing maintenance by 40%",
        "Automated 80+ cross-browser tests for Chrome, Firefox, Edge across user roles, achieving 100% functional coverage",
        "Integrated test suites into Jenkins CI/CD pipeline with Git hooks, reducing manual effort by 70%",
        "Created custom reusable utility classes for WebDriver actions, Excel reading (Apache POI), wait strategies",
        "Automated 50+ REST API test cases using Postman and REST Assured",
        "Executed JMeter performance tests simulating 10,000+ concurrent device requests, identifying memory leak and contributing to 40% API response improvement"
      ],
      technologies: ["Selenium WebDriver", "TestNG", "Maven", "Java", "REST Assured", "JMeter", "Jenkins", "Cucumber"]
    },
    {
      title: "QA Intern",
      company: "Getinfy Solutions Private Limited",
      location: "Hyderabad, India",
      duration: "01/2023 - 06/2023",
      type: "Internship",
      description: "Architected NLP-driven codeless automation and improved test coverage for critical modules.",
      achievements: [
        "Architected NLP-driven codeless automation (Selenium Java/BDD + API tokens), converting natural-language requirements into executable tests with 82% accuracy",
        "Improved test coverage by 30% via test case design for critical modules",
        "Actively participated in daily scrums and sprint planning, aligning QA strategies with agile development cycles",
        "Slashed test design effort by 65% through innovative automation approaches"
      ],
      technologies: ["Selenium", "Java", "BDD", "API Testing", "Natural Language Processing", "Agile/Scrum"]
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