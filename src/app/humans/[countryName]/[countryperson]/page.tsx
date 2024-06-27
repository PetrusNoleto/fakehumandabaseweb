"use client"

import { useEffect, useState } from "react"
import { human } from "../page"
import HeaderComponent from "@/components/layoult/header/headerComponent"
import Image from "next/image"

export default function HumanPage(){
    const getCountry = location.pathname
    const splitCountry = getCountry.split('/')
    const [humanData,setHumanData] = useState<human>({
        id:{name:"string",value:"string"},
        email:"string",
        phone:"string",
        cell:"string",
        nat:"string",
        dob:{age:0,date:"string"},
        gender:"string",
        name:{first:"string",last:"string"},
        picture:{thumbnail:"/",medium:"/",large:"/"},
        location:{city:"string",country:"string",postcode:0,state:"string",street:{name:"string",number:0}},
        coordinates:{latitude:"string",longitude:"string"},
        login:{username:"string",password:"string"},
    })
    const  requestEmail = splitCountry[3]
    const requestCountry = splitCountry[2]
    
    const getHumanData = () => {
        const getUserData =  localStorage.getItem(`fakehumans${requestCountry}`) as string | null
        if(getUserData !== undefined &&  getUserData !== null){
            const getUniqueHumanData = JSON.parse(getUserData) as human[]
            const findHuman = getUniqueHumanData.find((human)=>human.email === requestEmail)
            console.log(findHuman)
            setHumanData(findHuman as human)
          }
          

         
    }
    

    console.log(humanData.picture.large)
    useEffect(()=>{
        getHumanData()
        console.log(humanData)

    },[])
    return(
        <div>
            <HeaderComponent position="static"/>
            <section className="w-screen  h-screen flex justify-center items-center">
               <article className="w-[420px] h-auto p-6 bg-fakeDark rounded-lg shadow-2xl flex flex-col gap-6 items-center">
                
                <div>
                    <Image src = {humanData.picture.large} alt={`imagem de ${humanData.name.first + humanData.name.last}`} width={240} height={240} className="rounded-full border-4 border-orange-600" quality={100}/>
                </div>
                
                <ul className="w-full flex justify-center  flex-col gap-3" id="info">
                    <li className="w-full flex items-center justify-between gap-3">
                        <h3 className="capitalize text-white font-bold text-sm ">indentificador</h3> <span className="text-[#c9c9c9] font-medium text-xs ">{humanData.id.value}</span>
                    </li>
                    <li className="w-full flex items-center justify-between gap-3">
                        <h3 className="capitalize text-white font-bold text-sm ">nome</h3> <span className="text-[#c9c9c9] font-medium text-xs ">{humanData.name.first} {humanData.name.last}</span>
                    </li>
                    <li className="w-full flex items-center justify-between gap-3">
                        <h3 className="capitalize text-white font-bold text-sm ">idade</h3> <span className="text-[#c9c9c9] font-medium text-xs ">{humanData.dob.age}</span>
                    </li>
                    <li className="w-full flex items-center justify-between gap-3">
                        <h3 className="capitalize text-white font-bold text-sm ">genero</h3> <span className="text-[#c9c9c9] font-medium text-xs ">{humanData.gender}</span>
                    </li>
                    <li className="w-full flex items-center justify-between gap-3">
                        <h3 className="capitalize text-white font-bold text-sm ">email</h3> <span className="text-[#c9c9c9] font-medium text-xs ">{humanData.email}</span>
                    </li>
                    <li className="w-full flex items-center justify-between gap-3">
                        <h3 className="capitalize text-white font-bold text-sm ">celular</h3> <span className="text-[#c9c9c9] font-medium text-xs ">{humanData.cell}</span>
                    </li>
                    <li className="w-full flex items-center justify-between gap-3">
                        <h3 className="capitalize text-white font-bold text-sm ">telefone</h3> <span className="text-[#c9c9c9] font-medium text-xs ">{humanData.phone}</span>
                    </li>
                    <li className="w-full flex items-center justify-between gap-3">
                        <h3 className="capitalize text-white font-bold text-sm ">cidade</h3> <span className="text-[#c9c9c9] font-medium text-xs ">{humanData.location.city}</span>
                    </li>
                    <li className="w-full flex items-center justify-between gap-3">
                        <h3 className="capitalize text-white font-bold text-sm ">estado</h3> <span className="text-[#c9c9c9] font-medium text-xs ">{humanData.location.state}</span>
                    </li>
                    <li className="w-full flex items-center justify-between gap-3">
                        <h3 className="capitalize text-white font-bold text-sm ">rua</h3> <span className="text-[#c9c9c9] font-medium text-xs ">{humanData.location.street.name} {humanData.location.street.number}</span>
                    </li>
                    
                    <li className="w-full flex items-center justify-between gap-3">
                        <h3 className="capitalize text-white font-bold text-sm ">usuario</h3> <span className="text-[#c9c9c9] font-medium text-xs ">{humanData.login.username}</span>
                    </li>
                    <li className="w-full flex items-center justify-between gap-3">
                        <h3 className="capitalize text-white font-bold text-sm ">senha</h3> <span className="text-[#c9c9c9] font-medium text-xs ">{humanData.login.password}</span>
                    </li>


                    
                </ul>

               </article>

            </section>
        </div>
    )
}
