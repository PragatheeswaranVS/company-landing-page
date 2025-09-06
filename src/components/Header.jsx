import { useState } from "react";
import Logo from "../assets/Logo.png"
import { Link } from "react-router-dom";
import { Bars3Icon } from '@heroicons/react/24/solid'
export default function Header()
{
    const [toggleMenu,setToggleMenu] = useState(false)
    
    return(
        <>
            <div className="flex items-center justify-around  bg-gray-100 text-black h-20 sticky top-0 z-10">
                <div className="flex items-center">
                    {/* <img src={Logo} alt="" className="w-15 h-10"/> */}
                    <h5 className=" text-2xl md:text-5xl bg-gradient-to-r from-blue-950 via-blue-800 to-blue-500 text-transparent bg-clip-text font px-2">zone info.</h5>
                </div>
                <nav className="text-xl uppercase hidden md:block">
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Service">Service</Link>
                    <Link to="/Contact">Contact</Link>
                    <button className="bg-red-500 w-40 h-12 rounded-3xl text-white">get a quote</button>
                </nav>
                <button className="md:hidden cursor-pointer" onClick={()=>
                    {  
                        setToggleMenu(!toggleMenu)
                        console.log(toggleMenu)   
                    }
                }><Bars3Icon className="w-8 "></Bars3Icon></button>
                {toggleMenu && (<nav className="text-xl uppercase flex md:hidden flex-col items-center fixed top-15 bg-white w-full h-2/3">
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Service">Service</Link>
                    <Link to="/Contact">Contact</Link>
                    <button className="bg-red-500 w-40 h-12 rounded-3xl text-white">get a quote</button>
                </nav>)}
            </div>
        </>
    );
}