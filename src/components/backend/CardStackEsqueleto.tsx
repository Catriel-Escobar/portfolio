

export default function CardBackendEsqueleto() {
  return (
    <>
     <div className="w-[1100px] h-[665px] grid grid-cols-2 justify-center items-center bg-gradient-to-bl from-[#100F0F] to-[#1D1C1C] rounded-xl border border-[#1C1B1A] animate-pulse skeleton ">
    <div>
        <div className="mx-20 flex flex-col justify-center gap-8 h-full text-left ">
          <h2 className="bg-[#5C5C5C] w-[180px] h-[25px] rounded-lg "> </h2>
        <p className=" bg-[#5C5C5C] text-sm w-[380px] h-[20px] rounded-lg"></p>
        <p className=" bg-[#5C5C5C] text-sm w-[380px] h-[20px] rounded-lg"></p>
        <p className=" bg-[#5C5C5C] text-sm w-[380px] h-[20px] rounded-lg"></p>
        <p className=" bg-[#5C5C5C] text-sm w-[380px] h-[20px] rounded-lg"></p>
        <p className=" bg-[#5C5C5C] text-sm w-[380px] h-[20px] rounded-lg"></p>
        <p className=" bg-[#5C5C5C] text-sm w-[380px] h-[20px] rounded-lg"></p>


        <div className=" p-2 text-[black] bg-[#ffef22] max-w-[200px] min-w-[200px] h-[38px] text-sm  border border-[#1C1B1A] rounded-[5px]" ></div>
        </div>
      </div>
      <div className="flex  justify-start items-center">
        <div>
          <div className="bg-[#171717] w-[468px] h-[565px] rounded-xl shadow-[#5a5a513d] shadow-md flex justify-center items-center ">

        <div className="w-[380px] h- rounded-xl " ></div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
