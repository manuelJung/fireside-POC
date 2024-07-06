type Props = {
  onClick: (msg:string) => void
}

export default function ComponentViewer (props:Props) {
  return (
    <div onClick={() => props.onClick('my inner msg')}>
      ComponentViewer
    </div>
  )
}