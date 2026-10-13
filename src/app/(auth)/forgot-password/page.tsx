"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.svg";
import { HiOutlineMail, HiOutlineArrowLeft, HiOutlineCheckCircle } from "react-icons/hi";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-50/60 p-4 pt-24 sm:p-8 sm:pt-24">
      <Card className="w-full max-w-110 rounded-2xl border shadow-sm">
        <CardHeader className="pb-2 text-center">
          <div className="mx-auto mb-4">
            <Image src={logo} alt="Farmiva logo" className="mx-auto h-auto w-32" priority />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {submitted ? "Check your email" : "Reset your password"}
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            {submitted
              ? `We have sent password reset instructions to ${email}`
              : "Enter your registered email address and we'll send you a link to reset your password."}
          </p>
        </CardHeader>
        <CardContent className="pt-4">
          {submitted ? (
            <div className="space-y-5 text-center">
              <HiOutlineCheckCircle className="mx-auto text-5xl text-primary" />
              <Button asChild className="w-full py-6 text-base font-bold">
                <Link href="/login">Return to Sign In</Link>
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="reset-email">Email address</Label>
                <div className="relative flex items-center">
                  <Input
                    id="reset-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                    className="pl-10"
                  />
                  <HiOutlineMail className="pointer-events-none absolute left-3 text-lg text-slate-400" />
                </div>
              </div>

              <Button type="submit" className="w-full py-6 text-base font-bold shadow-md hover:shadow-lg">
                Send Reset Link
              </Button>

              <div className="text-center">
                <Link href="/login" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                  <HiOutlineArrowLeft /> Back to Sign In
                </Link>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
