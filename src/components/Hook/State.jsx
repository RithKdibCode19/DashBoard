
import { useState } from 'react'

const State = () => {
    const [count, setCount] = useState(0)
  return (
    <>
        <button onClick={() => setCount(() => count +1)}>
        count is {count}
      </button>
    </>
  )
}

export default State