import { Users, Truck, BadgeCheck } from "lucide-react";
import { translations, type Lang } from "@/lib/i18n";

interface Props {
  lang: Lang;
}

const ICONS = [
  { key: "experts" as const, Icon: Users },
  { key: "fleet4x4" as const, Icon: Truck },
  { key: "pricing" as const, Icon: BadgeCheck },
];

export function WhyChooseUs({ lang }: Props) {
  const t = translations[lang].whyUs;

  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-center text-[11px] uppercase tracking-[0.25em] text-accent">
          {t.kicker}
        </p>
        <h2 className="mb-12 text-center text-3xl font-light leading-tight tracking-tight sm:text-4xl">
          {t.title}
        </h2>

        <div className="grid gap-6 sm:grid-cols-3">
          {ICONS.map(({ key, Icon }) => {
            const item = t[key];
            return (
              <div
                key={key}
                className="glass flex flex-col items-center gap-4 rounded-[var(--radius)] p-8 text-center"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
