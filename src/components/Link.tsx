import { FC } from "react";

interface LinkProps {
  text: string;
  href: string;
}

const Link: FC<LinkProps> = ({ text, href }) => {
  return (
    <a
      className="border-white border-2 p-3 hover:bg-white hover:text-[#17191E] transition-all"
      href={href}
    >
      {text} ↗
    </a>
  );
};

export default Link;
