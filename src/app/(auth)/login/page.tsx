"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.svg";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineEyeOff,
} from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
    console.log("Login:", { email, password, rememberMe });
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-50/60 p-4 pt-24 sm:p-8 sm:pt-24">
      <Card className="w-full max-w-[440px] rounded-2xl border shadow-sm">
        <CardHeader className="pb-2 text-center">
          <div className="mx-auto mb-4">
            <Image src={logo} alt="Farmiva logo" className="mx-auto h-auto w-32" priority />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Sign in to your account
          </h2>
        </CardHeader>
        <CardContent className="pt-4">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="login-email">Email address</Label>
              <div className="relative flex items-center">
                <Input
                  id="login-email"
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

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="login-password">Password</Label>
              <div className="relative flex items-center">
                <Input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="pl-10 pr-10"
                />
                <HiOutlineLockClosed className="pointer-events-none absolute left-3 text-lg text-slate-400" />
                <button
                  type="button"
                  className="absolute right-3 flex items-center text-lg text-slate-400 transition-colors hover:text-slate-600"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                </button>
              </div>
            </div>

            {/* Remember me + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex cursor-pointer select-none items-center gap-2">
                <Checkbox
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(!!checked)}
                />
                <span className="text-slate-600">Remember me</span>
              </label>
              <Link href="/forgot-password" className="font-semibold text-primary hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Don't have an account */}
            <p className="text-sm text-slate-500">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="font-semibold text-primary hover:underline">
                Create one free
              </Link>
            </p>

            {/* Submit */}
            <Button type="submit" className="w-full py-6 text-base font-bold shadow-md hover:shadow-lg">
              Sign In
            </Button>

            {/* Divider */}
            <div className="relative my-2 flex items-center justify-center">
              <Separator className="w-full" />
              <span className="absolute bg-card px-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                or continue with
              </span>
            </div>

            {/* Social Login */}
            <Button type="button" variant="outline" className="w-full gap-2 py-5 font-semibold">
              <FcGoogle className="text-lg" />
              Google
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
