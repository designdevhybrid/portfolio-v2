import { FC } from "react";
import amgen from "../../public/Amgen.png";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import Transition from "@/components/utils/Transition";

interface WorkProps {}

const Work: FC<WorkProps> = ({}) => {
  return (
    <div>
      <Transition delay={5}>
        <p className="mt-10 mb-5">Selected Work</p>
      </Transition>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
        <Transition delay={5.2}>
          <Link href="/">
            <div className="project cursor-pointer transition-all hover:scale-[105%]">
              <Carousel
                showArrows={true}
                showStatus={false}
                showIndicators={false}
                infiniteLoop
                className="mb-[-30px]"
              >
                <Image
                  src={amgen}
                  className="image h-80 object-cover bg-[#0067C6]"
                  unoptimized
                  alt=""
                />
                <Image
                  src={amgen}
                  className="image h-80 object-cover bg-[#0067C6]"
                  unoptimized
                  alt=""
                />
              </Carousel>
              <div className="title text-lg font-medium text-zinc-900 dark:text-zinc-100">
                Hello
              </div>
              <div className="subtitle text-md text-zinc-500 dark:text-zinc-400">
                Hello
              </div>
            </div>
          </Link>
        </Transition>
        <Transition delay={5.4}>
          <Link href="/">
            <div className="project cursor-pointer transition-all hover:scale-[105%]">
              <Carousel
                showArrows={true}
                showStatus={false}
                showIndicators={false}
                infiniteLoop
                className="mb-[-30px]"
              >
                <Image
                  src={amgen}
                  className="image h-80 object-cover bg-[#0067C6]"
                  unoptimized
                  alt=""
                />
                <Image
                  src={amgen}
                  className="image h-80 object-cover bg-[#0067C6]"
                  unoptimized
                  alt=""
                />
              </Carousel>
              <div className="title text-lg font-medium text-zinc-900 dark:text-zinc-100">
                Hello
              </div>
              <div className="subtitle text-md text-zinc-500 dark:text-zinc-400">
                Hello
              </div>
            </div>
          </Link>
        </Transition>
      </div>
    </div>
  );
};

export default Work;
