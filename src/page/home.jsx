import { useState } from "react";
import Background from "../components/background";
import Intro from "../components/intro";
import Navbar from "../components/navbar";

export default function Homepage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = (isOpen) => {
        setIsMenuOpen(isOpen);
    };

    return (
        <>
            <Background />
            <Navbar onMenuToggle={handleMenuToggle} />
            {!isMenuOpen && <Intro />}
        </>
    );
}
