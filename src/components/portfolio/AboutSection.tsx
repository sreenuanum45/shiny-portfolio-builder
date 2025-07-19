import { User, MapPin, Calendar, Award } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { number: "3+", label: "Years Experience", icon: Calendar },
    { number: "20+", label: "Projects Completed", icon: Award },
    { number: "15+", label: "Technologies", icon: User },
    { number: "100%", label: "Client Satisfaction", icon: Award },
  ];

  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know more about my background, skills, and passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-6"></div>
              <div className="relative bg-card rounded-2xl p-8 shadow-strong">
                <div className="aspect-square bg-gradient-primary rounded-xl flex items-center justify-center">
                  <User className="w-32 h-32 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-display font-semibold text-foreground">
                Full Stack Developer
              </h3>
              <div className="flex items-center text-muted-foreground mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Hyderabad, India</span>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with expertise in modern web technologies. 
                I love creating efficient, scalable solutions that make a real impact. My journey 
                in software development has been driven by curiosity and a desire to solve 
                complex problems through elegant code.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or mentoring fellow developers. I believe in continuous 
                learning and staying updated with the latest industry trends.
              </p>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-2 gap-4 py-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Education</h4>
                <p className="text-muted-foreground">B.Tech Computer Science</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Experience</h4>
                <p className="text-muted-foreground">3+ Years</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Email</h4>
                <p className="text-muted-foreground">sreenu@example.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                <p className="text-muted-foreground">+91 9876543210</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center card-elevated p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;