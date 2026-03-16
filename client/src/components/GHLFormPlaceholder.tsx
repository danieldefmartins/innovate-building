import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_NUMBERS } from "@/lib/constants";

interface GHLFormPlaceholderProps {
  service?: string;
  variant?: "default" | "compact";
}

/**
 * Placeholder contact form until GHL form ID is configured.
 * Once the GHL form is set up, replace this with the actual iframe embed.
 */
export default function GHLFormPlaceholder({ service, variant = "default" }: GHLFormPlaceholderProps) {
  const height = variant === "compact" ? "min-h-[300px]" : "min-h-[400px]";

  return (
    <div className={`${height} flex flex-col items-center justify-center gap-6 p-8 bg-muted rounded-lg border-2 border-dashed border-border`}>
      <div className="text-center">
        <h3 className="text-heading text-xl mb-2">
          {service ? `Request a Free ${service} Estimate` : "Request a Free Estimate"}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          Call us directly or we'll set up the contact form shortly
        </p>
      </div>
      <a href={`tel:${PHONE_NUMBERS.MAIN.tel}`}>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
          <Phone className="mr-2 w-5 h-5" />
          {PHONE_NUMBERS.MAIN.display}
        </Button>
      </a>
    </div>
  );
}
