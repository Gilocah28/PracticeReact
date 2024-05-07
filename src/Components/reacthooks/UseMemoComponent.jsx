import React, { useMemo, useState } from 'react'

const UseMemoComponent = () => {
    const [count,setCount] = useState(0)


    const doubleNumber = useMemo(() => {
        console.log("Computing...")
        return count * 2;
    },[count])

  return (
    <div>
        <h1>Count: {doubleNumber}</h1>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>Add</button>
    </div>
  )
}

export default UseMemoComponent