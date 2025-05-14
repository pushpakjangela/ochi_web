
import {motion } from "framer-motion";

const Marquee = ()=>{
    return (
        <div data-scroll data-scroll-speed=".1" data-scroll-section className="py-12 bg-[#004d43] w-full rounded-tl-2xl rounded-tr-2xl">
            <div className="marquee border-t-2 border-b-2 border-zinc-400 flex items-center whitespace-nowrap overflow-hidden" >

            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity,duration: 7 }}  className="text-[19vw] text-white font-['Founders_Gortesk-X_Condensed] font-semibold pr-20 -my-15">We are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity,duration: 7 }}  className="text-[19vw] text-white font-['Founders_Gortesk-X_Condensed] font-semibold pr-20 -my-15">We are ochi</motion.h1>




            </div>

        </div>
    )
}
export default Marquee;