import { FC } from "react";
import Transition from "../components/utils/Transition";
import Marquee from "react-fast-marquee";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="mt-8">
      <Transition delay={1}>
        <p className="text-lg my-3">
          A{" "}
          <span className="border-2 p-1 mx-1 rounded-md">
            {" "}
            product designer
          </span>{" "}
        </p>
      </Transition>
      <Transition delay={1.8}>
        <p className="text-lg my-3">
          and
          <span className="border-2 p-1 mx-1 rounded-md">
            frontend developer
          </span>{" "}
        </p>
      </Transition>
      <Transition delay={2.6}>
        <p className="text-lg my-3">
          based in{" "}
          <span className="border-2 p-1 mx-1 rounded-md">New York City</span>{" "}
        </p>
      </Transition>

      <div className="flex">
        <Transition delay={3.4}>
          <p className="text-lg mt-3">who...</p>
        </Transition>
        <Transition delay={4.2}>
          <div className="bg-[#27292E] py-2 px-3 ml-2 rounded-md w-72">
            <Marquee className=" text-white rounded-md text-lg" pauseOnHover>
              &nbsp; Designs usable interfaces – Builds interactive applications
              – Maintains scalabale design systems – Builds Figma plugins –
              Teaches code to design students – Helps puppies find homes – Is
              just trying to do his best –
            </Marquee>
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default Hero;
