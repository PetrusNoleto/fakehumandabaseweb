export interface flagProps {
    flagId:number,
    flagAbreviation:string,
    flagName:string,
    flagUrl:string,
    flagPageUrl:string,
}

export const flags:flagProps[] = [
   {
    flagId:1,
    flagAbreviation:"br",
    flagName:"Brazil",
    flagUrl:"/flags/Brazil.webp",
    flagPageUrl:"/humans/brazil/"
   },
   {
    flagId:2,
    flagAbreviation:"us",
    flagName:"United States",
    flagUrl:"/flags/us.svg",
    flagPageUrl:"/humans/unitedstates/"
   }
]