import { useState } from "react";

function CounterApp() {
    //state variable and function
    const[count, setCount ]= useState(0)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    function reset() {
        setCount(0)
    }
    
    return(
    <div>
        <h2>Count: {count}</h2>
        <div>
            <button onClick={increment}>Increment</button>
        </div>
        <div>
            <button onClick={decrement}>Decrement</button>
        </div>
        <div>
            <button onClick={reset}>Reset</button>
        </div>
        {
            count==10 && <h3>Congratulations! You reached 10.</h3>
        }
    </div>
    )
}

export default CounterApp