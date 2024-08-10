import React from "react";
import { InfoType } from "../../data/backendData";




export default function CardBackend({title,data,imagen,link}:InfoType) {

    const handleClick= (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        window.open(link, '_blank', 'noopener,noreferrer');
      };
  return (
    <>
     <div className="w-[1100px] h-[665px] grid grid-cols-2 justify-center items-center bg-gradient-to-bl from-[#100F0F] to-[#1D1C1C] rounded-xl border border-[#1C1B1A]">
    <div>
        <div className="mx-20 flex flex-col justify-center gap-8 h-full text-left ">
          <h2 className="font-bold  text-3xl ">{title} <span className="text-[#ffef22]">.</span></h2>
        <p className=" text-[#5C5C5C] text-sm">{data}</p>

        <button className=" p-2 text-[black] bg-[#ffef22] max-w-[200px] text-sm  border border-[#1C1B1A] rounded-[5px]" onClick={handleClick}>Ve el proyecto aquí</button>
        </div>
      </div>
      <div className="flex  justify-start items-center">
        <div>
          <div className="bg-[#171717] w-[468px] h-[565px] rounded-xl shadow-[#5a5a513d] shadow-md flex justify-center items-center ">

        <img src={imagen} alt={imagen} className="w-[380px] h- rounded-xl " />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
