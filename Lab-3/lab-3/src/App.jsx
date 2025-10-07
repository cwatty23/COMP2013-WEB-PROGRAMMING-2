import './App.css'
import ColorBoxContainer from './Components/ColorBoxContainer'
import ColorBox from './Components/ColorBox'
import data from "./data/data"

function App() {

  return (
    <>
      <ColorBoxContainer colors={data}/>
    </>
  )
}


export default App
