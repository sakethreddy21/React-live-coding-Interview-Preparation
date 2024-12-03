//Counter Component

import { useState} from "react"
const Counter =()=>{
    const [count, setCount]= useState(0)
    const increment=()=>  setCount(count+1)
    const decrement=()=> setCount(count-1)          

    return (
        <div className="flex gap-10 justify-center">
            <button onClick={increment}>add</button>
        {count}
        <button onClick={decrement}>subtract</button>
        </div>
    )
}

export default Counter