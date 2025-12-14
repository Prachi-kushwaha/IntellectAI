import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const res = await fetch(import.meta.env.VITE_API_URL + "/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        username,
        email,
        password
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.ok) {
      localStorage.setItem("token", data.token);
localStorage.setItem("userId", data.user.id);

      alert("Account created!");
      navigate("/home");
    } else {
      alert(data.error || "Signup failed");
    }
  };

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit}>
          <FieldGroup>

            {/* Full Name */}
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </Field>

            {/* Username */}
            <Field>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <Input
                id="username"
                type="text"
                placeholder="johndoe123"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Field>

            {/* Email */}
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FieldDescription>
                We&apos;ll use this to contact you.
              </FieldDescription>
            </Field>

            {/* Password */}
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>

            {/* Confirm password */}
            <Field>
              <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
              <Input
                id="confirm-password"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Field>

            {/* Submit */}
            <Field>
              <Button type="submit">Create Account</Button>
              <Button variant="outline" type="button">
                Sign up with Google
              </Button>
              <FieldDescription className="px-6 text-center">
                Already have an account? <a href="#">Sign in</a>
              </FieldDescription>
            </Field>

          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
