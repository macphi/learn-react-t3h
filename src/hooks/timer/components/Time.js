import React, { useState, useEffect } from "react";

const Clock = () => {
    const [timeString, setTimeString] = useState(null)
    useEffect(() => {
        let timer = setInterval(() => {
            const now = new Date() // khoi tao doi tuong date JS
            // get hours - minuters - seconds
            const hours = now.getHours()
            const minuters = now.getMinutes()
            const seconds = now.getSeconds()
            const currentTimeString = `${hours} : ${minuters} : ${seconds}`
            setTimeString(currentTimeString)

        }, 1000)
        //Effect with cleanup
        return () => {
            // componentWillUnMount
            // leak memory
            // console.log('mount')
            clearInterval(timer)
        }

    }, []) // componentDidmount



    return (
        <div style={{ fontSize: '50px' }}>{timeString}</div>
    )

}
export default React.memo(Clock)











