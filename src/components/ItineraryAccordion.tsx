import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  items: readonly string[];
}

export function ItineraryAccordion({ items }: Props) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((step, i) => {
        const separatorIndex = step.indexOf(" · ");
        const label = separatorIndex !== -1 ? step.slice(0, separatorIndex) : `Step ${i + 1}`;
        const detail = separatorIndex !== -1 ? step.slice(separatorIndex + 3) : step;

        return (
          <AccordionItem
            key={i}
            value={`step-${i}`}
            className="border-border/50"
          >
            <AccordionTrigger className="text-sm font-medium text-accent hover:no-underline hover:text-accent/80">
              {label}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {detail}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
