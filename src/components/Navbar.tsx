import { Mountain } from "lucide-react";
import { Lang, translations } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";

export const Navbar = ({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) => {
  const t = translations[lang].nav;
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="glass-strong mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <span
            className="grid h-9 w-9 place-items-center rounded-full"
            style={{ background: "var(--gradient-gold)" }}
          >
            <Mountain className="h-4.5 w-4.5 text-primary-foreground" strokeWidth={2.5} />
          </span>
          <span className="hidden text-sm font-semibold tracking-widest sm:block">CAUCASUS&nbsp;VOYAGE</span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#tours" className="transition hover:text-foreground">{t.tours}</a>
          <a href="#fleet" className="transition hover:text-foreground">{t.fleet}</a>
          <a href="#contact" className="transition hover:text-foreground">{t.contact}</a>
        </div>
        <LanguageToggle lang={lang} onChange={setLang} />
      </nav>
    </header>
  );
};
