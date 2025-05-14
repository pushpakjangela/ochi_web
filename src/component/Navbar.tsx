import LogoSvg from "../assets/svg/LogoSvg";

const Navbar = () => {
    return (
        <div className="fixed z-[100] w-full px-20 py-8 text-white font-['Neue Montreal'] flex justify-between items-center backdrop-blur-sm bg-background/100">
            <div className="logo">

                <LogoSvg />
            </div>
            <div className="link flex gap-10">
                {["Services", "Our work", "About us", "Insights", "Contact Us"].map((item, index) => (
                    <a
                        key={index}
                        className={` text-md capitalize font-light ${index === 4 ? "ml-40" : ""}`}
                    >
                        {item}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Navbar;