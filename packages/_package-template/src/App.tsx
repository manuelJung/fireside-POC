import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div onClick={() => setCount(n => n + 1)}>
      Hello World {count}
    </div>
  )
}
