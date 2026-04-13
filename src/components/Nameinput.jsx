import {useState } from "react"

function Nameinput() {
    const[name, setName] = useState("")

    return(
        <div>
            <h2>Enter your name: {name}</h2>
            <input type="text" 
                placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}

export default Nameinput