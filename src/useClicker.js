import { useState, useEffect } from "react"

let state = null

const useClicker = () => {
    const [, dispatch] = useState(state?.counter ?? 0)

    useEffect(() => {
        if(state === null) {
            state = {
                counter: 0,
                hooked: [],
            }
        }

        state.hooked.push(dispatch)

        return () => {
            state.hooked = state.hooked.filter((hookedDispatch) => dispatch !== hookedDispatch)
        }
    }, [dispatch])

    const increment = () => {
        state.counter++
        state.hooked.forEach(dispatch => {
            dispatch(state.counter)
        })
    }
    
    return [state?.counter ?? 0, increment]
}

export { useClicker }
export default useClicker