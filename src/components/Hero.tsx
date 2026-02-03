import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-accent/20 text-accent-foreground rounded-full border border-accent/30">
              ✨ AI-Powered Interview Preparation
            </span>
          </div>
          
          <h1 className="animate-fade-up text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6" style={{ animationDelay: "0.1s" }}>
            Ace Your Next Interview with{" "}
            <span className="text-gradient">Confidence</span>
          </h1>
          
          <p className="animate-fade-up text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10" style={{ animationDelay: "0.2s" }}>
            Practice with our intelligent AI assistant that provides personalized feedback, 
            real-time coaching, and industry-specific questions to help you land your dream job.
          </p>
          
          <div className="animate-fade-up flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Start Practicing Free
            </Button>
            <Button variant="heroOutline" size="xl">
              Watch Demo
            </Button>
          </div>
          
          <div className="animate-fade-up mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-foreground">10K+</p>
              <p className="text-sm text-primary-foreground/60">Users Prepared</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-foreground">95%</p>
              <p className="text-sm text-primary-foreground/60">Success Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-foreground">500+</p>
              <p className="text-sm text-primary-foreground/60">Companies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
