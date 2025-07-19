import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl float-animation" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/20 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/5 rounded-full blur-xl float-animation" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="fade-in-up">
          <h1 className="hero-title mb-6">
            Anumandla Sreenu
          </h1>
          <p className="hero-subtitle mb-8 max-w-2xl mx-auto">
            QA Automation Engineer
          </p>
          <p className="text-lg text-white/70 mb-12 max-w-3xl mx-auto">
            Specialized in building scalable test automation frameworks for web and API platforms. 
            Expert in Selenium WebDriver, REST Assured, TestNG, and CI/CD integration.
          </p>
        </div>

        <div className="fade-in-up-delay flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button className="btn-hero">
            View My Work
          </Button>
          <Button variant="outline" className="btn-ghost">
            Contact Me
          </Button>
        </div>

        {/* Social Links */}
        <div className="fade-in-up-delay flex justify-center space-x-6 mb-12">
          <a 
            href="https://github.com/sreenuanum45" 
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6 text-white" />
          </a>
          <a 
            href="https://linkedin.com/in/anumandla-sreenu" 
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
          <a 
            href="mailto:anumandlasreenu@gmail.com" 
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Email Contact"
          >
            <Mail className="w-6 h-6 text-white" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;