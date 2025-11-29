import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfoForm from "@/components/contact/ContactInfoForm";
import OfficeLocation from "@/components/contact/OfficeLocation";
import GlobalPresence from "@/components/contact/GlobalPresence";
import QuickSupportLinks from "@/components/contact/QuickSupportLinks";

const Contact = ({ isRTL, setIsRTL }) => {
  return (
    <div className="min-h-screen">
      <Navigation isRTL={isRTL} setIsRTL={setIsRTL} />

      {/* 1) Hero section */}
      <ContactHero />

      {/* 2) Contact Info + Form (two-column layout) */}
      <ContactInfoForm />

      {/* 3) Our Office Location */}
      <OfficeLocation />

      {/* 4) Global Presence */}
      <GlobalPresence />

      {/* 5) Quick Support Links */}
      <QuickSupportLinks />

      <Footer />
    </div>
  );
};

export default Contact;
