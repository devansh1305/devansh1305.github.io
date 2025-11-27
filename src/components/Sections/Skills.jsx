import React from "react";
import { Wrench, Languages } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import skillsData from "@/data/skills.json";
import languagesData from "@/data/languages.json";

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-full">
                <Wrench className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
            </div>
            <div className="grid gap-6">
              {skillsData.map((skill, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 flex-shrink-0">
                      <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{skill.name}</h4>
                      <p className="text-sm text-muted-foreground">{skill.tech}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-full">
                <Languages className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Languages</h2>
            </div>
            <div className="grid gap-6">
              {languagesData.map((lang, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-1">{lang.language}</h4>
                    <p className="text-muted-foreground italic">"{lang.text}"</p>
                    {lang.translation && (
                      <p className="text-sm text-muted-foreground mt-1">({lang.translation})</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
