import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, ArrowRight } from "lucide-react";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";

const testimonials = [
  {
    name: "Dr. Emily Rodriguez",
    role: "Chief Medical Officer",
    organization: "HealthCare Innovations",
    avatar: teamMember1,
    text: "The AI diagnostics platform has transformed how we approach patient care. Early detection rates have skyrocketed, and our physicians have more confidence in their diagnoses.",
    rating: 5,
  },
  {
    name: "James Mitchell",
    role: "VP of Risk Management",
    organization: "SecureBank Global",
    avatar: teamMember2,
    text: "The fraud detection system caught patterns our previous tools missed entirely. We've prevented millions in losses and our customers feel safer than ever.",
    rating: 5,
  },
  {
    name: "Sarah Thompson",
    role: "Director of Operations",
    organization: "RetailTech Solutions",
    avatar: teamMember3,
    text: "Inventory management has never been this efficient. Predictive analytics helped us reduce waste by 40% while maintaining perfect stock levels.",
    rating: 5,
  },
];

const ClientSuccessStories = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Client Success Stories</h2>
          <p className="text-muted-foreground mt-2">Hear from the leaders who've experienced transformative results.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl border border-border p-6 flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.organization}</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 flex-grow italic">"{testimonial.text}"</p>

              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              <a href="#" className="text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                View Project Details <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessStories;
