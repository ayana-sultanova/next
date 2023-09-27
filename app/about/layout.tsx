'use client'
import NavLink from "@/components/NavLink";
import React, {useState} from "react";

export default function AboutLayout({
    children,}: {
    children: React.ReactNode
})
{
    const [activeLink, setActiveLink] = useState<number>(0);

    const handleLinkClick = (index: number) => {
        setActiveLink(index);
    };

    return <div className='flex flex-col mt-16 text-white h-screen px-7'>
        <h1 className='font-bold text-56 text-center'>About us</h1>
        <ul className='mb-8 flex'>
            <li><NavLink href="/about/team" isActive={activeLink === 0} text='Team' onClick={() => handleLinkClick(0)}></NavLink> </li>
            <li><NavLink href="/about/contact" isActive={activeLink === 1} text='Contact' onClick={() => handleLinkClick(1)}></NavLink> </li>
        </ul>
        {children}
    </div>
}