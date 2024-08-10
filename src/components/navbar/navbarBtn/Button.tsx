import { Link } from "react-router-dom";

type ButtonNavbarProps = {
  textoBtn: string;
  seccionBtn: boolean;
  path: string;
};

export default function Button({
  textoBtn,
  seccionBtn,
  path,
}: ButtonNavbarProps) {
  return (
    <Link
      to={path}
      className={` py-1 px-4 text-[#404040] text-xs border border-[#1C1B1A] rounded-[5px] poppins-bold  transition-colors ${
        seccionBtn
          ? "text-black hover:text-black bg-[#FFEF22] hover:border-[#1C1B1A]"
          : "hover:text-white hover:border-white"
      }`}>
      {textoBtn}
    </Link>
  );
}
