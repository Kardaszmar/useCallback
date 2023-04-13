import React, {useState, useEffect} from "react";
import './CountButton.css'

const  CountButton = ({incrementBy, buttonColor, textColor})=> {

const [currentCount, setCurrentCount] = useState(0);

const handleClick = ()=> {
    setCurrentCount(currentCount + incrementBy)
}

useEffect(() => {
    if(currentCount===20){
        setCurrentCount(0)
    }
}, [currentCount])

const buttonStyle = {
    background: buttonColor,
    borderRadius: "10px",
    color: textColor
}

return (
    <div>  {/* Mozemy tez innym sposobem: <div style = {{border: "2px solid red", padding: 20}}*/}
        <button style={buttonStyle} onClick={handleClick}> + {incrementBy} 
        </button>
        <div className = "count-display">{currentCount}</div>
    </div>
)
}

export default CountButton
// This ist second commit added on GitHub
