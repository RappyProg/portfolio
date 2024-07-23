import { Link } from "react-router-dom";

export default function BurgerMenu(){
    return(
        <>
            <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center text-emerald-900 silkscreen-regular text-3xl">
                <Link to="/" className='duration-300 hover:text-8xl mb-10'>Home</Link>
                <Link to="/about" className='duration-300 hover:text-8xl mb-10'>About</Link>
                <Link to="/achievement" className='duration-300 hover:text-8xl mb-10'>Achievements</Link>
                <Link to="/contact" className='duration-300 hover:text-8xl mb-10'>Contacts</Link>
            </div>
        </>

    )
}