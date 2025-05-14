import LocomotiveScroll from "locomotive-scroll";
import About from "../../component/About";
import DownCards from "../../component/DownCards";
import Eye from "../../component/Eye";
import Featured from "../../component/Featured";
import Footer from "../../component/Footer";
import Marquee from "../../component/Marquee";
import Navbar from "../../component/Navbar";
import LandingPage from "../LandingPage/LandingPage";

const Home = () => {

    const locomotiveScroll = new LocomotiveScroll();
    console.log(locomotiveScroll)
    return (
        <div className="w-full min-h-screen bg-zinc-900">
            <Navbar/>
            <LandingPage/>
            <Marquee/>
            <About/>
            <Eye/>
            <Featured/>
            <DownCards/>    
            <Footer/>
        </div>
    )
}
export default Home;