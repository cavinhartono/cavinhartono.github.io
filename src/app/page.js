"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/ProjectList";

export default function HomePage() {
  return (
    <>
      <main className="max-w-2xl bg-white-50 mx-auto p-4 min-h-screen">
        <Navbar />
        <div className="rounded-2xl boxShadow-primary">
          <HeroSection />
          <Projects />
        </div>
      </main>
    </>
  );
}
