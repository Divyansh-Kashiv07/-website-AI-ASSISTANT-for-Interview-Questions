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
            className="min-h-[600px] rounded-2xl bg-card border border-border overflow-hidden shadow-xl"
          >
            <iframe 
              src="https://cdn.botpress.cloud/webchat/v3.5/shareable.html?configUrl=https://files.bpcontent.cloud/2026/02/03/13/20260203134958-DLHAO1RB.json"
              width="100%"
              height="600"
              className="border-0"
              title="AI Interview Assistant"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;
