// import React from "react";

// const IncrementCounter = () => {
//     return (
//         <button type="button"> + </button>
//     )
// }
// export default React.memo(IncrementCounter)

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCounter } from "../actions/index";

const IncrementCounter = () => {
    // Lay state
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch() // dispatch actions vao store

    const dispatchIncrementCounter = () => {
        dispatch(incrementCounter(count))
    }
    return (
        <button type="button" onClick={() => dispatchIncrementCounter()}> + </button>
    )
}
export default React.memo(IncrementCounter)