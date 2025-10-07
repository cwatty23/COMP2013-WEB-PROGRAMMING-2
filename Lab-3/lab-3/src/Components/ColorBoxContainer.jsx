import ColorBox from "./ColorBox";
export default function ColorBoxContainer({colors}){
    
    return <div className="ColorBoxContainer">
        {colors.map((index) => {    //Uses a map for the amount of random colors needed.
            const randomColor = colors[Math.floor(Math.random() * colors.length)]; //Generates random colors for each box
            
            return(
            <div className="ColorBox" key={index} style={{backgroundColor : randomColor}}>
            <ColorBox colors={colors}/> 
            </div> 
            )
        })}
    </div>
}