import { FiMenu } from "react-icons/fi"
import { NavLink } from 'react-router-dom'
import lightLogo from '../assets/light-logo.png'
import { HiLightBulb, HiMoon } from 'react-icons/hi'
import { useEffect, useState } from 'react'
//import darkLogo from '../assets/dark-logo.jpg'

export default function AppHeader() {

  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark')

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])

  const handleClick = () => {

    if (theme != 'dark') {
      localStorage.setItem('theme', 'dark')
      setTheme(localStorage.getItem('theme'))
    } else if (theme == 'dark') {
      localStorage.setItem('theme', 'light')
      setTheme(localStorage.getItem('theme'))
    }
  }

  return (
    <>
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between content-center py-10">

        {/* logo */}
        <div>
          <NavLink to={'/'}>
            <img src={lightLogo} className='h-14' alt="" />
          </NavLink>
        </div>

        {/* dark theme mode */}
        <button onClick={handleClick} className='absolute right-12 top-5 bg-primary-dark dark:bg-white text-white dark:text-black py-1 px-2 rounded sm:ml-6 '>{theme === "dark" ? <HiLightBulb /> : <HiMoon />}</button>

        {/* hamburger menu for mobile */}
        <div className='flex items-center'>
          <FiMenu onClick={() => setIsOpen(!isOpen)} className='sm:hidden block dark:text-white border-2 border-secondary dark:border p-1 rounded h-10 w-10 cursor pointer' />
        </div>

        {/* links */}
        <nav className={`${isOpen ? 'block text-center mt-3 pb-2 border-b-2' : 'hidden'} w-full sm:flex sm:items-center sm:w-auto`}>
          <ul className='sm:flex text-secondary-dark dark:text-secondary font-semibold text-lg'>

            <li>
              <NavLink className={({ isActive }) => isActive ? 'dark:text-white underline text-secondary sm:ml-6' : 'sm:ml-6'} to={'/'}>Home</NavLink>
            </li>

            <li>
              <NavLink className={({ isActive }) => isActive ? 'dark:text-white underline text-secondary sm:ml-6' : 'sm:ml-6'} to={'/projects'}>Projects</NavLink>
            </li>

            <li>
              <NavLink className={({ isActive }) => isActive ? 'dark:text-white underline text-secondary sm:ml-6' : 'sm:ml-6'} to={'/about-me'}>About me</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
