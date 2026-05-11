import { Users, Compass } from "lucide-react";
import { Lang, translations } from "@/lib/i18n";
import suv from "@/assets/fleet-suv.jpg";
import van from "@/assets/fleet-minivan.jpg";

export const Fleet = ({ lang }: { lang: Lang }) => {
  const t = translations[lang].fleet;
  const cards = [
    { ...t.suv, img: suv, icon: Compass },
    { ...t.van, img: van, icon: Users },
  ];
  return (
    <section id="fleet" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div
        className="absolute inset-x-0 top-0 -z-10 h-px"
        style={{ background: "linear-gradient(to right, transparent, hsl(var(--border)), transparent)" }}
      />
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-accent">{t.kicker}</p>
            <h2 className="text-3xl font-light leading-tight tracking-tight sm:text-5xl">{t.title}</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">{t.sub}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.name}
                className="glass group relative overflow-hidden rounded-[var(--radius)] p-6 sm:p-8"
              >
                <div className="relative -mx-6 -mt-6 mb-6 aspect-[16/10] overflow-hidden sm:-mx-8 sm:-mt-8">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    width={1280}
                    height={896}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-medium tracking-tight">{c.name}</h3>
                    <p className="mt-2 max-w-md text-sm text-muted-foreground">{c.desc}</p>
                  </div>
                  <div className="glass flex shrink-0 items-center gap-2 rounded-full px-3 py-1.5 text-xs">
                    <Icon className="h-3.5 w-3.5 text-accent" />
                    <span className="font-medium">{c.seats}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
