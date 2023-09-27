import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Nebula Dreamers',
    description: 'Astronomy Blog',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Header/>
        <main className='flex justify-center items-center flex-col bg-custom'>
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    )
}
