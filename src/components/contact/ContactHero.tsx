const ContactHero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-highlight to-primary/60 opacity-90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 max-w-3xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Get In Touch</h1>
          <p className="text-lg md:text-xl text-white/90">
            Connect with our team to learn how our AI solutions can transform your business or get support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
