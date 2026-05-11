import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Lang, translations } from "@/lib/i18n";
import hero from "@/assets/hero-mountains.jpg";
import slide2 from "@/assets/tour-abudelauri.jpg";
import slide3 from "@/assets/tour-gergeti.jpg";
import slide4 from "@/assets/tour-tsalka.jpg";

const slides = [hero, slide2, slide3, slide4];

export const Hero = ({ lang }: { lang: Lang }) => {
  const t = translations[lang].hero;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden">
      {/* Slideshow background */}
      <div className="absolute inset-0 -z-10">
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Caucasus landscape"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            width={1920}
            height={1280}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
      </div>

      <div className="grain absolute inset-0 -z-10" />

      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
        <div className="max-w-2xl">
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t.kicker}
          </div>
          <h1 className="text-5xl font-light leading-[1.1] tracking-tight sm:text-7xl md:text-8xl whitespace-pre-line">
            {t.title1 && <>{t.title1} </>}
            <span className="font-semibold italic text-gradient-gold">{t.title2}</span>
          </h1>
          <p className="mt-6 max-w-lg text-base text-muted-foreground sm:text-lg">{t.sub}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#tours"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-[1.02]"
              style={{ background: "var(--gradient-gold)" }}
            >
              {t.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Slide indicators */}
          <div className="mt-10 flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === index ? "w-10 bg-accent" : "w-5 bg-foreground/20 hover:bg-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
