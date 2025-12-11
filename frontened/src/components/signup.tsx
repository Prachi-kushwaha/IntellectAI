import { SignUp } from "@clerk/clerk-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Loader2 } from "lucide-react";
import { GoogleIcon } from "@/components/ui/google";
import { useState } from "react";
import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

export default function SignUpPage() {
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded || !user) return;

    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: user.id,
        email: user.primaryEmailAddress?.emailAddress,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
      }),
    }).finally(() => {
      window.location.href = "/dashboard";
    });
  }, [isLoaded, user]);

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create your account</CardTitle>
          <CardDescription>Welcome! Please fill in the details to get started.</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">

          {/* --- Social OAuth Buttons --- */}
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              onClick={() => {
                setLoadingProvider("github");
                window.location.href = "/sign-up#/?strategy=oauth_github";
              }}
            >
              {loadingProvider === "github" ? (
                <Loader2 className="animate-spin size-4" />
              ) : (
                <>
                  <Github className="size-4 mr-2" />
                  GitHub
                </>
              )}
            </Button>

            <Button
              variant="outline"
              onClick={() => {
                setLoadingProvider("google");
                window.location.href = "/sign-up#/?strategy=oauth_google";
              }}
            >
              {loadingProvider === "google" ? (
                <Loader2 className="animate-spin size-4" />
              ) : (
                <>
                  <GoogleIcon className="size-5 mr-2" />
                  Google
                </>
              )}
            </Button>
          </div>

          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex-1 h-px bg-border"></span>
            or
            <span className="flex-1 h-px bg-border"></span>
          </div>

          {/* ---- Clerk's Built-In Form ---- */}
          <SignUp
            routing="path"
            path="/sign-up"
            appearance={{
              elements: {
                formButtonPrimary: "bg-primary text-primary-foreground hover:bg-primary/90",
                card: "shadow-none",
                cardBox: "shadow-none",
              },
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}
