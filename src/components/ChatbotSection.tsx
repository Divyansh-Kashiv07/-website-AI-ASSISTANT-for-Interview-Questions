const ChatbotSection = () => {
  return (
    <section id="chatbot" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Try It Now</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Start Practicing Today
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Experience our AI interview assistant firsthand. Ask questions, practice responses, and get instant feedback.
          </p>
        </div>
        
        {/* ================================================
            CHATBOT INTEGRATION AREA
            ================================================
            
            Replace this div with your chatbot embed code.
            
            Options:
            1. iframe embed: <iframe src="YOUR_CHATBOT_URL" ... />
            2. Script tag: <script src="YOUR_CHATBOT_SCRIPT" />
            3. React component: <YourChatbotComponent />
            
            Recommended dimensions: min-height 500px
            ================================================ */}
        <div className="max-w-4xl mx-auto">
          <div 
            id="chatbot-container"
            className="min-h-[500px] rounded-2xl bg-card border-2 border-dashed border-accent/30 flex flex-col items-center justify-center p-8 shadow-lg"
          >
            {/* Placeholder - Replace with your chatbot */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🤖</span>
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">AI Interview Assistant</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Your intelligent chatbot will appear here. Embed your chatbot using iframe, script, or React component.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 text-accent text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                Ready for Integration
              </div>
            </div>
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-4">
            💡 Tip: Look for the <code className="bg-muted px-2 py-0.5 rounded">chatbot-container</code> div in the code to add your chatbot
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;
