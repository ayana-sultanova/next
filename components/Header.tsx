'use client'
import {useState} from "react";
import NavLink from "@/components/NavLink";

function Header() {
    const [activeLink, setActiveLink] = useState<number | null>(null);

    const handleLinkClick = (index: number) => {
        setActiveLink(index);
    };

    return (
        <header className='flex justify-center items-center pr-3 bg-green-900 h-16 text-white'>
            <NavLink href='/' text='Home' isActive={activeLink === 0} onClick={() => handleLinkClick(0)} />
            <NavLink href='/about' text='About' isActive={activeLink === 1} onClick={() => handleLinkClick(1)} />
            <NavLink href='/blog' text='Blog' isActive={activeLink === 2} onClick={() => handleLinkClick(2)} />
        </header>
    );
}


export default Header;