import { useState } from "react";
import BurgerMenu from "./menu";
import PropTypes from "prop-types";

export default function Burger({onMenuToggle}){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        onMenuToggle(!isOpen);
        }
    return(
        <>
            <div className="relative">
                <div className='cursor-pointer w-8 h-6 flex flex-col
                justify-between items-center' onClick={toggleMenu}>
                    <span className={`w-full h-1 bg-red-800 transition-transform duration-300 ${isOpen ? 'transform translate-y-2.5 rotate-45' : ''}`} ></span>
                    <span className={`w-full h-1 bg-red-800 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-full h-1 bg-red-800 transition-transform duration-300 ${isOpen ? 'transform -translate-y-2.5 -rotate-45' : ''}`}></span>
                </div>
            </div>

            {isOpen && ( <div 
                className={`absolute -z-[1]`}>
                <BurgerMenu />
            </div>)}
            
        </>


    )

}

Burger.propTypes ={
    onMenuToggle: PropTypes.func.isRequired
};