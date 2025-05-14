import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";
import Nature from "../../assets/img/nature.jpg"
const LandingPage = () =>{

    return (
        <div data-scroll data-scroll-speed="-.3" data-scroll-section className=" w-full h-screen bg-zinc-900 text-white pt-1">
            <div className="textstructure mt-52 px-20">

                {["We create", "Eye-opening", "Presentations"].map((item, index) => (
                    
                    <div key={index} className=" = w-fit masker flex items-center overflow-hidden">
                        {
                            index === 1 && ( 
                            <motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{duration:1,ease:[0.76, 0, 0.24, 1]}} className="masker w-[8vw] h-[5.7vw] -relative-[1.2vw] rounded bg-pink-600 mr-5 overflow-hidden ">
                                <img className="w-full h-full object-cover" src={Nature} alt="" />
                            </motion.div>)
                        }
                        <h1 className="uppercase text-[7.5vw] font-semibold leading-[6.8vw] tracking-tighter">{item}</h1>
                    </div>
                ))}
                
            </div>
            <div className="border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20">
                {["For public and private Companies","From the first pitch to IPO"].map((item, index) => (
                    <p className="font-light text-md leading-none tracking-tight" key={index}>{item}</p>
                ))}
                <div className="flex gap-5 items-center start ">

                <div className="rounded-full border-[2px] border-zinc-500 px-5 py-2 text-light text-md uppercase">start the project</div>
                <div className="w-10 h-10 rounded-full border-[1px] border-zinc-400 flex items-center justify-center"> 
                    <span className="flex justify-center items-center rotate-[45deg]">

                    <FaArrowUpLong className="font-lighter"/>
                    </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LandingPage;