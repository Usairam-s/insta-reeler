import FAQ from "@/components/Hero/FAQ";
import Footer from "@/components/Hero/Footer";
import Hero from "@/components/Hero/Hero";
import Howitwork from "@/components/Hero/Howitwork";
import WhyInstaReeler from "@/components/Hero/WhyInstaReeler";
import { ThemeToggler } from "@/components/theme/ThemeToggler";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Howitwork />
      <WhyInstaReeler />
      <FAQ />
      <Footer />
    </div>
  );
}
