
import Header from "@/components/navigation/header.server";
import HeroAnimation from "./hero.client";

export default function Hero() {
  return (
    <section id="home" className="min-h-[87vh] scroll-mt-24 flex flex-col">
      <Header></Header> 

      <div className="flex-1 flex justify-center items-center px-8 mb-[82px]">
        <HeroAnimation  />
      </div>
    </section>
  );
}
