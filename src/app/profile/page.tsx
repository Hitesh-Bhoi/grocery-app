"use client";
import React from "react";
import { HiOutlineUser, HiOutlinePencilSquare, HiOutlineLockClosed } from "react-icons/hi2";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ProfilePage = () => {
  // Mock user data
  const user = {
    name: "Hitesh Bhoi",
    email: "hiteshbhoi@example.com",
    phone: "+91 98765 43210",
    address: "123 Green Street, Organic City, 400001",
    joinedDate: "January 2026",
  };

  return (
    <>
      <div className="border-b bg-white px-5 py-6 pt-24">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <div className="flex items-center gap-2">
            <HiOutlineUser className="text-2xl text-primary" />
            <h1 className="text-2xl font-black">Account Settings</h1>
          </div>
          <p className="text-sm text-slate-500">
            Manage your <span className="font-bold text-primary">personal information</span>
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-8">
        <Card className="rounded-2xl border shadow-sm">
          <CardContent className="p-6 sm:p-10">
            <div className="flex flex-col items-center gap-6 border-b pb-8 sm:flex-row sm:gap-8">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary/20 bg-green-50 text-4xl text-primary shadow-sm sm:h-28 sm:w-28 sm:text-5xl">
                <HiOutlineUser />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <h2 className="text-2xl font-black text-slate-900">{user.name}</h2>
                <p className="text-sm text-slate-500">Member since {user.joinedDate}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label className="text-xs font-bold uppercase tracking-wider text-slate-400">Full Name</Label>
                <div className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800">
                  {user.name}
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</Label>
                <div className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800">
                  {user.email}
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone Number</Label>
                <div className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800">
                  {user.phone}
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-bold uppercase tracking-wider text-slate-400">Default Address</Label>
                <div className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800">
                  {user.address}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 pt-4 sm:flex-row">
              <Button className="flex-1 py-6 text-base font-bold shadow-md hover:shadow-lg">
                <HiOutlinePencilSquare className="text-lg" /> Edit Profile
              </Button>
              <Button variant="outline" className="flex-1 py-6 text-base font-bold">
                <HiOutlineLockClosed className="text-lg" /> Change Password
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ProfilePage;
