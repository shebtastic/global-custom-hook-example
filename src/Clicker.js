import React from "react"
import useClicker from "./useClicker"

const Clicker = ({ id, }) => {
    const [counter, click] = useClicker()

    return (
        <div>
            <div>Clicker #{id}</div>
            <div>{counter}</div>
            <button onClick={click}>Click me!</button>
        </div>
    )
}

export default Clicker