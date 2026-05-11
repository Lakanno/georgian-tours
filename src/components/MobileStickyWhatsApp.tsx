import { MessageCircle } from "lucide-react";
import { translations, type Lang } from "@/lib/i18n";

interface Props {
  lang: Lang;
}

export function MobileStickyWhatsApp({ lang }: Props) {
  const label = translations[lang].mobileCta.whatsapp;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden pb-[env(safe-area-inset-bottom)]">
      <a
        href="https://wa.me/995500000000"
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2.5 py-4 text-sm font-semibold text-primary-foreground shadow-[0_-4px_24px_rgba(0,0,0,0.25)] transition active:opacity-90"
        style={{ background: "var(--gradient-gold)" }}
      >
        <MessageCircle className="h-5 w-5" />
        {label}
      </a>
    </div>
  );
}
