import { FooterBtn } from "./footerBtn/FooterBtn";


export default function Footer() {
  return (<footer className={"w-[1100px] h-[216px] static bottom-0   m-auto bg-gradient-to-bl from-[#100F0F] to-[#1D1C1C] rounded-tl-2xl rounded-tr-2xl border border-[#1C1B1A]"}>
  <div className="flex justify-center items-center h-full gap-5">
    <FooterBtn content="Catriel-Escobar" image="linkedin.svg" url="https://www.linkedin.com/in/catrielescobar/" />
    <FooterBtn content="Catriel-Escobar" image="github.svg" url="https://github.com/Catriel-Escobar" />
    <FooterBtn content="catriellescobar@gmail.com" image="mail.svg" url="https://mail.google.com/mail/?view=cm&fs=1&to=catriellescobar@gmail.com" />
    <FooterBtn content="Descargá aquí mi CV" image="descarga.svg" check={false} url="https://drive.google.com/file/d/1ppmJPKoYecnAykATDGkzYErcjETydmTp/view"/>
  </div>
</footer>)
  
}

