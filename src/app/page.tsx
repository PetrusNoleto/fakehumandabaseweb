"use client"

import ShowFlag from "@/components/flag/showflag";
import HeaderComponent from "@/components/layoult/header/headerComponent";
import { flagProps, flags } from "@/data/staticData";
import { useEffect, useState } from "react";

const staticFlags = flags as flagProps[]

export default function Home() {
  const [staticFlagsList,setStaticFlagsList] = useState<flagProps[] | []>([])
  useEffect(()=>{
    setStaticFlagsList(staticFlags)
  },[])
return (
    <main className="flex gap-3">
      <HeaderComponent/>
      {staticFlagsList.length > 0 ?  
        <>
         {staticFlagsList.map((flag)=>{
             return(
              <div className="w-[240px] h-[170px] relative">
                <ShowFlag flagName={flag.flagName} flagSrc={flag.flagUrl} />
                <a href={flag.flagPageUrl}>ir para {flag.flagName} </a>
              </div>
             )
         })}
        </> 
      :
        <>teste</>
    }
    </main>
  );
}

