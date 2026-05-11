import { Mountain, Mail, Phone, MapPin, Instagram, Send, MessageCircle } from "lucide-react";
import { Lang, translations } from "@/lib/i18n";

export const Footer = ({ lang }: { lang: Lang }) => {
  const t = translations[lang].contact;
  return (
    <footer id="contact" className="relative mt-12 overflow-hidden bg-[hsl(220_35%_4%)] px-5 pb-10 pt-20 sm:px-8 sm:pt-28">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, hsl(38 80% 50% / 0.5), transparent)" }}
      />
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-light leading-tight tracking-tight sm:text-6xl">
              {t.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="italic text-gradient-gold">{t.title.split(" ").slice(-1)}</span>
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">{t.sub}</p>
          </div>
          <div className="space-y-4 md:pt-3">
            <a href="mailto:hello@caucasusvoyage.ge" className="glass flex items-center gap-4 rounded-2xl p-4 transition hover:bg-white/5">
              <Mail className="h-5 w-5 text-accent" />
              <span className="text-sm">hello@caucasusvoyage.ge</span>
            </a>
            <a href="tel:+995500000000" className="glass flex items-center gap-4 rounded-2xl p-4 transition hover:bg-white/5">
              <Phone className="h-5 w-5 text-accent" />
              <span className="text-sm">+995 500 000 000</span>
            </a>
            <div className="glass flex items-center gap-4 rounded-2xl p-4">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="text-sm text-muted-foreground">{t.address}</span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-border/60 pt-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <span
              className="grid h-8 w-8 place-items-center rounded-full"
              style={{ background: "var(--gradient-gold)" }}
            >
              <Mountain className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
            </span>
            <span className="text-xs font-semibold tracking-widest">CAUCASUS&nbsp;VOYAGE</span>
          </div>
          <div className="flex items-center gap-3">
            {[Instagram, Send, MessageCircle].map((I, i) => (
              <a
                key={i}
                href="#"
                className="glass grid h-10 w-10 place-items-center rounded-full transition hover:bg-white/10"
                aria-label="social"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Caucasus Voyage. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
};
