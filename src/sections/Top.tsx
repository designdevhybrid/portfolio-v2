import { FC } from "react";
import Transition from "../components/utils/Transition";

interface TopProps {}

const Top: FC<TopProps> = ({}) => {
  return (
    <Transition delay={0.2}>
      <h3 className="text-xl">Abhishek Kalia</h3>
    </Transition>
  );
};

export default Top;
