"use client"
import React, { useState } from "react"
import { Header } from "./header"
import { headerProps } from "./headerRoot"
import NationsHeaderComponent from "@/components/nations/headerNationsComponent"



const HeaderComponent:React.FC<headerProps> = ({position})=>{
    const [nationsMenu,setNationsMenu] = useState(false)
    
    
    return(
        <Header.root position={position}>
            <Header.brand siteName={`fakehumandatabase`} />
            <div className="flex gap-3">
                <Header.links/>
                <button className="text-normal text-white capitalize p-2 border  border-orange-600 rounded-lg bg-fakeDark duration-500" onClick={()=>{
                    setNationsMenu(true)
                }}>
                    paises
                </button>
                {nationsMenu?
                    <div className="absolute right-3 top-3 flex flex-col bg-fakeDark rounded-md">
                     <NationsHeaderComponent/>
                        <div className="flex  justify-center items-center p-3">
                        <button onClick={()=>{
                            setNationsMenu(false)
                        }} className="text-white font-semibold capitalize">fechar</button>
                        </div>
                    </div>
                   
                :    
                    <></>
                }
            </div>
        </Header.root>
    )
}
export default HeaderComponent