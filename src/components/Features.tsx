const features = [
  {
    icon: "🎯",
    title: "Personalized Questions",
    description: "Get tailored interview questions based on your target role, industry, and experience level."
  },
  {
    icon: "💬",
    title: "Real-time Feedback",
    description: "Receive instant, constructive feedback on your answers to improve with every practice session."
  },
  {
    icon: "📊",
    title: "Progress Tracking",
    description: "Monitor your improvement over time with detailed analytics and performance insights."
  },
  {
    icon: "🏢",
    title: "Industry Specific",
    description: "Practice with questions from tech, finance, healthcare, and more specialized industries."
  },
  {
    icon: "🎤",
    title: "Mock Interviews",
    description: "Simulate real interview scenarios with our AI interviewer for authentic practice."
  },
  {
    icon: "📚",
    title: "Resource Library",
    description: "Access tips, strategies, and best practices from industry experts and hiring managers."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Features</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Everything You Need to Succeed
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our comprehensive platform provides all the tools and resources to help you prepare effectively and confidently.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
