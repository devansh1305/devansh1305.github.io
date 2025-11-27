import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import workData from "@/data/work.json";
import educationData from "@/data/education.json";

const ExperienceItem = ({ item }) => (
  <div className="flex gap-4 mb-8 last:mb-0">
    <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border bg-background">
      <img src={item.icon} alt={item.title} className="w-full h-full object-contain p-1" />
    </div>
    <div>
      <h4 className="text-lg font-semibold">{item.title}</h4>
      <p className="text-muted-foreground">{item.subtitle}</p>
      <p className="text-sm text-muted-foreground/80">{item.period}</p>
      {item.location && <p className="text-sm text-muted-foreground/80">{item.location}</p>}
      {item.specialization && (
        <p className="text-sm mt-1 font-medium text-primary">{item.specialization}</p>
      )}
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="work" className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Work */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-full">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Work</h2>
            </div>
            <Card>
              <CardContent className="pt-6">
                {workData.map((item, index) => (
                  <ExperienceItem key={index} item={item} />
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Education */}
          <div id="education">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-full">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Education</h2>
            </div>
            <Card>
              <CardContent className="pt-6">
                {educationData.map((item, index) => (
                  <ExperienceItem key={index} item={item} />
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
