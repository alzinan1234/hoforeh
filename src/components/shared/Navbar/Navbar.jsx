"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleMenu = () => setMobileOpen(!mobileOpen)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md text-black">
      <div className="maxWidth mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.webp" alt="LogicGenX Logo" width={120} height={50} />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-bold">
          <Link href="/" className="hover:text-[#0b5c76] uppercase">HOME</Link>
          <Link href="/about" className="hover:text-[#0b5c76] uppercase">About</Link>
          <Link href="/services" className="hover:text-[#0b5c76] uppercase">Services</Link>
          <Link href="/products" className="hover:text-[#0b5c76] uppercase">Products</Link>
          <Link href="/contact" className="hover:text-[#0b5c76] uppercase">Contact Us</Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out px-4 ${
          mobileOpen ? 'max-h-96 opacity-100 pt-4 pb-6' : 'max-h-0 opacity-0'
        } font-bold`}
      >
        <Link href="/" className="block text-[#0b5c76] uppercase mb-2">Home</Link>
        <Link href="/about" className="block text-[#0b5c76] uppercase mb-2">About</Link>
        <Link href="/services" className="block hover:text-[#0b5c76] uppercase mb-2">Services</Link>
        <Link href="/products" className="block hover:text-[#0b5c76] uppercase mb-2">Products</Link>
        <Link href="/contact" className="block hover:text-[#0b5c76] uppercase">Contact Us</Link>
      </div>
    </header>
  )
}
