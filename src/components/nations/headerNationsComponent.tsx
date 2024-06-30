"use client"
import { flags } from "@/data/staticData";
import Image from "next/image";
import Link from "next/link";

const NationsHeaderComponent = () => {
  const nations = flags;  
  return (
    <div className="bg-fakeDark w-[340px] flex flex-col">
      <ul className=" h-auto p-3 gap-2 flex justify-between flex-wrap">
        {nations.length > 0 ? (
          <>
            {nations.map((nation) => {
              return (
                <li key={nation.flagId} className="flex gap-3">
                  <Link href={nation.flagPageUrl} className="group rounded-lg border border-transparent w-[140px] h-[50px] flex items-center px-2 gap-3 hover:border-fakeOrange duration-300">
                    <div className="relative w-8 h-8 flex justify-center items-center">
                        <Image src={nation.flagUrl} alt="" fill={true} className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold text-[#c9c9c9] uppercase">{nation.flagName}</span>
                  </Link>
                </li>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </ul>
     
    </div>

  );
};
export default NationsHeaderComponent;
