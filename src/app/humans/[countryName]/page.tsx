"use client"

import HeaderComponent from "@/components/layoult/header/headerComponent"
import { flags } from "@/data/staticData"
import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"


interface human {
    id:{value:string};
    email:string;
    phone:string;
    name:{first:string,last:string}
    picture:{thumbnail:string,medium:string,large:string}
}


export default function HumanCountryPage(){
    const [currentPage, setCurrentPage] = useState(1);
    const [countryName,setCountryName] = useState("")
    const [countryAbreviation,setCountryAbreviation]= useState("")
    const [countryImage,setCountryImage] = useState("")
    const [humansList,setHumansList] = useState<human[] | []>([])
    const getCountry = location.pathname
    const splitCountry = getCountry.split('/')
    const getFlagDataByFlagName = flags.find((flaglist) => flaglist.flagName === countryName)
    const humansPopulation = 600
    const itemsPageLimit = 60
    const totalPages = Math.ceil(humansList.length / itemsPageLimit);
    const startIndex = (currentPage - 1) * itemsPageLimit;
    const endIndex = startIndex + itemsPageLimit;
    const currentItems = humansList.slice(startIndex, endIndex);  
    
    const goToNextPage = () => {
        setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
        location.replace("#productStartList")
      };
    
      const goToPreviousPage = () => {
        setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
        location.replace("#productStartList")
      };

    const getHumans = async() =>{
        const humans = await axios.get(`https://randomuser.me/api/?nat=${countryAbreviation}&results=${humansPopulation}`)
        const humansData = await humans.data
        const results = humansData.results
        setHumansList(results)
        localStorage.setItem(`fakehumans${countryName}`,JSON.stringify(results))
        return results
    }

    useEffect(()=>{
        if (getFlagDataByFlagName !== undefined){
            setCountryAbreviation(getFlagDataByFlagName.flagAbreviation)
            setCountryImage(getFlagDataByFlagName.flagUrl)
            const savedHumansList = localStorage.getItem(`fakehumans${countryName}`) as string | null
            if(savedHumansList !== undefined &&  savedHumansList !== null){
                setHumansList(JSON.parse(savedHumansList))
            }else{
                getHumans()
            }  
        }
        setCountryName(splitCountry[2])
    },[countryName])
    return(
        <div className="relative"> 
          <HeaderComponent/>
          <section className="w-full h-[460px] bg-black p-6 flex flex-col justify-center items-center gap-3 pt-[75px]">
                <div className="relative w-[420px] h-[220px] ">
                    <Image src ={countryImage} alt={`flag of ${countryName}`} fill={true} className="p-3 "/>
                </div>
                <h1 className="text-white font-bold uppercase text-3xl">{countryName}</h1>

          </section>  
          {humansList.length > 0 ?
            <>
            <ul className="flex justify-around flex-wrap gap-3 p-3" id="productStartList">
                <>
                    {currentItems.map((human)=>{
                        return(
                            <>
                                <li key={human.id.value} className="w-[280px] h-auto bg-fakeDark shadow-lg rounded-md p-12 flex flex-col gap-3 items-center relative">
                                    <div className="w-12 h-8 absolute right-4 top-4">
                                        <div className="w-full h-full">
                                            <Image src={countryImage} alt="" fill={true}/>
                                        </div>
                                        
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Image src={human.picture.large} alt="" width={128} height={128} className="rounded-full border-4 border-fakeOrange"/>
                                        <h3 className="text-white text-center"><span>{human.name.first}</span> <span>{human.name.last}</span></h3>
                                        <button className="bg-fakeOrange p-3 text-sm font-bold text-white hover:bg-black duration-300 rounded-lg">ver dados</button>
                                    </div>
                                </li>
                            </>
                        )
                        
                    })}
                </>
            </ul>
            
            
            <ul className="flex gap-3 justify-end p-3">
            {totalPages === 1 ?
                <></>
                :
                <li>
                    <div className="flex gap-3 justify-end">
                        <button
                        className="bg-[#141414] h-[50px] flex justify-center items-center text-white shadow-lg p-6 rounded-lg"
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1}
                        >
                        Anterior
                        </button>

                        <span className="bg-[#141414] h-[50px] flex justify-center items-center text-white shadow-lg p-6 rounded-lg">Página {currentPage} de {totalPages}</span>

                        <button
                        className="bg-[#141414] h-[50px] flex justify-center items-center text-white shadow-lg p-6 rounded-lg"
                        onClick={goToNextPage}
                        
                        disabled={currentPage === totalPages}
                        >
                        Próximo
                        </button>
                    </div>
                </li>
          }
        </ul>
            </>
            :
            <div className="absolute w-screen h-screen left-0 top-0 flex justify-center flex-col gap-3 items-center bg-black/75 -z-10  text-white pt-52">
                <div className="relative w-12 h-12 border-4 rounded-full border-orange-500 animate-spin ">
                    <div className="absolute top-0 left-0 w-10 h-10 border-4 rounded-full border-orange-600 animate-pulse">
                        <div className=" top-0 left-0 w-8 h-8 border-4 rounded-full border-white animate-ping">
                    </div>  
                   </div>
                </div>
                carregando humanos
            </div>
        }
        </div>
    )
}