import { useState } from "react"

const ToggleSwitch =()=>{
    const [state, setState]=useState(true)
    return (
        <div>
        
        <button onClick={()=>setState(!state)}>{state? 'light':'dark'}</button>
        </div>
    )
}


export default ToggleSwitch