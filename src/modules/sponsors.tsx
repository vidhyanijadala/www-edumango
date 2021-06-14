import { Navbar } from "../components/Navbar";
import SponsorCard from "../components/SponsorCard";


export default function Sponsors() {

    const sponsors = [
        {
            logo: "https://cdn.discordapp.com/attachments/832365353660317726/851153743231057960/unknown.png",
            name: "Coconut Hill",
            link: "https://coconuthill.com/"
        },
        {
            logo: "https://cdn.discordapp.com/attachments/718153638408880209/853710620255191051/Screen_Shot_2021-06-13_at_11.58.43_AM.png",
            name: "Lovely Sweets & Snacks",
            link: "http://lovelysweets.synthasite.com/"
        },
        {
            logo: "https://www.superindiaonline.com/images/logo/super-india-logo-v1.svg",
            name: "Super India",
            link: "https://www.superindiaonline.com/"
        },
        {
            logo: "https://nilgiriscashandcarry.com/assets/images/logo/logo-light.png",
            name: "Nilgiris Cash And Carry",
            link: "https://nilgiriscashandcarry.com/"
        }
    ]
  return (
    <>
      <div className="md:px-12 px-4">
        <Navbar />
      </div>

      <div className="space-y-6 md:px-12 px-4 md:mb-12 mb-4">
        <h1 className="text-center text-accent-primary text-6xl">Our Sponsors</h1>
        
        <div className="grid md:grid-cols-2  lg:grid-cols-3 sm:grid-cols-2 gap-4">
        {sponsors.map((sponsor, i)=>{
            return <SponsorCard logo={sponsor.logo} key={i} name={sponsor.name} link={sponsor.link}/>
        })}
        
        </div>
        
          
        </div>
    </>
  )
}
