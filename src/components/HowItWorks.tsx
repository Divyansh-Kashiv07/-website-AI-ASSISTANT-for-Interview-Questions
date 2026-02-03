const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description: "Tell us about your target role, industry, and experience level to personalize your preparation."
  },
  {
    number: "02",
    title: "Practice with AI",
    description: "Engage with our intelligent chatbot for realistic interview simulations and instant feedback."
  },
  {
    number: "03",
    title: "Review & Improve",
    description: "Analyze your performance, identify weak areas, and refine your answers with expert guidance."
  },
  {
    number: "04",
    title: "Ace Your Interview",
    description: "Walk into your real interview with confidence, well-prepared answers, and proven strategies."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Process</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A simple four-step process to transform your interview preparation and boost your confidence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-7xl font-display font-bold text-accent/10 absolute -top-4 -left-2">
                {step.number}
              </div>
              <div className="relative pt-8">
                <h3 className="font-display text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 text-2xl text-accent/30">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
