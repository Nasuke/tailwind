import React from 'react'
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className='w-full absolute z-10 bg-violet-300 padding-x py-8'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {
            navLinks.map((item) => {
              return (
                <li key={item.label}>
                  <a className='font-montserrat leading-normal text-lg text-slate-gray' href={item.href}>{item.label}</a>
                </li>
              )
            })
          }
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat wide:mr-24 max-lg:hidden'>
          <a href='/'>Sign in</a>
            <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Nav
