import { Cursor, useTypewriter } from "react-simple-typewriter";
import MySkills from "../components/skills/MySkills";

export default function AboutMe() {
  const [text] = useTypewriter({
    words: ["!Hello World!", "!Hola Mundo!"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 500,
  });
  return (
    <>
      <div className="w-[1100px] m-auto mt-32 flex flex-col justify-center items-center mb-20">
        <p className=" w-[190px] py-[2px] poppins-bold mb-4 text-center bg-[#FFEF22] font-bold text-xl rounded-[5px]">
          
          {text}
          <span>
            <Cursor cursorStyle="|" />
          </span>
        </p>

        <div className="w-[619px]">
          <h2 className="poppins-bold text-white text-[55px] mt-12 text-center leading-[51px]">
            Mi nombre es Catriel, un desarrollador{" "}
            <span className="text-[#FFEF22]">web.</span>
          </h2>
        </div>
        <img src="perfil.png" alt="perfil" className="w-[343px] h-[343px]" />
        <div className="w-[900px] m-auto">
          <p className="text-white text-[20px] text-center poppins-regular">
            Mi nombre es <span className="text-[#FFEF22]">Catriel Escobar</span>
            Actualmente terminando la Tecnicatura en Desarrollo de software. Me
            he especializado en la programación web durante más de dos años,
            trabajando con tecnologías como:
            <span className="text-[#FFEF22]">
              {
                " {Front: [React js / Next js], Back: [Express js / Nest js], DataBase:[MySQL,SQL Server,PostgreSQL y MongoDB]}."
              }
            </span>
            <br />
            <br />
            Busco mantenerme en constante aprendizaje y participar en proyectos
            que signifiquen un desafío.
          </p>
        </div>
      </div>
      <MySkills />
    </>
  );
}
