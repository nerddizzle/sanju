"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import Image from 'next/image';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-black/5">
            <div className="max-w-6xl mx-auto px-6 h-28 flex items-center justify-between">
                <Link href="/" className="relative h-24 w-96">
                    <Image
                        src="/logo.png"
                        alt="Sanjeet Maharjan"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wider text-black/70">
                    <Link href="/" className="hover:text-black transition-colors">Home</Link>
                    <Link href="/gallery" className="hover:text-black transition-colors">Gallery</Link>
                    <Link href="/about" className="hover:text-black transition-colors">About</Link>
                    <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-black/70 hover:text-black"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-black/5 flex flex-col py-4 shadow-lg animate-in slide-in-from-top-2">
                    <Link
                        href="/"
                        className="px-6 py-4 text-sm font-medium uppercase tracking-wider hover:bg-black/5 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/gallery"
                        className="px-6 py-4 text-sm font-medium uppercase tracking-wider hover:bg-black/5 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Gallery
                    </Link>
                    <Link
                        href="/about"
                        className="px-6 py-4 text-sm font-medium uppercase tracking-wider hover:bg-black/5 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="px-6 py-4 text-sm font-medium uppercase tracking-wider hover:bg-black/5 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    )
}
