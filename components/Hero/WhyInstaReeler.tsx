import React from "react";
import { benefits } from "@/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const WhyInstaReeler = () => {
  return (
    <div className=" py-16">
      <h2 className="text-center text-primary font-semibold lg:text-5xl md:text-4xl text-3xl mb-12">
        Why InstaReeler?
      </h2>
      <div className="max-w-6xl mx-auto flex flex-col gap-16 px-6">
        {benefits.map((benefit, index) => (
          <Card className="flex items-center gap-4 p-4" key={index}>
            <benefit.icon className="text-primary" size={50} />

            <div>
              <h2 className="md:text-2xl text-xl font-semibold">
                {benefit.heading}
              </h2>
              <p className=" md:text-base text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WhyInstaReeler;
