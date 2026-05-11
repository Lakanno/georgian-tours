import { Lang } from "@/lib/i18n";

const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ka", label: "GE" },
  { code: "ru", label: "RU" },
];

export const LanguageToggle = ({ lang, onChange }: { lang: Lang; onChange: (l: Lang) => void }) => (
  <div className="glass inline-flex items-center rounded-full p-1 text-xs font-semibold tracking-wider">
    {LANGS.map((l) => {
      const active = lang === l.code;
      return (
        <button
          key={l.code}
          onClick={() => onChange(l.code)}
          className={`relative rounded-full px-3 py-1.5 transition-colors ${
            active ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
          aria-pressed={active}
        >
          {active && (
            <span
              className="absolute inset-0 rounded-full"
              style={{ background: "var(--gradient-gold)" }}
              aria-hidden
            />
          )}
          <span className="relative">{l.label}</span>
        </button>
      );
    })}
  </div>
);
