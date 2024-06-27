"use client"

import { flags } from "@/data/staticData"
import { useEffect, useState } from "react"


export default function HumanCountryPage(){
    const getCountry = location.pathname
    const splitCountry = getCountry.split('/')    
    const [countryName,setCountryName] = useState("")
    const [countryAbreviation,setCountryAbreviation]= useState("")
    const getFlagDataByFlagName = flags.find((flaglist) => flaglist.flagName === countryName)
  

    useEffect(()=>{
        if (getFlagDataByFlagName !== undefined){
            setCountryAbreviation(getFlagDataByFlagName.flagAbreviation)
        }
        setCountryName(splitCountry[2])
    })
    
    
    console.log(getFlagDataByFlagName)
    return(
        <>
            {countryAbreviation} <br/>
             {countryName}
        </>
    )
}