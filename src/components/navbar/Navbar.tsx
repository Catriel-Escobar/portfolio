import Button from "./navbarBtn/Button";
import { useLocation } from "react-router-dom";
import "./style.css"
import { useEffect, useState } from "react";


export default function Navbar() {
  const location = useLocation();

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };



  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);
  
  return (
    <header className= "z-40">
      <nav className={`w-[578px] h-[57px] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#100F0F] m-auto border border-[#1C1B1A] rounded-xl flex items-center justify-center gap-6 navbar ${visible ? 'navbar-visible' : 'navbar-hidden'}`} >
        <Button
          textoBtn="About me"
          seccionBtn={location.pathname === "/" ? true : false}
          path={"/"}
        />
        <Button
          textoBtn="Back end"
          seccionBtn={location.pathname === "/back" ? true : false}
          path={"/back"}
        />
        <Button
          textoBtn="Front end"
          seccionBtn={location.pathname === "/front" ? true : false}
          path={"/front"}
        />
      </nav>
    </header>
  );
}
