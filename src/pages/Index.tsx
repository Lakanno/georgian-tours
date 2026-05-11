import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Tours } from "@/components/Tours";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Fleet } from "@/components/Fleet";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { MobileStickyWhatsApp } from "@/components/MobileStickyWhatsApp";
import { useLanguage } from "@/lib/LanguageContext";

const Index = () => {
  const { lang, setLang } = useLanguage();
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Tours lang={lang} />
        <WhyChooseUs lang={lang} />
        <Fleet lang={lang} />
      </main>
      <Footer lang={lang} />
      <FloatingContact />
      <MobileStickyWhatsApp lang={lang} />
    </div>
  );
};

export default Index;
