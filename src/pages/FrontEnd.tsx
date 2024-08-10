import { lazy, Suspense, useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";
import { Proyectos } from "../data/backendData";
import { delayForDemo } from "../logic/TimeoutLazy";
import CardBackendEsqueleto from "../components/backend/CardStackEsqueleto";

const CardBackend = lazy(() =>
  delayForDemo(import("../components/backend/CardStack"))
);

export default function FrontEnd() {
  const ref = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(ref);
  return <div className="text-white min-h-screen  m-auto mt-24 flex flex-col gap-20 justify-center items-center before:conten  -z-10" ref={ref}>
      <div className=" w-full">
        <h2 className="text-white font-bold relative text-7xl after:content-[''] after:absolute after:left-0 after:bottom-[-15px]  after:bg-[#ffef22] after:w-[37%] after:h-[2px]">Front end <span className="text-[#ffef22]">.</span></h2>
      </div>
      {Proyectos.map((proyecto,index) => (
        isOnScreen && (
          <Suspense fallback = {<CardBackendEsqueleto/>}>
            <CardBackend data={proyecto.data} imagen={proyecto.imagen} title={proyecto.title} link={proyecto.link} key={index}/>
          </Suspense>
        )
      ))}
    
  </div>;
}
