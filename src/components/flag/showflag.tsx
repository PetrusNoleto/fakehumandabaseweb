import Image from "next/image"
import React from "react"

interface showFlagDataProps {
    flagSrc:string    
    flagName:string
}

const ShowFlag:React.FC<showFlagDataProps> = ({flagName,flagSrc})=>{
    return(
        <div className="relative w-full h-full">
            <Image src = {flagSrc} alt={flagName} fill={true}/>
        </div>
    )
}
export default ShowFlag