import { Technology } from "../../../types/types";

type CardSkillsProps = {
  CardData: Technology[];
  typescript: boolean;
  title: string;
  icono: string;
};
export default function CardSkills({
  CardData,
  typescript,
  title,
  icono,
}: CardSkillsProps) {
  return (
    <div className="w-[506px] h-[254px] bg-gradient-to-bl from-[#100F0F] to-[#1D1C1C] border transition-all  border-[#1C1B1A] rounded-md poppins-bold flex flex-col">
      <div className="flex justify-between mx-[60px] mt-[30px]">
        <div className="flex gap-[6px]">
          <img src={`${icono}.svg`} alt="Code backend" />
          <h2 className="text-white text-xl ">{title}</h2>
        </div>
        {typescript && (
          <div className="flex items-center justify-center text-xs font-black bg-[#FFEF22] w-[93px] py-1 rounded-md  text-center">
            Typescript
          </div>
        )}
      </div>
      <div className="mt-[16px]  mx-[60px] flex flex-col  justify-center h-full">
        {CardData.map((item, index) => (
          <div className=" mb-[16px] " key={index}>
            {Object.keys(item).map((key) => (
              <>
                <h3
                  key={key}
                  className="text-[10px] text-white poppins-regular mb-[7px]">
                  {key}
                </h3>
                <div className="flex gap-[7px] flex-wrap ">
                  {item[key].map((value, index) => (
                    <div
                      key={index}
                      className="text-xs text-white border  px-3 rounded-md py-[2px]  ">
                      {value}
                    </div>
                  ))}
                </div>
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
