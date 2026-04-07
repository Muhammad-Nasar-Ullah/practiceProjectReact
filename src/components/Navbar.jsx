import React from 'react'

const Navbar = ({ mode, toggleMode }) => {
    return (
        <div className={`px-5 py-5 flex justify-between items-center ${mode === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
            <h2 className={`text-2xl font-bold ${mode === 'dark' ? 'text-white' : 'text-black'}`}>Logo</h2>
            <ul className='flex gap-4'>
                <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>Home</li>
                <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>About</li>
                <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>Contact</li>
            </ul>
            <button onClick={toggleMode} className={`px-4 py-2 rounded-md ${mode === 'light' ? 'bg-black text-white' : 'bg-white text-black'}`} style={{ cursor: 'pointer' }}>{mode === 'light' ? 'Dark Mode' : 'Light Mode'}</button>
        </div>
    )
}

export default Navbar