import Link from "next/link";
import React from "react";

export default function AboutLayout({
    children,}: {
    children: React.ReactNode
}) {
    return <div className='flex flex-col justify-center'>
        <h1 className='font-bold text-56 text-center'>About us</h1>
        <ul className='mb-8'>
            <li><Link href="/about/contact">Contact</Link> </li>
            <li><Link href="/about/team">Team</Link> </li>
        </ul>
        {children}
    </div>
}