import { useState } from "react"

export default function ColorBox({colors}){

    const randomColor = () => 
        colors[Math.floor(Math.random() * colors.length)];

    const [color, setColor] = useState(randomColor(colors.length));
    
    return (
    <div className="ColorBox"
    onClick={() => setColor(randomColor())}
    style={{backgroundColor : color}}>
    </div>
    )
}