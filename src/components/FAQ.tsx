import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can I get started with your AI tools?",
    answer: "Most of our tools can be implemented within 24 hours. Our team provides comprehensive onboarding and training to ensure a smooth transition.",
  },
  {
    question: "Do you offer custom AI solutions for specific business needs?",
    answer: "Yes, our enterprise plan includes custom AI development services. Our team works closely with you to create solutions tailored to your unique requirements.",
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer 24/7 support through multiple channels including live chat, email, and phone. Our premium plans include dedicated account managers and priority response times.",
  },
  {
    question: "How secure is my data with your AI tools?",
    answer: "Security is our top priority. We use industry-standard encryption, regular security audits, and comply with GDPR and other data protection regulations. Your data is never shared with third parties without your explicit consent.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about our AI solutions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
