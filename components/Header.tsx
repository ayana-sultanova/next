'use client'
import {useState} from "react";
import NavLink from "@/components/NavLink";

function Header() {
    const [activeLink, setActiveLink] = useState<number>(0);

    const handleLinkClick = (index: number) => {
        setActiveLink(index);
    };

    return (
        <header className='fixed top-0 z-10 w-full flex justify-center items-center pr-3 bg-custom h-16 text-white'>
            <img className='fixed left-3 w-16 h-16' src='../assets/nd.png' alt='' />
            <NavLink href='/' text='Home' isActive={activeLink === 0} onClick={() => handleLinkClick(0)} />
            <NavLink href='/about' text='About' isActive={activeLink === 1} onClick={() => handleLinkClick(1)} />
            <NavLink href='/blog' text='Blog' isActive={activeLink === 2} onClick={() => handleLinkClick(2)} />
        </header>
    );
}

export default Header;