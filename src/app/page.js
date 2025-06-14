"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/ProjectList";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <main className="max-w-2xl mx-auto p-4 min-h-screen">
        <Navbar />
        <div className="rounded-3xl my-4 bg-white-50 boxShadow-primary">
          <HeroSection />
          <Projects />
          <Footer />
        </div>
      </main>
    </>
  );
}
