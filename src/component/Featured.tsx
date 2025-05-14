import { motion } from "framer-motion"
import Featured1 from "../assets/img/Featured1.png"
import Featured2 from "../assets/img/Featured2.png"
import { useState } from "react"


const Featured = () => {
    const [isHoverFyod, setIsHoverFyod] = useState(false);
    const [isHoverVise, setIsHoverVise] = useState(false);

    return (
        <div className="w-full py-20 min-h-screen bg-zinc-900">
            <div className="w-full px-20 pb-20 border-b-[1px] border-zinc-700" >
                <h1 className="text-7xl tracking-tight text-white">
                    Featured Projects
                </h1>
            </div>
            <div className="cards w-full px-20 mt-10 flex gap-10">
                <div onMouseEnter={() => setIsHoverFyod(true)} onMouseLeave={() => setIsHoverFyod(false)} className="cardContainer  relative w-1/2  h-[70vh] bg-zinc-400 rounded-2xl" >
                    <h1 className="absolute  flex overflow-hidden tracking-tighter left-full text-6xl text-[#CDEA68] -translate-x-1/2 -translate-y-1/2 top-1/2">
                    
                    {"FYODE".split("").map((item, index) => (
                        <motion.span initial={{y:"-100%"}} animate={isHoverFyod ? {y:"0%"} : {y:"100%"}} transition={{delay:0.03*index,ease:[0.22, 1, 0.36, 1]}} key={index} className="text-[#CDEA68] inline-block">{item}</motion.span>
                    ))}
                    </h1>
                    <div className="card overflow-hidden rounded-2xl  w-full h-full bg-cover bg-center rounded-xl">
                        <img className="w-full h-full" src={Featured1} alt="" />
                    </div>
                </div>
                <div onMouseEnter={() => setIsHoverVise(true)} onMouseLeave={() => setIsHoverVise(false)} className="cardContainer relative w-1/2 rounded-xl h-[70vh] bg-zinc-400 rounded-2xl" >
                <h1 className="absolute flex overflow-hidden tracking-tighter right-full text-6xl text-[#CDEA68] translate-x-1/2 -translate-y-1/2 top-1/2">
                {"VISE".split("").map((item, index) => (
                    <motion.span initial={{y:"-100%"}} animate={ isHoverVise ? {y:"0%"} : {y:"100%"}} transition={{delay:0.03*index,ease:[0.22, 1, 0.36, 1]}} key={index} className="text-[#CDEA68] inline-block">{item}</motion.span>   
                ))}
                </h1>
                    <div className="card  overflow-hidden rounded-2xl w-full h-full bg-cover bg-center rounded-xl">
                        <img className="w-full h-full" src={Featured2} alt="" />
                    </div>
                </div>

            </div>
            

        </div>
    )
}
export default Featured;