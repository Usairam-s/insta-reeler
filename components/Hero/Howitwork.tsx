import React from "react";

import { steps } from "@/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
interface CardProps {
  icon: LucideIcon;
  heading: string;
  description: string;
}

const Howitwork = () => {
  return (
    <div
      className="  py-24
     border-t border-b border-slate-200 dark:border-slate-100/10"
    >
      <h2 className="text-center text-primary font-semibold lg:text-5xl md:text-4xl text-3xl mb-12">
        How it works?
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {steps.map((step, index) => (
          <Card
            className="flex flex-col items-center justify-center"
            key={index}
          >
            <CardHeader>
              <CardTitle>
                <step.icon className="text-primary" size={40} />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="md:text-2xl text-xl font-semibold">
                {step.heading}
              </p>
            </CardContent>
            <CardFooter>
              <p className="text-center md:text-base text-sm text-muted-foreground">
                {step.description}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Howitwork;
