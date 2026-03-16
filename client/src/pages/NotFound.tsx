import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Home, Phone } from "lucide-react";
import { PHONE_NUMBERS } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-card">
      <div className="container text-center max-w-xl">
        <div className="text-8xl font-display font-black text-accent mb-4">404</div>
        <h1 className="text-display text-3xl mb-4">PAGE NOT FOUND</h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Home className="mr-2 w-5 h-5" />
              BACK TO HOME
            </Button>
          </Link>
          <a href={`tel:${PHONE_NUMBERS.MAIN.tel}`}>
            <Button size="lg" variant="outline" className="border-2">
              <Phone className="mr-2 w-5 h-5" />
              CALL US
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
