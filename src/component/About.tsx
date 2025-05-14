import { GoDotFill } from "react-icons/go";
import nature  from "../assets/img/nature.jpg"

const About = () => {
    return (
        <div className=" w-full bg-[#CEEA67] rounded-tl-2xl rounded-tr-2xl p-20" >

                <h1 className="text-[3.5vw] font-['Neue Montreal'] text-black leading-[3.7vw] tracking-tight">Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
            <div className="border-t-[1px] border-[#a1b562] mt-20 py-5 flex gap-5">
                <div className="w-1/2 flexß">

                    <h1 className="text-6xl font-light tracking-tight mb-8">Our approach :</h1>
                    <button className="rounded-full px-6 py-4 bg-zinc-900 text-white text-1xl font-thin flex items-center gap-7 uppercase" >Read More <span className="flex items-center justify-center"><GoDotFill /></span></button>
                </div>
                <div className="w-1/2 bg-zinc-400 h-[60vh] rounded-3xl ">
                <img src={nature} alt="" className="w-full h-full object-cover rounded-3xl" />
                 </div>
            </div>
        </div>
    )
}
export default About;