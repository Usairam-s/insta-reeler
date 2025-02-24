"use client";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger onClick={() => setIsOpen(true)}>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription className="flex pt-28 flex-col gap-4 items-center">
              <a
                href="http://insta-post-maker.netlify.app"
                target="_blank"
                onClick={() => setIsOpen(false)}
                className="border p-2 rounded-md text-sm hover:bg-primary hover:font-medium hover:text-white"
              >
                Try Insta Post Maker ↗
              </a>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
