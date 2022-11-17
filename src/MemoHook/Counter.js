import React, { useState,useMemo } from 'react'

function Counter() {
    const [counterone, setCounterone] = useState(0)
    const [countertwo, setCountertwo] = useState(0)

    const incrementOne = () => {
        setCounterone(counterone + 1)
    }

    const incrementTwo = () => {
        setCountertwo(countertwo + 1)
    }

    const isEven = useMemo(() => {
        let i=0;
        while(i<2000000000){
            i++
        }
        if (counterone % 2 === 0) {
            return true
        }
    },[counterone])

    return (
        <div>
            <div>
                <button onClick={incrementOne}>count one -{counterone}</button>
                <span>{isEven?'Even':'Odd'}</span>
            </div>

            <br />

            <div>
                <button onClick={incrementTwo}>count two - {countertwo}</button>
            </div>
        </div>
    )
}

export default Counter