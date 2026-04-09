import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ mode, toggleMode }) => {

    const [dropdown, setDropdown] = useState(false)

    return (
        <div className={`px-5 py-5 flex justify-between items-center sticky top-0 h-[70px] ${mode === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
            <h2 className={`text-2xl font-bold ${mode === 'dark' ? 'text-white' : 'text-black'}`}>Logo</h2>

            <button onClick={() => setDropdown(!dropdown)} className={`px-4 py-2 rounded-md md:hidden ${mode === 'light' ? 'bg-black text-white' : 'bg-white text-black'}`} style={{ cursor: 'pointer' }}>menu</button>

            {dropdown && (
                <div className={`flex flex-col gap-4 absolute right-0 top-17 px-5 py-5 rounded-lg ${mode === 'dark' ? 'bg-gray-800' : 'bg-gray-300'}`}>
                    <ul className='flex flex-col gap-4'>
                        <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}><Link to='/'>Home</Link></li>
                        <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}><Link to='/about'>About</Link></li>
                        <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}><Link to='/contact'>Contact</Link></li>
                    </ul>
                    <button onClick={toggleMode} className={`px-4 py-2 rounded-md ${mode === 'light' ? 'bg-black text-white' : 'bg-white text-black'}`} style={{ cursor: 'pointer' }}>{mode === 'light' ? 'Enable DarkMode' : 'Enable LightMode'}</button>
                </div>
            )}

            <ul className='flex gap-4 hidden md:flex'>
                <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}><Link to='/'>Home</Link></li>
                <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}><Link to='/about'>About</Link></li>
                <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}><Link to='/contact'>Contact</Link></li>
            </ul>
            <button onClick={toggleMode} className={`px-4 py-2 rounded-md hidden md:block ${mode === 'light' ? 'bg-black text-white' : 'bg-white text-black'}`} style={{ cursor: 'pointer' }}>{mode === 'light' ? 'Enable DarkMode' : 'Enable LightMode'}</button>
        </div>
    )
}

export default Navbar