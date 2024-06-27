import React from "react"
import { Header } from "./header"
import { headerProps } from "./headerRoot"



const HeaderComponent:React.FC<headerProps> = ({position})=>{
    return(
        <Header.root position={position}>
            <Header.brand siteName={`fakehumandatabase`} />
            <div className="flex">
                <Header.links/>
            </div>
        </Header.root>
    )
}
export default HeaderComponent