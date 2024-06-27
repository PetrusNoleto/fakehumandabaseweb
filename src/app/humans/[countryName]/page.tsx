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
    const getCountry = location.pathname
    const splitCountry = getCountry.split('/')    
    const [countryName,setCountryName] = useState("")
    const [countryAbreviation,setCountryAbreviation]= useState("")
    const [countryImage,setCountryImage] = useState("")
    const [humansList,setHumansList] = useState<human[] | []>([])
    const getFlagDataByFlagName = flags.find((flaglist) => flaglist.flagName === countryName)
    const humansPopulation = 600
    
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
    
    
    console.log(humansList)
    return(
        <div>
          <HeaderComponent/>
          <section className="w-full h-[460px] bg-black p-6 flex flex-col justify-center items-center gap-3 pt-[75px]">
                <div className="relative w-[420px] h-[220px] ">
                    <Image src ={countryImage} alt={`flag of ${countryName}`} fill={true} className="p-3 "/>
                </div>
                <h1 className="text-white font-bold uppercase text-3xl">{countryName}</h1>
                


          </section>  
          {humansList.length > 0 ?
            <ul className="flex justify-around flex-wrap gap-3 p-3">
                <>
                    {humansList.map((human)=>{
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

            :
            <>sem humanos</>
            }
         



        </div>
    )
}