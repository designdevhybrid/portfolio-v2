import Footer from "@/components/Footer";
import TypeIt from "typeit-react";
import Marquee from "react-fast-marquee";
import { Camera } from "react-feather";
import Transition from "@/components/Transition";

export default function Home() {
  return (
    <main className="w-full max-w-2xl">
      <div className="flex flex-col min-h-screen px-8 pt-8 font-lores font-thin">
        <Transition delay={0.2}>
          <h3 className="text-xl">Abhishek Kalia</h3>
        </Transition>
        <Transition delay={0.6}>
          <p className="mt-10 text-lg leading-loose">
            A{" "}
            <span className="border-2 p-1 mx-1 rounded-md">
              {" "}
              product designer
            </span>{" "}
            <br /> and
            <span className="border-2 p-1 mx-1 rounded-md">
              frontend developer
            </span>
            <br /> based in{" "}
            <span className="border-2 p-1 mx-1 rounded-md">New York City</span>{" "}
            <br /> who...
          </p>
        </Transition>
        <Transition delay={1.2}>
          <div className="bg-white py-2 px-3 mt-2 rounded-md">
            <Marquee className="bg-white text-black rounded-md text-lg">
              &nbsp; Designs usable interfaces – Builds interactive applications
              – Maintains scalabale design systems – Builds Figma Plugins –
              Teaches code to design students – Helps puppies find homes – Is
              just trying to his best –
            </Marquee>
          </div>
        </Transition>
      </div>
    </main>
  );
}
