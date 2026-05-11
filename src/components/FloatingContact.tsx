import { useState } from "react";
import { MessageCircle, Send, X, Plus } from "lucide-react";

export const FloatingContact = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      {open && (
        <>
          <a
            href="https://wa.me/995500000000"
            target="_blank"
            rel="noreferrer"
            className="glass-strong flex items-center gap-3 rounded-full py-2.5 pl-3 pr-5 text-sm font-medium shadow-[var(--shadow-elev)] transition hover:scale-[1.03]"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[hsl(142_70%_45%)] text-background">
              <MessageCircle className="h-4 w-4" />
            </span>
            WhatsApp
          </a>
          <a
            href="https://t.me/caucasusvoyage"
            target="_blank"
            rel="noreferrer"
            className="glass-strong flex items-center gap-3 rounded-full py-2.5 pl-3 pr-5 text-sm font-medium shadow-[var(--shadow-elev)] transition hover:scale-[1.03]"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[hsl(200_85%_55%)] text-background">
              <Send className="h-4 w-4" />
            </span>
            Telegram
          </a>
        </>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close contact" : "Open contact"}
        className="animate-pulse-ring grid h-14 w-14 place-items-center rounded-full text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-105"
        style={{ background: "var(--gradient-gold)" }}
      >
        {open ? <X className="h-5 w-5" /> : <Plus className="h-6 w-6" />}
      </button>
    </div>
  );
};
