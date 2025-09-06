import About from "./About"
import Image1 from "../assets/aboutImg1.jpg"
import Header from "./Header"
import Footer from "./Footer"
export default function AboutMore()
{
    return(
        <>
            <Header/>
            <About/>
            <div className="bg-indigo-50 flex flex-col justify-center items-center">
                <div className="w-[300px] md:w-[1200px]">
                    <h4 className="font-bold md:text-3xl">Our Mission</h4>
                    <p className="px-8 py-3 text-gray-500 md:w-[1000px] text-justify"> 
                        Our mission is to empower businesses with cutting-edge technology that enhances their operations, improves customer experiences, and achieves sustainable competitive
                        advantages. We strive to be a trusted partner, guiding our clients through the complexities of the digital landscape and helping them realize their full potential.
                    </p>
                </div>
                <div className="w-[300px] md:w-[1200px] py-10">
                    <h4 className="capitalize font-bold md:text-3xl">meet our team</h4>
                    <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-evenly py-10">
                        <div className="text-center ">
                            <img src={Image1} alt="Founter Image" className="w-50 h-50 rounded-full"/>
                            <p className="font-semibold capitalize">pragtheeswaran</p>
                            <p className="capitalize text-gray-500"><span className="uppercase">ceo</span> &amp; founter</p>
                        </div>
                        <div className="text-center ">
                            <img src={Image1} alt="Founter Image" className="w-50 h-50 rounded-full"/>
                            <p className="font-semibold capitalize">Richard</p>
                            <p className="capitalize text-gray-500">cheif technology officer</p>
                        </div>
                        <div className="text-center ">
                            <img src={Image1} alt="Founter Image" className="w-50 h-50 rounded-full"/>
                            <p className="font-semibold capitalize">Throffin</p>
                            <p className="capitalize text-gray-500">head of product</p>
                        </div>
                        <div className="text-center ">
                            <img src={Image1} alt="Founter Image" className="w-50 h-50 rounded-full"/>
                            <p className="font-semibold capitalize">eran yeager</p>
                            <p className="capitalize text-gray-500">manager</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}