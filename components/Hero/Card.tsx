import React from "react";
import { LucideIcon } from "lucide-react";

interface CardProps {
  icon: LucideIcon;
  heading: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon: Icon, heading, description }) => {
  return (
    <div className="bg-white flex flex-col items-center gap-4 shadow-lg rounded-lg p-10 text-center">
      <Icon className="text-primary " size={40} />
      <h3 className="text-xl font-semibold ">{heading}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default Card;
