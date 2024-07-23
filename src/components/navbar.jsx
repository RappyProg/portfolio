import Burger from "./burger";
import PropTypes from "prop-types";

export default function Navbar({onMenuToggle}){

    return(
        <>
            <div className="navbar-center w-[100vw] p-3 flex justify-between">
                <div className='text-red-800 font-semibold silkscreen-bold text-lg'>Portfolio</div>

                <Burger onMenuToggle={onMenuToggle}/>

            </div>
            
        </>

    )
}

Navbar.propTypes = {
    onMenuToggle: PropTypes.func.isRequired,
};