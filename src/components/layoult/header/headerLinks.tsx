import Link from "next/link"

const HeaderLinks = ()=>{
    return(
        <nav className="flex gap-3 justify-start items-center text-white duration-300">
            <Link href={"https://github.com/PetrusNoleto/fakehumandatabase"} className="hover:text-[#FF5C00] capitalize" target="_blank">github</Link>
        </nav>
    )
}
export default HeaderLinks