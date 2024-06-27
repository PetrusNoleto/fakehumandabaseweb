import { Header } from "./header"


const HeaderComponent = ()=>{
    return(
        <Header.root>
            <Header.brand siteName={`fakehumandatabase`} />
            <div className="flex">
                <Header.links/>
            </div>
        </Header.root>
    )
}
export default HeaderComponent