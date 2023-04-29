import { FC } from "react";
import Link from "./Link";

const Footer: FC = ({}) => {
  return (
    <nav className="flex flex-col sm:flex-row justify-around font-lores w-full p-10 absolute bottom-0">
      <Link text="Work" href="/work" />
      <Link text="Resume" href="/work" />
      <Link text="LinkedIn" href="/work" />
    </nav>
  );
};

export default Footer;
