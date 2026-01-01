"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { skills } from "@/data/about";
import AnimatedSection from "@/components/ui/animated-section";

const Skills = () => {
  return (
    <AnimatedSection className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skillGroup, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + index * 0.1 }}
          >
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 text-foreground flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <skillGroup.icon className="w-4 h-4 text-primary" />
                  </div>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex: number) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Skills;
