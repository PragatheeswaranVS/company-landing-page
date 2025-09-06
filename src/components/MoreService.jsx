import { ChatBubbleLeftRightIcon, UserGroupIcon, RocketLaunchIcon, BanknotesIcon} from '@heroicons/react/24/solid'
import Service from "./Service";
import RouteImg from "../assets/routeImg.png"
import Header from './Header';
import Footer from './Footer';
export default function MoreServices()
{
    return(
        <>
            <Header />
            <Service />
            <div className="bg-sky-100 py-10">
                <div className="flex flex-col items-center justify-center">
                    <p className="font-extrabold font-serif capitalize md:text-3xl">increase your sales with our <br /><span className="font-light px-10">digital marketing solution</span></p>
                    <div className='flex flex-col md:flex-row gap-30 py-30'> 
                        
                        <div className='w-50 flex flex-col gap-5 justify-center text-justify'>
                            <ChatBubbleLeftRightIcon className='w-40 h-40 p-8 rounded-full bg-gray-100 text-gray-500  hover:bg-gray-400 hover:text-white'/>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi nemo accusamus maiore</p>
                        </div>
                        <div className='w-50 flex flex-col gap-5 justify-center text-justify'>
                            <UserGroupIcon className='w-40 h-40 p-8 rounded-full bg-gray-100 text-gray-500  hover:bg-gray-400 hover:text-white'/>
                             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi nemo accusamus maiore</p>
                        </div>
                        <div className='w-50 flex flex-col gap-5 justify-center text-justify'>
                            <RocketLaunchIcon className='w-40 h-40 p-8 rounded-full bg-gray-100 text-gray-500  hover:bg-gray-400 hover:text-white'/>
                             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi nemo accusamus maiore</p>
                        </div>
                        <div className='w-50 flex flex-col gap-5 justify-center text-justify'>
                            <BanknotesIcon className='w-40 h-40 p-8 rounded-full bg-gray-100 text-gray-500  hover:bg-gray-400 hover:text-white'/>
                             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi nemo accusamus maiore</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}