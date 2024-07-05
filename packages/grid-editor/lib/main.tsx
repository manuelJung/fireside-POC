import * as React from 'react'

type Props = {
  label: string
}

export function DemoComponent (props:Props) {
  const [count, setCount] = React.useState(0)
  
  return <div onClick={() => setCount(n => n+1)}>{props.label} - Hello World {count}</div>
}