import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const PricingFAQ = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mt-2">Answers to common questions about plans and billing.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Can I change plans later?</AccordionTrigger>
              <AccordionContent>Yes, you can upgrade or downgrade your plan at any time from your account settings.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is there a setup fee?</AccordionTrigger>
              <AccordionContent>No, there are no setup fees for any of the plans.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What payment methods are accepted?</AccordionTrigger>
              <AccordionContent>We accept all major credit cards and invoicing for Enterprise customers.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Do you offer discounts?</AccordionTrigger>
              <AccordionContent>We offer discounts for annual billing and educational institutions.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
