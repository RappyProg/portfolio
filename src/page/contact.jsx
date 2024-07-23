import { useState } from "react";
import Background from "../components/background";
import Navbar from "../components/navbar";
import Contact from "../components/contact";

export default function Contactpage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = (isOpen) => {
        setIsMenuOpen(isOpen);
    };

    return (
        <>
            <Background />
            <Navbar onMenuToggle={handleMenuToggle} />
            {!isMenuOpen && <Contact />}
        </>
    );
}
