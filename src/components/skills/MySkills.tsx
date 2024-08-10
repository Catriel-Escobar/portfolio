import { Suspense, lazy, useRef } from "react";
import { DB, Herramientas, backEnd, frontEnd } from "../../data/skillsData";

import CardSkillsEsqueleto from "./common-skills/CardSkillsEsqueleto";
import useOnScreen from "../../hooks/useOnScreen";
import { delayForDemo } from "../../logic/TimeoutLazy";

const CardSkills = lazy(() =>
  delayForDemo(import("./common-skills/CardSkills"))
);

export default function MySkills() {
  const ref = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(ref);

  return (
    <>
      <div ref={ref} className="w-[1100px] m-auto flex flex-col justify-center items-center">
        <h2 className="text-[40px]  poppins-bold text-white text-center mb-20">
          Mis Skills<span className="text-[#FFEF22] ">.</span>
        </h2>

        <div className="grid grid-cols-2 gap-x-16 gap-y-16 mb-28">
          {isOnScreen && (
            <Suspense fallback={<CardSkillsEsqueleto />}>
              <CardSkills
                CardData={backEnd}
                typescript={true}
                title={"Back end"}
                icono="Code"
              />
            </Suspense>
          )}
          {isOnScreen && (
            <Suspense fallback={<CardSkillsEsqueleto />}>
              <CardSkills
                CardData={frontEnd}
                typescript={true}
                title="Front end"
                icono="On"
              />
            </Suspense>
          )}
          {isOnScreen && (
            <Suspense fallback={<CardSkillsEsqueleto />}>
              <CardSkills
                CardData={DB}
                typescript={false}
                title="Base de datos"
                icono="Database"
              />
            </Suspense>
          )}
          {isOnScreen && (
            <Suspense fallback={<CardSkillsEsqueleto />}>
              <CardSkills
                CardData={Herramientas}
                typescript={false}
                title="Herramientas"
                icono="Docker"
              />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
}
