import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is InstaReeler?",
    answer:
      "InstaReeler is a tool that allows you to download Instagram reels quickly and easily.",
  },
  {
    question: "Is InstaReeler free to use?",
    answer:
      "Yes, InstaReeler is completely free to use with no hidden charges.",
  },
  {
    question: "How do I download a reel?",
    answer:
      "Simply copy the URL of the Instagram reel, paste it into the input field, and click the download button.",
  },
  {
    question: "Are there any download limits?",
    answer:
      "No, you can download as many reels as you want without any restrictions.",
  },
  {
    question: "Is InstaReeler safe to use?",
    answer:
      "Yes, InstaReeler is safe to use and does not store any of your personal information.",
  },
];

const FAQ = () => {
  return (
    <div className=" border-t border-b border-slate-200 dark:border-slate-100/10 py-16">
      <h2 className="text-center px-6 text-primary font-semibold lg:text-5xl md:text-4xl text-3xl mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-6xl mx-auto px-6">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
