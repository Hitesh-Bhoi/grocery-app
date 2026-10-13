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
  HiOutlineUser,
  HiOutlinePhone,
} from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle register logic
    console.log("Register:", formData);
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-50/60 p-4 pt-24 sm:p-8 sm:pt-24">
      <Card className="w-full max-w-[480px] rounded-2xl border shadow-sm">
        <CardHeader className="pb-2 text-center">
          <div className="mx-auto mb-4">
            <Image src={logo} alt="Farmiva logo" className="mx-auto h-auto w-32" priority />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Create your account
          </h2>
        </CardHeader>
        <CardContent className="pt-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First + Last Name */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="register-first-name">First name</Label>
                <div className="relative flex items-center">
                  <Input
                    id="register-first-name"
                    type="text"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    autoComplete="given-name"
                    className="pl-10"
                  />
                  <HiOutlineUser className="pointer-events-none absolute left-3 text-lg text-slate-400" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-last-name">Last name</Label>
                <div className="relative flex items-center">
                  <Input
                    id="register-last-name"
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    autoComplete="family-name"
                    className="pl-10"
                  />
                  <HiOutlineUser className="pointer-events-none absolute left-3 text-lg text-slate-400" />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="register-email">Email address</Label>
              <div className="relative flex items-center">
                <Input
                  id="register-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="pl-10"
                />
                <HiOutlineMail className="pointer-events-none absolute left-3 text-lg text-slate-400" />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="register-phone">Phone number</Label>
              <div className="relative flex items-center">
                <Input
                  id="register-phone"
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  className="pl-10"
                />
                <HiOutlinePhone className="pointer-events-none absolute left-3 text-lg text-slate-400" />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="register-password">Password</Label>
              <div className="relative flex items-center">
                <Input
                  id="register-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  autoComplete="new-password"
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

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label htmlFor="register-confirm-password">Confirm password</Label>
              <div className="relative flex items-center">
                <Input
                  id="register-confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  autoComplete="new-password"
                  className="pl-10 pr-10"
                />
                <HiOutlineLockClosed className="pointer-events-none absolute left-3 text-lg text-slate-400" />
                <button
                  type="button"
                  className="absolute right-3 flex items-center text-lg text-slate-400 transition-colors hover:text-slate-600"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                </button>
              </div>
            </div>

            {/* Already have an account */}
            <p className="text-sm text-slate-500">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-primary hover:underline">
                Sign in
              </Link>
            </p>

            {/* Submit */}
            <Button type="submit" className="w-full py-6 text-base font-bold shadow-md hover:shadow-lg">
              Create Account
            </Button>

            {/* Divider */}
            <div className="relative my-2 flex items-center justify-center">
              <Separator className="w-full" />
              <span className="absolute bg-card px-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                or sign up with
              </span>
            </div>

            {/* Social Login */}
            <Button type="button" variant="outline" className="w-full gap-2 py-5 font-semibold">
              <FcGoogle className="text-lg" />
              Google
            </Button>

            {/* Terms */}
            <p className="pt-2 text-center text-xs text-slate-500">
              By creating an account, you agree to our{" "}
              <a href="#" className="underline hover:text-slate-700">Terms of Service</a> and{" "}
              <a href="#" className="underline hover:text-slate-700">Privacy Policy</a>.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
