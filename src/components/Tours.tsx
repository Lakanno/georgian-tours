import { Clock, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Lang, translations } from "@/lib/i18n";
import abu from "@/assets/tour-abudelauri.jpg";
import ger from "@/assets/tour-gergeti.jpg";
import tsa from "@/assets/tour-tsalka.jpg";

const IMAGES = [abu, ger, tsa];

export const Tours = ({ lang }: { lang: Lang }) => {
  const t = translations[lang].tours;
  return (
    <section id="tours" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-accent">{t.kicker}</p>
          <h2 className="text-3xl font-light leading-tight tracking-tight sm:text-5xl">{t.title}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {t.items.map((tour, i) => (
            <article
              key={tour.name}
              className="glass group relative flex flex-col overflow-hidden rounded-[var(--radius)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elev)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={IMAGES[i]}
                  alt={tour.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="glass absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-medium">
                  <span className="text-muted-foreground">{t.from} </span>
                  <span className="font-semibold text-gradient-gold">{tour.price}</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <h3 className="text-xl font-medium tracking-tight">{tour.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{tour.desc}</p>
                </div>
                <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-4">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    {tour.duration}
                  </div>
                  <Link
                    to={`/tours/${tour.slug}`}
                    className="group/btn inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:scale-[1.03]"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    {t.book}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
