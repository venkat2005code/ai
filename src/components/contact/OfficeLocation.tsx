import { Train, Car, Bike } from "lucide-react";

const amenities = [
  {
    icon: Train,
    title: "Public Transit",
    description: "2 blocks from BART and Muni stations",
  },
  {
    icon: Car,
    title: "Parking",
    description: "Underground parking available for visitors",
  },
  {
    icon: Bike,
    title: "Bike Racks",
    description: "Secure bike storage on-site",
  },
];

const OfficeLocation = () => {
  return (
    <section className="py-12 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Office Location</h2>
          <p className="text-muted-foreground mt-2">
            Visit our headquarters in the heart of San Francisco's tech district.
          </p>
        </div>

        {/* Map Container */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden mb-8 animate-fade-in-up">
          <div className="w-full h-[400px] bg-muted flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0194033179544!2d-122.39492768468186!3d37.79260897975804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807c4b9e1c3d%3A0x4ae5d2437c2f9e0a!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            />
          </div>
        </div>

        {/* Amenities */}
        <div className="grid md:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.title}
              className="bg-card rounded-xl border border-border p-6 text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <amenity.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{amenity.title}</h3>
              <p className="text-sm text-muted-foreground">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;
