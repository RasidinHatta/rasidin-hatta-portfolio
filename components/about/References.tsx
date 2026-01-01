"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/animated-section";

const References = () => {
  return (
    <AnimatedSection className="mt-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
        Professional References
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            name: "Dr. Nurfazrina Binti Mohd Zamry",
            role: "FYP Supervisor",
            email: "nurfazrina.mz@utm.my",
          },
          {
            name: "Prof. Madya. Dr. Mohd. Murtadha bin Mohamad",
            role: "Academic Advisor",
            email: "murtadha@utm.my",
          },
          {
            name: "Sheik Hazrin Bin Sheik Othman",
            role: "Senior IT Executive | Industrial Supervisor",
            email: "sheikhazrin@kiswiresea.com",
          },
        ].map((ref, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-foreground">{ref.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{ref.role}</p>
                <p className="text-sm text-primary">{ref.email}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default References;
