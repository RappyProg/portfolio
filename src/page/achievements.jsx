import { useState } from "react";
import Background from "../components/background";
import Navbar from "../components/navbar";
import Achievement from "../components/achievement";

export default function Achievementpage(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = (isOpen) => {
        setIsMenuOpen(isOpen);
    };
    return(
        <>
            <Background />
            <Navbar onMenuToggle = {handleMenuToggle} />
            {!isMenuOpen && <Achievement />}
        </>
    )
}