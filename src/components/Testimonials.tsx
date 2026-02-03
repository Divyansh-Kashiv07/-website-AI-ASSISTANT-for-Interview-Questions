const testimonials = [
  {
    quote: "PrepAI helped me land my dream job at Google. The AI feedback was incredibly insightful and helped me improve my answers dramatically.",
    author: "Sarah Chen",
    role: "Software Engineer at Google",
    avatar: "SC"
  },
  {
    quote: "After using PrepAI for just two weeks, I felt so much more confident in my interviews. Highly recommend to anyone serious about their career.",
    author: "Michael Roberts",
    role: "Product Manager at Meta",
    avatar: "MR"
  },
  {
    quote: "The industry-specific questions were exactly what I needed. PrepAI understands the nuances of finance interviews better than any other tool.",
    author: "Emily Watson",
    role: "Investment Analyst at Goldman Sachs",
    avatar: "EW"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Trusted by Thousands
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join the growing community of professionals who have transformed their interview skills.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">★</span>
                ))}
              </div>
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
