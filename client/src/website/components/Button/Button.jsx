import './Button.css'

function Button({value, style}) {
  return (
    <div>
        <button style={style}>{value}</button>
    </div>
  )
}

export default Button