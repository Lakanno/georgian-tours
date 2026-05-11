import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, Check, Calendar, ArrowRight } from "lucide-react";
import { translations } from "@/lib/i18n";
import { useLanguage } from "@/lib/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { ItineraryAccordion } from "@/components/ItineraryAccordion";
import abu from "@/assets/tour-abudelauri.jpg";
import ger from "@/assets/tour-gergeti.jpg";
import tsa from "@/assets/tour-tsalka.jpg";

const IMAGES: Record<string, string> = {
  abudelauri: abu,
  gergeti: ger,
  tsalka: tsa,
};

const TourDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang, setLang } = useLanguage();
  const t = translations[lang].tours;
  const tour = t.items.find((it) => it.slug === slug);

  if (!tour) return <Navigate to="/" replace />;

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar lang={lang} setLang={setLang} />
      <main className="px-5 pb-24 pt-28 sm:px-8 sm:pt-32">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.back}
          </Link>

          <div className="glass overflow-hidden rounded-[var(--radius)]">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img
                src={IMAGES[tour.slug]}
                alt={tour.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
            </div>

            <div className="p-6 sm:p-10">
              <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border/60 pb-8">
                <div className="max-w-2xl">
                  <p className="mb-2 text-[11px] uppercase tracking-[0.25em] text-accent">
                    {t.kicker}
                  </p>
                  <h1 className="text-3xl font-light leading-tight tracking-tight sm:text-5xl">
                    {tour.name}
                  </h1>
                  <p className="mt-4 text-base text-muted-foreground sm:text-lg">{tour.long}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {t.from}
                  </div>
                  <div className="text-4xl font-semibold text-gradient-gold">{tour.price}</div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    {tour.duration}
                  </div>
                </div>
              </div>

              <div className="grid gap-10 py-10 md:grid-cols-2">
                <section>
                  <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                    {t.detailsTitle}
                  </h2>
                  <ItineraryAccordion items={tour.itinerary} />
                </section>

                <section>
                  <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                    {t.includesTitle}
                  </h2>
                  <ul className="mb-10 space-y-3">
                    {tour.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 flex-none text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                    {t.scheduleTitle}
                  </h2>
                  <ul className="space-y-2">
                    {tour.schedule.map((d, i) => (
                      <li
                        key={i}
                        className="glass flex items-center gap-3 rounded-full px-4 py-2.5 text-sm"
                      >
                        <Calendar className="h-4 w-4 text-accent" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <div className="flex justify-end border-t border-border/60 pt-8">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-[1.02]"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  {t.bookCta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer lang={lang} />
      <FloatingContact />
    </div>
  );
};

export default TourDetails;
