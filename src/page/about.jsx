import { useState } from "react";
import Background from "../components/background";
import Navbar from "../components/navbar";
import About from "../components/about";

export default function Aboutpage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = (isOpen) => {
        setIsMenuOpen(isOpen);
    };

    return (
        <>
            <Background />
            <Navbar onMenuToggle={handleMenuToggle} />
            {!isMenuOpen && <About />}
        </>
    );
}