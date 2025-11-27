import React from "react";
import { Heart, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import philanthropyData from "@/data/philanthropy.json";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Philanthropy */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-full">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Philanthropy</h2>
            </div>
            <div className="grid gap-6">
              {philanthropyData.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-[400px] mb-8">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <Button size="lg" asChild>
              <a href="mailto:devanshpanirwala@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Say Hello
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
