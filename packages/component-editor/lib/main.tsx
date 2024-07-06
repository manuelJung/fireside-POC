import * as React from 'react'
import ReactDOM from 'react-dom'
import ComponentViewer from 'component-viewer'


export default function ComponentEditor () {
  const $iframe = React.useRef<HTMLIFrameElement>(null)
  const [ready, setReady] = React.useState(false)

  
  const Portal = () => {
    const doc = $iframe.current?.contentWindow?.document
    if(!doc) return null
    console.log(doc.body.innerHTML)
    return ReactDOM.createPortal(
      <div />,
      doc.getElementById("result")!
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