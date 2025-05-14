import { useEffect, useState } from "react";

const Eye = () => {
    const [rotate, setRotate] = useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle-180);
        })
    }, []);

    return (
        <div className="w-full h-screen overflow-hidden ">

        <div data-scroll data-scroll-speed="-.7"  data-scroll-section  className="relative h-[70vw] w-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] bg-center bg-cover flex items-center justify-center">
            <div className=" absolute top-1/2 left-1/2 -tranform translate-x-[-50%] translate-y-[-50%] flex gap-10 items-center justify-center">
                <div className="bg-zinc-100 w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center">
                    <div className="h-4/7 w-4/7 bg-zinc-900 rounded-full relative">
                        <div style={{transform: `rotate(${rotate}deg)`}} className="line w-full absolute -translate-x-[50%] -translate-y-[50%]  left-1/2 top-1/2 ">

                            <div className="h-7 w-7 bg-zinc-100 rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center">
                    <div className=" relative h-4/7 w-4/7 bg-zinc-900 rounded-full flex items-center justify-center">
                    <div style={{transform: `rotate(${rotate}deg)`}} className="line w-full absolute -translate-x-[50%] -translate-y-[50%]  left-1/2 top-1/2  ">

                            <div className="h-7 w-7 bg-zinc-100 rounded-full"></div>
                        </div>
                    </div>
                </div>


            </div>


        </div>
        </div>

    )
}
export default Eye;