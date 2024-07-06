import * as React from 'react'
import ReactDOM from 'react-dom'
import ComponentViewer from 'component-viewer'


export default function ComponentEditor () {
  const $iframe = React.useRef<HTMLIFrameElement>(null)
  const [ready, setReady] = React.useState(false)

  const handleClick = (msg:string) => console.log('from inner', msg)

  
  const Portal = () => {
    const doc = $iframe.current?.contentWindow?.document
    if(!doc) return null
    const rootEl = doc.getElementById("viewer")
    if(!rootEl) return null
    return ReactDOM.createPortal(
      <ComponentViewer onClick={handleClick}/>,
      rootEl
   )
  }


  return (
    <div>
      ComponentEditor

      <hr/>

      <iframe
        ref={$iframe} 
        srcDoc="<div id='viewer'></div>"
        onLoad={() => setReady(true)}
      />

      {ready && <Portal />}
    </div>
  )
}