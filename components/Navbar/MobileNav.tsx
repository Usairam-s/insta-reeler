import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavLink from "./NavLink";
import { ThemeToggler } from "../theme/ThemeToggler";

const MobileNav = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <div className="-mt-2">
            <ThemeToggler />
          </div>

          <SheetHeader>
            <SheetDescription className="flex pt-40 flex-col gap-4 items-center">
              <NavLink
                href="/insta"
                title="Instagram"
                className="block py-2 text-2xl"
              />

              <NavLink
                href="/facebook"
                title="Facebook"
                className="block py-2 text-2xl"
              />
              <NavLink
                href="/tiktok"
                title="Tiktok"
                className="block py-2 text-2xl"
              />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
