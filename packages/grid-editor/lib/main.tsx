import * as React from 'react'
import * as c from 'component-editor'

type Props = {
  label: string
}

export function DemoComponent (props:Props) {
  const [count, setCount] = React.useState(0)
  
  return (
    <div>
      <div onClick={() => setCount(n => n+1)}>{props.label} - Hello World {count}</div>
      <hr/>
      <c.DemoComponent label="Component Editor"/>
    </div>
  )
}