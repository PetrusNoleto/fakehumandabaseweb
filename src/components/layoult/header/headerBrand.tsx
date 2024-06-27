import { siteInterface } from "@/types/default"
import Link from "next/link"
import React from "react"

const HeaderBrand:React.FC<siteInterface> = ({siteName})=>{
    return(
        <Link href={"/"}>
            <h1 className="w-[130px] break-words text-center text-white text-xl font-bold uppercase">{siteName}</h1>
        </Link>
    )
}
export default HeaderBrand