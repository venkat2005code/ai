import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    lines: ["support@intellitools.com", "sales@intellitools.com"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+1 (415) 555-0123", "+1 (415) 555-0124"],
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["123 AI Innovation Drive", "San Francisco, CA 94105"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Monday - Friday: 9AM - 6PM PST", "Weekend: 10AM - 4PM PST"],
  },
];

const ContactInfoForm = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-8">
          {/* Left Column: Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="bg-card rounded-xl border border-border p-5 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    {info.lines.map((line, i) => (
                      <p key={i} className="text-sm text-muted-foreground">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name<span className="text-destructive">*</span>
                </label>
                <Input id="name" placeholder="John Doe" required />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address<span className="text-destructive">*</span>
                </label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number<span className="text-destructive">*</span>
                </label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" required />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject<span className="text-destructive">*</span>
                </label>
                <Input id="subject" placeholder="How can we help you?" required />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message<span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your inquiry..."
                  rows={5}
                  required
                />
              </div>

              <div className="flex items-start gap-2">
                <Checkbox id="privacy" checked={agreed} onCheckedChange={(checked) => setAgreed(checked === true)} />
                <label htmlFor="privacy" className="text-sm text-muted-foreground cursor-pointer">
                  I agree to the Privacy Policy
                </label>
              </div>

              <Button type="submit" className="w-full" disabled={!agreed}>
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoForm;
