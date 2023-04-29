import { motion } from "framer-motion";
import { FC } from "react";

interface TransitionProps {
  children: JSX.Element;
  delay?: number;
}

const Transition: FC<TransitionProps> = ({ children, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: delay || 1,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Transition;
