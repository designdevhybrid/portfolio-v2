import Footer from "@/components/Footer";
import TypeIt from "typeit-react";
import Marquee from "react-fast-marquee";
import { Camera } from "react-feather";

export default function Home() {
  return (
    <main className="w-full max-w-2xl">
      <div className="flex flex-col min-h-screen px-8 pt-8 font-lores font-thin">
        <h3 className="text-xl">Abhishek Kalia</h3>
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
        <div className="bg-white py-2 px-3 mt-2 rounded-md">
          <Marquee className="bg-white text-black rounded-md">
            I can be a React component, multiple React components, or just some
            text.
          </Marquee>
        </div>
      </div>
    </main>
  );
}
