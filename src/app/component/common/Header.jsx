"use client";

import React from 'react'
import Link from 'next/link';

function Header() {
    return (
        <nav className='sticky-top'>
            <div className='justify-between py-3 bg-orange-400'>
                <Link href="" className='j text-[25px] text-decoration-none  pl-30 text-white'>
                    BEST SCHOOL IN INDIA
                </Link>

                <Link href="/" className='pl-10 text-white text-decoration-none '>
                    HOME
                </Link>

                <Link href="/selvianai" className='px-4 text-white text-decoration-none '>
                    SELVIA AI
                </Link>
            </div>
        </nav >
    )
}

export default Header