import { TvIcon, CodeBracketIcon, DocumentTextIcon, WrenchScrewdriverIcon, ChatBubbleOvalLeftEllipsisIcon,ArrowTrendingUpIcon } from '@heroicons/react/24/solid'
export default function Service()
{
    return(
        <>
            <div className="h-fit py-5 bg-sky-100">
                <p className="font-bold md:text-4xl text-center py-10">Why You'll Love Our Service?
                    {/* <p>The reasons why arvilax is the best.</p> */}
                </p>
                <div className='md:w-[1400px] flex flex-col md:flex-row  items-center md:ml-25 gap-5 md:gap-20 wrap'>
                    <div className=" text-justify flex flex-col justify-evenly items-center border-2  border-gray-100 rounded-[10px] w-[280px] md:w-[400px] card">
                        <TvIcon className='w-15  rounded-full p-2 icons'/>
                        <h5 >Perfect Responsive</h5>
                        <p className='w-55'>Our Template is full Perfect for all device. You can visit our template all device easily.</p>
                    </div>
                    <div className="text-justify flex flex-col justify-evenly items-center border-2  border-gray-100 rounded-[10px] w-[280px] md:w-[400px] card ">
                        <CodeBracketIcon className='w-15 rounded-full p-2 icons'/>
                        <h5>Clean Coded</h5>
                        <p className='w-55'>The arvilax code is awesome well documented code. And Its customization is very easily</p>
                    </div>
                    <div className="  text-justify flex flex-col justify-evenly items-center border-2  border-gray-100 rounded-[10px] w-[280px] md:w-[400px] card">
                        <ChatBubbleOvalLeftEllipsisIcon className='w-15 rounded-full p-2 icons'/>
                        <h5>24/7 Support</h5>
                        <p className='w-55'>We are provide 24 hours support for all clients.You can purchase without hesitation.</p>
                    </div>
                    <div className="text-justify flex flex-col justify-evenly items-center border-2 border-gray-100 rounded-[10px] w-[280px] md:w-[400px] card">
                        <DocumentTextIcon className='w-15 rounded-full p-2 icons'/>
                        <h5>Well Documented</h5>
                        <p className='w-55'>The arvilax code is awesome well documented code. And Its customization is very easily</p>
                    </div>
                    <div className="text-justify flex flex-col justify-evenly items-center border-2  border-gray-100 rounded-[10px] w-[280px] md:w-[400px] card">
                        <WrenchScrewdriverIcon className='w-15 rounded-full p-2 icons'/>
                        <h5>Services</h5>
                        <p className='w-55'>arvilax is a modern creatuve design for Creative Agency , Personal Portfolio etc....</p>
                    </div>
                    <div className="text-justify flex flex-col justify-evenly items-center border-2  border-gray-100 rounded-[10px] w-[280px] md:w-[400px] card">
                        <ArrowTrendingUpIcon className='w-15 rounded-full p-2 icons'/>
                        <h5>Faster Speed</h5>
                        <p className='w-55'>arvilax is faster loading speed.Arvilax create your template so much faster</p>
                    </div>
                </div>
            </div>
        </>
    );
}