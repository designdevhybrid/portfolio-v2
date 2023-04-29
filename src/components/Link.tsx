import { FC } from "react";

interface LinkProps {
  text: string;
  href: string;
}

const Link: FC<LinkProps> = ({ text, href }) => {
  return (
    <a className=" pr-3 py-3" href={href}>
      {text} ↗
    </a>
  );
};

export default Link;
