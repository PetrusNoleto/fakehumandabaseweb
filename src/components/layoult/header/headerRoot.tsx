import { childrenProps } from "@/types/default"
import React from "react"

export interface headerProps{
    position?:string
}

const HeaderRoot:React.FC<childrenProps & headerProps> = ({children,position})=>{
    return(
       <header className={`fixed ${position} w-full h-[75px] flex justify-between items-center bg-[#141414]/50 p-3 z-10`}>
            {children}
       </header> 
    )
}
export default HeaderRoot