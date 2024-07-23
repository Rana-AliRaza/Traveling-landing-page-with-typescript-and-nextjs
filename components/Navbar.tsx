import { NAV_LINKS } from '@/constants/page'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'


const Navbar = () => {
  return (
    <nav className=' flexBetween max-container padding-container relative z-30 py-5'>
      <Link href="/">
        <Image src='/hilink-logo.svg' alt='nav logo' width={74}height={29} />
      </Link>
      <ul className="hidden lg:flex gap-12 h-full">
        {
          NAV_LINKS?.map((link) => (
                <Link href={link.href} key={link.key} className='regular-16 text-gray-50 transition-all hover:font-bold pb-1.5 cursor-pointer'>
                    {link.label}
                </Link>
          ))
        }

      </ul>

      <div className="  hidden lg:flexCenter">
        <Button
          type='button'
          title="Login"
          variant="btn_dark_green"
          icon="/user.svg"
        />
      </div>

      <Image src="/menu.svg" alt='menu icon' width={32} height={32} className='inline-block cursor-pointer lg:hidden'/>

    </nav>
  )
}

export default Navbar