import OchiSvg from "../assets/svg/OchiSvg";

const Footer = () => {
    return (
        <div className="w-full h-screen bg-zinc-100">

            <div className="h-full p-20 bg-zinc-900  rounded-tl-3xl rounded-tr-3xl flex gap-5 ">
                <div className="h-full flex flex-col justify-between text-zinc-100 w-1/2">

                    <div className="heading" >
                        <h1 className="text-[6vw] font-semibold -mb-0 uppercase tracking-tighter leading-none">Eye-</h1>
                        <h1 className="text-[6vw] font-semibold -mb-0 uppercase tracking-tighter leading-none">Opening</h1>
                    </div>
                    <div className="">
                        <OchiSvg />
                    </div>
                </div>
                <div className=" h-full text-zinc-100 w-1/2">
                    <div className="presentation" >
                        <h1 className="text-[6vw] font-semibold -mb-0 uppercase tracking-tighter leading-none">Presentation</h1>
                    </div>
                    <div className="w-full h-full py-10 pb-20 text-zinc-100">
                        <div className="h-full flex flex-col justify-between">
                            <div className="flex flex-col gap-10">

                                <h1 className="uppercase text-xl font-thin" >
                                    s:
                                </h1>
                                <div>
                                    {["Instagram", "Linkedin", "Twitter", "Youtube"].map((item, index) => (
                                        <p className="font-light font-thin underline text-xl" key={index}>{item}</p>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full font-thin flex justify-between " >
                                <div>
                                    <h1 className="text-md font-thin ">@ ochi design 2025. <a href="#" className="underline">Legal Terms</a></h1>
                                </div>
                                <div>
                                    <h1 className="text-md">Website by Obys</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
export default Footer;