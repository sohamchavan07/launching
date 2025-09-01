import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, Clock, Mail } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Truebg</span>
          </div>
          <Badge variant="secondary" className="px-3 py-1">
            <Clock className="h-3 w-3 mr-1" />
            Coming Soon
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <Badge variant="outline" className="text-primary border-primary/50 bg-primary/10 px-4 py-2 text-lg font-semibold">
              🚀 Launching Soon
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Background Verification
              <span className="block text-primary">Made Simple</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              The most comprehensive and secure platform for background checks. 
              Verify identities, credentials, and records with confidence.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 my-16">
            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="p-6 text-center space-y-3">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Comprehensive Checks</h3>
                <p className="text-muted-foreground text-sm">
                  Criminal records, employment history, education verification, and more
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="p-6 text-center space-y-3">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Security</h3>
                <p className="text-muted-foreground text-sm">
                  Enterprise-level encryption and compliance with industry standards
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="p-6 text-center space-y-3">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Lightning Fast</h3>
                <p className="text-muted-foreground text-sm">
                  Get results in minutes, not days. Automated workflows and real-time updates
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Be the First to Know
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Join our waitlist to get early access and exclusive updates about Truebg's launch.
              </p>
            </div>

            {isSubscribed ? (
              <Card className="max-w-md mx-auto bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center space-y-2">
                  <CheckCircle className="h-8 w-8 text-primary mx-auto" />
                  <h3 className="text-lg font-semibold text-primary">Thank you!</h3>
                  <p className="text-muted-foreground text-sm">
                    You'll be notified as soon as we launch.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <form onSubmit={handleNotifyMe} className="max-w-md mx-auto space-y-4">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button type="submit" className="px-6">
                    <Mail className="h-4 w-4 mr-2" />
                    Notify Me
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  No spam. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-border">
        <div className="text-center text-muted-foreground">
          <p>&copy; 2025 Truebg. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
