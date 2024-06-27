"use client"

import ShowFlag from "@/components/flag/showflag";
import HeaderComponent from "@/components/layoult/header/headerComponent";
import { flagProps, flags } from "@/data/staticData";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const staticFlags = flags as flagProps[]

export default function Home() {
  const [staticFlagsList,setStaticFlagsList] = useState<flagProps[] | []>([])
  useEffect(()=>{
    setStaticFlagsList(staticFlags)
  },[])
return (
    <main className="">
      <HeaderComponent/>
      <section className="relative w-full flex justify-center items-center ">
        <div className="relative w-full h-screen select-none ">
          <Image src={"/image/homepagebackground.jpeg"} alt="" fill={true} className="select-none"/>
        </div>
        <div className="absolute flex flex-col gap-3">
            <h1 className="uppercase text-6xl font-bold text-center text-white drop-shadow-2xl ">fakehuman<br/>database</h1>
            <p className="text-lg text-center text-white font-semibold">pesquise nomes falsos para testar seus projetos!</p>
            <Link href={"#nationsList"} className="p-3 bg-orange-600 rounded-lg self-center w-[120px] h-[50px] text-center capitalize font-semibold text-white">paises</Link>
        </div>
      </section>
      <section className="fw-full lex flex-col items-center ">
        <h2 className="text-center p-6 text-4xl uppercase font-bold text-gray-400">paises</h2>
        <ul id="nationsList" className="w-full flex justify-around flex-wrap gap-20 ">
           {staticFlagsList.length > 0 ?  
              <>
              {staticFlagsList.map((flag)=>{
                  return(
                    <li key={flag.flagId} className="w-[420px] h-[220px] relative ">
                      <Link href={flag.flagPageUrl} className="relative">
                        <ShowFlag flagName={flag.flagName} flagSrc={flag.flagUrl}/>
                        <h3 className="text-2xl font-bold uppercase text-white text-center p-3">{flag.flagName}</h3>         
                      </Link>
                    </li>
                  )
              })}
              </> 
            :
              <>teste</>
          }
        </ul>
        
      </section>
    </main>
  );
}

