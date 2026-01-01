import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <div className="w-12 h-1 bg-secondary rounded-full mx-auto mb-6" />
        <h1 className="mb-4 text-6xl md:text-8xl font-serif font-bold text-primary">404</h1>
        <h2 className="mb-4 text-xl md:text-2xl font-serif font-medium text-foreground">
          Page Not Found
        </h2>
        <p className="mb-8 text-muted-foreground">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="default" asChild>
            <a href="#/">
              <Home className="h-4 w-4" aria-hidden="true" />
              Back to Home
            </a>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
