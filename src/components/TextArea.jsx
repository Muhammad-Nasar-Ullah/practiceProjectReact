import React from 'react'
import { FunctionsOfTextArea } from '../functions/FunctionsOfTextArea'

const TextArea = ({ mode }) => {
    const {
        text,
        copybtn,
        clearbtn,
        upercasebtn,
        lowercasebtn,
        disablebtn,
        handleOnChange,
        handleUpClick,
        handleLowClick,
        handleClearClick,
        handleCopyClick
    } = FunctionsOfTextArea();

    let totalwords = text.split(' ').filter(word => word !== '').length;
    let time = (3.3 * totalwords) / 60;

    return (
        <div className='flex flex-col gap-5 w-[40%] mx-auto my-5'>
            <h2 className={`text-2xl font-bold ${mode === 'dark' ? 'text-white' : 'text-black'}`}>Enter Your Text Here</h2>

            <textarea name="" id="" value={text} onChange={handleOnChange} cols="30" rows="10" className={`border-2 border-black rounded-md p-2 ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}></textarea>

            <div className='flex gap-2'>
                <button onClick={handleUpClick} disabled={disablebtn} className={`px-4 py-2 rounded-md ${mode === 'light' ? 'bg-black text-white' : 'bg-white text-black'} ${disablebtn ? 'opacity-50' : ''}`} style={{ cursor: disablebtn ? 'not-allowed' : 'pointer' }}>{upercasebtn}</button>
                <button onClick={handleLowClick} disabled={disablebtn} className={`px-4 py-2 rounded-md ${mode === 'light' ? 'bg-black text-white' : 'bg-white text-black'} ${disablebtn ? 'opacity-50' : ''}`} style={{ cursor: disablebtn ? 'not-allowed' : 'pointer' }}>{lowercasebtn}</button>
                <button onClick={handleClearClick} disabled={disablebtn} className={`px-4 py-2 rounded-md ${mode === 'light' ? 'bg-black text-white' : 'bg-white text-black'} ${disablebtn ? 'opacity-50' : ''}`} style={{ cursor: disablebtn ? 'not-allowed' : 'pointer' }}>{clearbtn}</button>
                <button onClick={handleCopyClick} disabled={disablebtn} className={`px-4 py-2 rounded-md ${mode === 'light' ? 'bg-black text-white' : 'bg-white text-black'} ${disablebtn ? 'opacity-50' : ''}`} style={{ cursor: disablebtn ? 'not-allowed' : 'pointer' }}>{copybtn}</button>
            </div>

            <h1 className={`text-2xl font-bold ${mode === 'dark' ? 'text-white' : 'text-black'}`}>Preview</h1>
            <p className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>{totalwords} words {text.length} characters</p >
            <p className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>{time} minutes to read</p>

        </div>
    )
}

export default TextArea