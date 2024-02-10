import { useState } from "react";

const Events = () => {

    const [count, setCount] = useState(0)

    function addCount(){
        setCount(count +1)
    }
    function resetCount(){
        setCount(0)
    }

    return(
        <div>
            <h1>Event handling</h1>
            <p>count : {count}</p>
            <button onClick={addCount}> update Count</button>
            <button onClick={resetCount}> reset Count</button>
        </div>
    )
}

export default Events