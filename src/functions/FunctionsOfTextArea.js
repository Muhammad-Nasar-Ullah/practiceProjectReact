import { useState, useEffect } from 'react';

export const FunctionsOfTextArea = () => {
    const [copybtn, setCopybtn] = useState('Copy Text')
    const [clearbtn, setClearbtn] = useState('Clear Text')
    const [upercasebtn, setUpercasebtn] = useState('Convert to Uppercase')
    const [lowercasebtn, setLowercasebtn] = useState('Convert to Lowercase')
    const [disablebtn, setDisablebtn] = useState(true)
    const [text, setText] = useState("")

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleUpClick = () => {
        setText(text.toUpperCase())
        setUpercasebtn('Converted')
        setTimeout(() => {
            setUpercasebtn('Convert to Uppercase')
        }, 1000)
    }

    const handleLowClick = () => {
        setText(text.toLowerCase())
        setLowercasebtn('Converted')
        setTimeout(() => {
            setLowercasebtn('Convert to Lowercase')
        }, 1000)
    }

    const handleClearClick = () => {
        setText('')
        setClearbtn('Cleared');
        setTimeout(() => {
            setClearbtn('Clear Text');
        }, 1000)
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text)
        setCopybtn('Coppied');
        setTimeout(() => {
            setCopybtn('Copy Text');
        }, 1000)
    }

    useEffect(() => {
        if (text === '') {
            setDisablebtn(true)
        } else {
            setDisablebtn(false)
        }
    }, [text], [handleUpClick, handleLowClick, handleClearClick, handleCopyClick]);

    return {
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
    }
}