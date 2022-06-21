import React, { useState } from 'react'
import TimeClock from './components/Time'

const AppClock = () => {
    const [showTime, setShowTime] = useState(true)
    const removeTime = () => {
        setShowTime(false)
    }

    return (
        <>
            {showTime && <TimeClock />}
            <button onClick={() => removeTime()}> Xoa thoi gian</button>
        </>
    )
}
export default AppClock