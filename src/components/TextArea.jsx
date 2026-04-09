import React from 'react'
import { FunctionsOfTextArea } from '../functions/FunctionsOfTextArea'

const TextArea = ({ mode }) => {
    const {
        text,
        copybtn,
        clearbtn,
        upercasebtn,
        lowercasebtn,
        extraspacebtn,
        disablebtn,
        handleOnChange,
        handleUpClick,
        handleLowClick,
        handleClearClick,
        handleCopyClick,
        handleExtraSpaceClick
    } = FunctionsOfTextArea();

    let totalwords = text.split(' ').filter(word => word !== '').length;
    let min = Math.floor(text.length / 150);
    let sec = Math.ceil((text.length % 150) / 2.5);
    let time = (0.50 * totalwords) / 60;

    return (
        <div className='flex flex-col gap-5 w-[90%] md:w-[60%] lg:w-[50%] mx-auto my-5 rounded-lg'>
            <h2 className={`text-2xl font-bold ${mode === 'dark' ? 'text-white' : 'text-black'}`}>Enter Your Text Here</h2>

            <textarea name="" id="" value={text} onChange={handleOnChange} cols="30" rows="10" className={`border-2 border-black rounded-md p-2 ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}></textarea>

            <div className='flex gap-2 flex-wrap'>
                <button onClick={handleUpClick} disabled={disablebtn} className={`px-4 py-2 rounded-md ${mode === 'light' ? 'bg-black text-white' : 'bg-white text-black'} ${disablebtn ? 'opacity-50' : ''}`} style={{ cursor: disablebtn ? 'not-allowed' : 'pointer' }}>{upercasebtn}</button>
                <button onClick={handleLowClick} disabled={disablebtn} className={`px-4 py-2 rounded-md ${mode === 'light' ? 'bg-black text-white' : 'bg-white text-black'} ${disablebtn ? 'opacity-50' : ''}`} style={{ cursor: disablebtn ? 'not-allowed' : 'pointer' }}>{lowercasebtn}</button>
                <button onClick={handleClearClick} disabled={disablebtn} className={`px-4 py-2 rounded-md ${mode === 'light' ? 'bg-black text-white' : 'bg-white text-black'} ${disablebtn ? 'opacity-50' : ''}`} style={{ cursor: disablebtn ? 'not-allowed' : 'pointer' }}>{clearbtn}</button>
                <button onClick={handleCopyClick} disabled={disablebtn} className={`px-4 py-2 rounded-md ${mode === 'light' ? 'bg-black text-white' : 'bg-white text-black'} ${disablebtn ? 'opacity-50' : ''}`} style={{ cursor: disablebtn ? 'not-allowed' : 'pointer' }}>{copybtn}</button>
                <button onClick={handleExtraSpaceClick} disabled={disablebtn} className={`px-4 py-2 rounded-md ${mode === 'light' ? 'bg-black text-white' : 'bg-white text-black'} ${disablebtn ? 'opacity-50' : ''}`} style={{ cursor: disablebtn ? 'not-allowed' : 'pointer' }}>{extraspacebtn}</button>
            </div>

            <h1 className={`text-2xl font-bold ${mode === 'dark' ? 'text-white' : 'text-black'}`}>Preview</h1>
            <p className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>{totalwords} {totalwords < 2 ? 'word' : 'words'} {text.length} {text.length < 2 ? 'character' : 'characters'}</p >
            <p className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>{min} {min < 2 ? 'minute' : 'minutes'} {sec} {sec < 2 ? 'second' : 'seconds'} to read</p>
            <p className={`whitespace-pre-wrap ${mode === 'dark' ? 'text-white' : 'text-black'}`}>{text.length > 0 ? text : 'Enter your text to preview here'}</p>

        </div>
    )
}

export default TextArea