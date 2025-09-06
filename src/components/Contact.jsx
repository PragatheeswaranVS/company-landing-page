import { EnvelopeIcon,PhoneIcon,MapPinIcon,} from '@heroicons/react/24/solid';
// import {  TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti";
import Header from './Header';
import Footer from './Footer';
export default function Contact()
{
    return(
        <>
            <div className="hidden lg:block"    >
            </div>
                <Header />
            <section className="Skills w-full lg:h-screen flex flex-col items-center gap-5 bg-sky-100 py-5">
                <h4 className="capitalize text-2xl md:text-4xl font-bold ">get in touch</h4>

                <div className='lg:h-3/4  w-full p-5 flex flex-col lg:flex-row md:py-5'>
                    <div className='contact-left h-fit  lg:w-1/2 flex flex-col lg:items-center gap-8 lg:py-10' data-aos="fade-right" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <h3 className='text-gray-900 text-center font-medium text-2xl lg:text-3xl capitalize'>contact info</h3>
                        <div className='contact-info '>
                            <EnvelopeIcon  className='text-white  w-12 h-12 border rounded-full p-2 bg-gradient-to-br from-purple-400 via-ipurple-300 to-purple-200'/>
                            <div>
                                <h3>Mail</h3>  
                                <p>zoneinfo@gmail.com</p>
                            </div>  
                        </div>
                        <div className='contact-info'>
                            <PhoneIcon  className='text-white  w-12 h-12 border rounded-full p-2 bg-gradient-to-br from-purple-400 via-ipurple-300 to-purple-200'/>
                            <div>
                                <h3>Phone</h3>  
                                <p>+91-xxxxxxxxxx</p>
                            </div>    
                        </div>
                        <div className='contact-info'>
                            <MapPinIcon  className='text-white  w-12 h-12 border rounded-full p-2 bg-gradient-to-br from-purple-400 via-ipurple-300 to-purple-200'/>
                            <div>
                                <h3>Location</h3>  
                                <p>24, XYZ block,<br />India</p>
                            </div>    
                        </div>
                    </div>
                    <div className='vertical-line border-l-2 border-gray-400 hidden lg:block' data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"></div>
                    <div className='contact-right lg:w-1/2 h-fit p-3' data-aos="fade-right" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1500" data-aos-easing="ease-in-out">
                        <div className='text-gray-900 font-medium text-2xl md:text-3xl'>
                            <h2 className='text-center'>Send a Message</h2>
                        </div>
                        <div className='h-full'>
                            <form action="" method="POST" className='flex flex-col lg:px-5 gap-5 items-center  py-5 '>
                                <p className='Inputs'>
                                    <input type="text" name="name" placeholder='Your name' required/>
                                </p>
                                <p className='Inputs'>
                                    <input type="email" name="email" placeholder='Your email' required/>
                                </p>
                                <p className='Inputs'>
                                    <textarea name="Message" id="Message" placeholder='Message' required />
                                </p>
                                <button type='submit' className='bg-red-600 text-white font-bold w-60 lg:w-80 h-10 rounded-4xl'>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer className="block md:hidden" />
        </>
    )
}