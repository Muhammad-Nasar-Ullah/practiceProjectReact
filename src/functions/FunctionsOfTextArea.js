import { useState, useEffect } from 'react';

export const FunctionsOfTextArea = () => {
    const [copybtn, setCopybtn] = useState('Copy Text')
    const [clearbtn, setClearbtn] = useState('Clear Text')
    const [disablebtn, setDisablebtn] = useState(true)
    const [text, setText] = useState("")

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleUpClick = () => {
        setText(text.toUpperCase())
    }

    const handleLowClick = () => {
        setText(text.toLowerCase())
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
        disablebtn,
        handleOnChange,
        handleUpClick,
        handleLowClick,
        handleClearClick,
        handleCopyClick
    }
}