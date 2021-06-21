type ButtonProps = {
  text?: string | number;
  children?:string
}

export function Button (props: ButtonProps){
  return (
    <>
    <button>{props.text}</button>
    </>
  )
}