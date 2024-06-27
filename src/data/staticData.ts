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
    flagName:"brazil",
    flagUrl:"/flags/Brazil.webp",
    flagPageUrl:"/humans/brazil/"
   },
   {
    flagId:2,
    flagAbreviation:"us",
    flagName:"usa",
    flagUrl:"/flags/us.svg",
    flagPageUrl:"/humans/usa/"
   },
   {
    flagId:3,
    flagAbreviation:"de",
    flagName:"germany",
    flagUrl:"/flags/Germany.svg",
    flagPageUrl:"/humans/germany/"
   },
   {
    flagId:3,
    flagAbreviation:"es",
    flagName:"spain",
    flagUrl:"/flags/Spain.svg",
    flagPageUrl:"/humans/spain/"
   },
   {
    flagId:3,
    flagAbreviation:"de",
    flagName:"france",
    flagUrl:"/flags/France.svg",
    flagPageUrl:"/humans/france/"
   },
   {
    flagId:3,
    flagAbreviation:"gb",
    flagName:"united-kingdom",
    flagUrl:"/flags/United_Kingdom.svg",
    flagPageUrl:"/humans/united-kingdom/"
   }
]


// {flagId:7,flagAbreviation:"es",flagName:"Spain",flagAdreess:"/flags/Spain.svg",flagHref:"/nations/nation/es/"},
// {flagId:8,flagAbreviation:"fr",flagName:"France",flagAdreess:"/flags/France.svg",flagHref:"/nations/nation/fr/"},
// {flagId:9,flagAbreviation:"gb",flagName:"United Kingdom",flagAdreess:"/flags/United_Kingdom.svg",flagHref:"/nations/nation/gb/"},  

