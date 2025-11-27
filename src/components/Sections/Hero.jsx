import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 space-y-4 text-center md:text-left animate-in slide-in-from-left duration-700">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
            Devansh Panirwala
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Resume on the Web
          </p>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Everyone needs their own little spot on the interwebs, and this is mine. Welcome to my resume, on the web!
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center md:justify-start">
            <Link to="about-me" smooth={true} duration={500} offset={-70}>
              <Button size="lg">Get Started</Button>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-70}>
              <Button variant="outline" size="lg" className="text-foreground hover:text-foreground">Contact Me</Button>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center animate-in slide-in-from-right duration-700">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
             <img
              src="/assets/photo.png"
              alt="Devansh Panirwala"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
