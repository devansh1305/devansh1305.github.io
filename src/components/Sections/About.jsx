import React from "react";
import { User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about-me" className="py-16 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-primary/10 rounded-full">
            <User className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
             <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/assets/about-me/selfie-boy.gif" 
                  alt="Devansh Panirwala" 
                  className="object-cover w-full h-full"
                />
             </div>
          </div>
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Hello there!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                I'm Devansh Panirwala (call me Dave) and I am currently a senior student in Computer Science major in Purdue University. My main concentration is Systems and Security. I made this website to understand how web-development works and I think I am doing a pretty good job for a beginner.
              </p>
              <p>
                Enough about the website, let's talk about me. I mostly enjoy doing back-end stuff like designing server architecture, optimization, security, etc. Right now I would call myself a full-stack developer but I have yet to learn a lot about web development before claiming that accolade.
              </p>
              <p>
                What I like about software development is how multiple technologies come together and work towards a common goal to satisfy the requirements of a user. When thinking about it, different people might compare the development cycle and architecture to many analogies they have experienced in their life. This abstraction on multiple layers helps bring people from all over the world with different ethnicity together to make other people's lives better. I got in Computer Science so I could help as many people as I can with innovative solutions and improve everyone's life.
              </p>
              <p>
                In my spare time, I usually like to exchange ideas with people from diverse backgrounds about current issues happening around the world and discuss how new technologies can solve these issues. Recently I have been teaching myself to cook as I find it very therapeutic when I get overwhelmed with things around me. Strangely enough, I cannot stop thinking about how similar cooking is to development.
              </p>
              <p>
                The purpose of this website is to learn about various technologies and showcase the work I have done till now (2 birds with a stone :P). Send a mail to devanshpanirwala@gmail.com if you need to get into contact or need my help for anything! :)
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
