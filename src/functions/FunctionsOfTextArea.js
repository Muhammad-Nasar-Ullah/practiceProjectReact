import { useState, useEffect } from 'react';

export const FunctionsOfTextArea = () => {
    const [disablebtn, setDisablebtn] = useState(true)
    const [text, setText] = useState("")
    const [action, setAction] = useState("")

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleUpClick = () => {
        setText(text.toUpperCase())
        setAction('Converted')
        setTimeout(() => {
            setAction('')
        }, 2000)
    }

    const handleLowClick = () => {
        setText(text.toLowerCase())
        setAction('Converted')
        setTimeout(() => {
            setAction('')
        }, 2000)
    }

    const handleClearClick = () => {
        setText('')
        setAction('Cleared');
        setTimeout(() => {
            setAction('')
        }, 2000)
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text)
        setAction('Coppied');
        setTimeout(() => {
            setAction('')
        }, 2000)
    }

    const handleExtraSpaceClick = () => {

        let cleaned = text
            .replace(/[^\S\n]+/g, ' ')
            .replace(/\n+/g, '\n')
            .trim();

        setText(cleaned);
        setAction('Removed')
        setTimeout(() => {
            setAction('')
        }, 2000)
    }

    useEffect(() => {
        if (text === '') {
            setDisablebtn(true)
        } else {
            setDisablebtn(false)
        }
    }, [text], [handleUpClick, handleLowClick, handleClearClick, handleCopyClick, handleExtraSpaceClick]);

    return {
        text,
        action,
        disablebtn,
        handleOnChange,
        handleUpClick,
        handleLowClick,
        handleClearClick,
        handleCopyClick,
        handleExtraSpaceClick
    }
}