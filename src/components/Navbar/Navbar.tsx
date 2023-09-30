import React from 'react'
import {BiPlus, BiSolidUserCircle, BiSearchAlt} from "react-icons/bi"
import Link from 'next/link'
import logo from '@/assests/logo.png'
import Image from 'next/image'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
<div className="navbar-left">
<Link href="/pages/profile" className='link'>
    <BiSolidUserCircle className="icons"/>
</Link>
<Link href="/pages/addblog">
    <BiPlus className="icons"/>
</Link>
<Link href="/search">
    <BiSearchAlt className="icons"/>
</Link>
</div>

<div className="navbar-middle">
    <Link href="/">
        <Image
        className='logo'
        src={logo}
        alt="Picture of the company"/>
    </Link>

</div>
<div className="navbar-right">
    <Link href="/pages/home">Home</Link>
    <Link href="/pages/about"> About</Link>
    <Link href ="/pages//contact"> Contact</Link>
</div>
    </nav>
  )
}
