import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is AI Tools and how does it work?",
    answer: "AI Tools is an intelligent platform that leverages advanced machine learning and natural language processing to automate workflows, generate insights, and enhance productivity. Our tools integrate seamlessly with your existing systems to provide real-time analytics, content generation, and intelligent automation.",
  },
  {
    question: "Do I need technical expertise to use your AI tools?",
    answer: "No technical expertise is required. Our platform is designed with user-friendly interfaces and intuitive workflows. We provide comprehensive documentation, video tutorials, and dedicated support to help you get started quickly. Most users can start seeing value within minutes of signing up.",
  },
  {
    question: "How secure is my data when using your AI tools?",
    answer: "Security is our top priority. We use enterprise-grade encryption (AES-256) for data at rest and in transit, maintain SOC 2 Type II compliance, and follow strict data privacy regulations including GDPR and CCPA. Your data is never used to train our models without explicit consent, and you maintain full ownership of all your data.",
  },
  {
    question: "What are the differences between your pricing plans?",
    answer: "Our Free plan offers basic AI tools with limited usage, perfect for individuals exploring our platform. The Pro plan includes advanced features, higher usage limits, and priority support. Enterprise plans offer unlimited usage, custom integrations, dedicated support, and SLA guarantees. Visit our Pricing page for detailed feature comparisons.",
  },
  {
    question: "Can I integrate your AI tools with my existing software?",
    answer: "Yes! We offer robust APIs and pre-built integrations with popular platforms like Slack, Microsoft Teams, Salesforce, and more. Our Enterprise plan includes custom integration support to connect with your proprietary systems. Our developer documentation provides detailed integration guides and sample code.",
  },
  {
    question: "How often do you update your AI models?",
    answer: "We continuously improve our AI models with regular updates. Major model updates are released quarterly, with incremental improvements deployed monthly. We monitor performance metrics closely and incorporate the latest research advancements. All updates are backward-compatible, and we notify users of significant changes in advance.",
  },
];

const FAQAccordion = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
