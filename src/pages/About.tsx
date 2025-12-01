import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, TrendingUp, Award, Star, Trophy } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import ourStory from "@/assets/our-story.jpg";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import teamMember4 from "@/assets/team-member-4.jpg";

const About = ({ isRTL, setIsRTL }) => {
  const stats = [
    { number: "500+", label: "Clients Worldwide", icon: Users },
    { number: "50+", label: "Team Members", icon: Users },
    { number: "30+", label: "Countries Served", icon: Target },
    { number: "98%", label: "Customer Satisfaction", icon: Star },
  ];

  const timeline = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Started with a team of 5 AI researchers and developers with a vision to democratize AI.",
    },
    {
      year: "2019",
      title: "First Product Launch",
      description: "Launched our first AI-powered analytics tool, helping businesses make data-driven decisions.",
    },
    {
      year: "2020",
      title: "Series A Funding",
      description: "Raised $15M to expand our team and accelerate product development.",
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Opened offices in Europe and Asia, serving clients in over 30 countries.",
    },
    {
      year: "2022",
      title: "AI Excellence Award",
      description: "Recognized as Innovator of the Year by the Global AI Association.",
    },
  ];

  const team = [
    {
      name: "Michael Roberts",
      role: "CEO & Founder",
      description: "Former AI researcher at MIT with 15+ years of experience in machine learning.",
      image: teamMember1,
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      description: "Expert in natural language processing and neural networks architecture.",
      image: teamMember2,
    },
    {
      name: "David Chen",
      role: "Head of Product",
      description: "Specializes in user experience design for AI-powered applications.",
      image: teamMember3,
    },
    {
      name: "Emily Rodriguez",
      role: "AI Research Lead",
      description: "PhD in Computer Science with focus on computer vision and deep learning.",
      image: teamMember4,
    },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Industry Leader",
      description: "Ranked #1 in AI tools for SMBs by TechReview Magazine for three consecutive years.",
    },
    {
      icon: Award,
      title: "Innovation Award",
      description: "Winner of the Global AI Innovation Award 2022 for breakthrough NLP technology.",
    },
    {
      icon: Star,
      title: "Customer Satisfaction",
      description: "Achieved 98% customer satisfaction rating in independent user surveys.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation isRTL={isRTL} setIsRTL={setIsRTL} />
      
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-primary/10 via-highlight/20 to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6">
              About IntelliTools
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're on a mission to democratize artificial intelligence and make cutting-edge AI tools accessible to businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">Our Story</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                Founded in 2018, IntelliTools began with a simple vision: to make artificial intelligence accessible to businesses of all sizes. What started as a small team of 5 AI enthusiasts has grown into a leading provider of AI-powered solutions serving over 500 companies worldwide.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                Our journey began when our founders recognized the gap between enterprise-level AI solutions and what small to medium businesses could afford. They set out to bridge that gap by creating powerful, yet affordable AI tools that deliver real business value.
              </p>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <Card key={index} className="animate-fade-in-up border-primary/20" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardContent className="p-4 sm:p-6">
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-2" />
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1">{stat.number}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
            
            <div className="animate-fade-in-up order-first lg:order-last">
              <img 
                src={ourStory} 
                alt="Our Story" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-muted-foreground">
              Driving innovation through accessible artificial intelligence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="animate-fade-in-up hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="w-12 h-12 text-primary mr-4" />
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  To empower businesses with accessible, affordable, and powerful AI tools that drive innovation, efficiency, and growth.
                </p>
                <p className="text-muted-foreground">
                  We believe that artificial intelligence should not be a privilege of large corporations, but a tool available to all businesses to thrive in the digital age.
                </p>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in-up hover:shadow-lg transition-shadow" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-12 h-12 text-primary mr-4" />
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  To be the leading provider of AI solutions that transform how businesses operate and compete in the global marketplace.
                </p>
                <p className="text-muted-foreground">
                  We envision a future where artificial intelligence seamlessly integrates into everyday business processes, enabling organizations to focus on creativity and strategic growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Innovation Journey</h2>
            <p className="text-lg text-muted-foreground">
              Milestones in our pursuit of AI excellence
            </p>
          </div>
          
          {/* Desktop: Alternating Timeline with Central Spine */}
          <div className="max-w-6xl mx-auto relative hidden md:block">
            {/* Central Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 -translate-x-1/2" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center gap-8 animate-fade-in-up ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Card */}
                  <div className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-primary/30 border border-border">
                      <CardContent className="p-6">
                        <div className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-highlight/10 border border-primary/20 mb-4`}>
                          <span className="text-sm font-bold text-primary">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Center Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-highlight border-4 border-background shadow-lg group-hover:scale-125 transition-transform" />
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="w-[calc(50%-2rem)]" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile: Vertical Timeline with Left Spine */}
          <div className="max-w-2xl mx-auto relative md:hidden">
            {/* Left Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />
            
            <div className="space-y-8 pl-16">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Dot */}
                  <div className="absolute -left-[2.6rem] top-6">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-highlight border-4 border-background shadow-lg" />
                  </div>
                  
                  {/* Card */}
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/30 border border-border">
                    <CardContent className="p-5">
                      <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-highlight/10 border border-primary/20 mb-3">
                        <span className="text-sm font-bold text-primary">{item.year}</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              The brilliant minds behind our AI innovations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="animate-fade-in-up hover:shadow-lg transition-all hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Achievements</h2>
            <p className="text-lg text-muted-foreground">
              Recognitions and milestones that validate our commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="animate-fade-in-up hover:shadow-lg transition-all hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <achievement.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
