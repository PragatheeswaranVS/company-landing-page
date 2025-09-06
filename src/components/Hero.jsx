import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import HeroImg from "../assets/Hero.png"
export default function Hero()
{
    return(
        <>
            
            <div className="bg-image h-fit md:h-screen flex flex-col-reverse md:flex-row justify-around md:items-center px-5 md:px-15">
                <div className="">
                    <img src={HeroImg} alt="Hero image" className="img-property"/>
                </div>
                <div className="w-60 md:w-2/4 flex flex-col h-100 md:h-2/4 justify-evenly">
                    <p className="uppercase">Web Development and Digital Marketing Firm</p>
                    <h4 className="capitalize text-2xl md:text-5xl font-bold">Grow <span className="lowercase">your</span> Business <br/><span className="lowercase">with</span> zone Info</h4>
                    <p className="w-60 md:w-120 ">
                        Get a professional website and digital marketing support for your business within your budget.
                    </p>
                    <button className="h-12 w-40 button-border flex justify-center items-center bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-500 text-white">Let's Talk <ArrowLongRightIcon className='w-10'/></button>
                </div>
            </div>
        </>
    );
}