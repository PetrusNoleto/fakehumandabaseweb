import { childrenProps } from "@/types/default"
import React from "react"

const HeaderRoot:React.FC<childrenProps> = ({children})=>{
    return(
       <header className="fixed w-full h-[75px] flex justify-between items-center bg-[#141414]/50 p-3 z-10">
            {children}
       </header> 
    )
}
export default HeaderRoot