import * as React from "react"
import ComponentEditor from "component-editor"


export default function GridEditor () {
  const [showComponentEditor, setShowComponentEditor] = React.useState(false)
  return (
    <div>
      GridEditor
      <hr/>

      <button onClick={() => setShowComponentEditor(!showComponentEditor)}>Toggle Component Editor</button>

      <hr/>

      {showComponentEditor && <ComponentEditor />}
    </div>
  )
}