import { CheckCircleIcon } from '@heroicons/react/24/solid'
import Image1 from "../assets/aboutImg1.jpg"
import Image2 from "../assets/aboutImg2.jpg"
export default function About()
{
    return(
        <>
           <div className='h-fit  w-full md:flex py-25 bg-indigo-50'>
                <div className='w-[300px] md:w-[750px] md:h-[450px] flex flex-col justify-evenly  text-justify md:m-10 px-8 md:px-15'>
                    <h4 className="capitalize md:text-4xl font-bold ">who we are?</h4>
                    <p className='text-gray-600 p-5'>We are a digital and branding company that believes in the power of creative strategy and along with great design.</p>
                    <p className="text-gray-600 px-5">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et</p>
                    <div className='w-[200px] md:w-[500px] flex justify-around items-center text-gray-500 key-points ml-8 md:mt-0 py-5'>
                        <div className='flex gap-1'>
                            <CheckCircleIcon className='w-4 text-indigo-300'></CheckCircleIcon>
                            <p>Aenean eu leo quam ornare curabitur blandit tempus.</p>
                        </div>
                        <div className='flex gap-1'>
                            <CheckCircleIcon className='w-4 text-indigo-300'></CheckCircleIcon>
                            <p>Aenean eu leo quam ornare curabitur blandit tempus.</p>
                        </div>
                        <div className='flex gap-1'>
                            <CheckCircleIcon className='w-4 text-indigo-300'></CheckCircleIcon>
                            <p>Aenean eu leo quam ornare curabitur blandit tempus.</p>
                        </div>
                        <div className='flex gap-1'>
                            <CheckCircleIcon className='w-4 text-indigo-300'></CheckCircleIcon>
                            <p>Aenean eu leo quam ornare curabitur blandit tempus.</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row md:w-[400px] h-[350px] py-10 '>
                        <img src={Image1} alt="Image" className='rounded-[10px] w-[250px] md:w-[350px] h-[300px] relative top-15 md:top-0 left-10 md:left-54' />
                        <img src={Image2} alt="Image" className='rounded-[10px] w-[250px] md:w-[250px] h-[250px] relative top-18 md:top-44 left-10 md:left-[-280px]'/>
                </div>
                
            </div>
        </>
    );
}


{/* <div className='flex justify-center items-start text-gray-600 border-2 key-points'>
    <div>
        <span className='w-45'><CheckCircleIcon className='w-6 text-indigo-300' /> Aenean euleo quam ornare curabitur blandit tempus.</span>
    </div>
    <div>
        <span className='w-45'><CheckCircleIcon className='w-6  text-indigo-300' />Aenean eu leo quam ornare curabitur blandit tempus.</span>
    </div>
    <span className='w-45'><CheckCircleIcon className='w-6  text-indigo-300' />Aenean eu leo quam ornare curabitur blandit tempus.</span>
    <span className='w-45'><CheckCircleIcon className='w-6  text-indigo-300' />Aenean eu leo quam ornare curabitur blandit tempus.</span>
</div> */}