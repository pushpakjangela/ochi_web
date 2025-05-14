const DownCards = () => {
    return (
        <div className="h-screen w-full bg-zinc-100 flex gap-5 py-50 px-10 rounded-tl-3xl rounded-tr-3xl">
            <div className=" cardContainer w-1/2  bg-zinc-100 ">
                <div className=" bg-[#004D43] h-full rounded-2xl flex items-center justify-center relative">
                    <h1 className="text-7xl font-semibold text-[#CEEA67] ">ochi</h1>
                    <h1 className="absolute text-xs text-[#CEEA67] top-[84%] left-[5%] border-[1px] border-[#ceea67] py-2 px-2 rounded-full">
                        Ⓒ 2025-2026</h1>

                </div>


            </div>
            <div className="w-1/2 h-full h-[50vh] flex gap-5">
                <div className=" w-1/2 h-full bg-[#212121] rounded-2xl felx items-center justify-centers" >
                    <div className="w-full h-full overflow-hidden flex items-center justify-center relative ">
                        <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                        <h1 className="absolute text-xs text-[#CEEA67] top-[84%] left-[9%] border-[1px] border-[#ceea67] py-2 px-3 border-[1px] border-zinc-100 text-zinc-100 rounded-full uppercase">
                            rating 5.0 on clutch
                            </h1>


                    </div>
                </div>
                <div className=" w-1/2 h-full bg-[#212121] rounded-2xl felx items-center justify-centers" >
                    <div className="w-full h-full overflow-hidden flex items-center justify-center relative">
                        <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                        <h1 className="absolute text-xs text-[#CEEA67] top-[84%] left-[9%] border-[1px] border-[#ceea67] py-2 px-3 border-[1px] border-zinc-100 text-zinc-100 rounded-full uppercase">
                            Bussiness Bootcamp Alumini
                            </h1>
                    </div>
                </div>


            </div>

        </div>
    )
}
export default DownCards;