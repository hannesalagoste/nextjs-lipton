"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);



  return (
    <nav className='flex w-full justify-center  header py-6  z-50'>
      <div className='flex flex-between w-3/5 px-10'>
        <Link href='/' className='flex gap-2 flex-center'>
          <Image
            src='/assets/images/Logo.png'
            alt='logo'
            width={70}
            height={70}
            className='object-contain'
          />
        </Link>

        {/* Desktop Navigation */}
        <div className='sm:flex hidden'>

          <div className='flex gap-3 md:gap-5 colo text-white'>
            <Link href='/home' className=''>
            Aktion
            </Link>
            <Link href='/profile'>
            Kontakt
            </Link>
            <Link href='/profile'>
            Lipton Ice Tea
            </Link>
          </div>

        </div>

        {/* Mobile Navigation */}
        <div className='sm:hidden flex relative'>

          <div className='flex'>
            <Image
              src='/assets/images/logo.ico'
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />


            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>

              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;