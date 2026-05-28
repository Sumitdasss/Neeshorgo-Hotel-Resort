

const Input = ({ type, placeholder, className }) => {
  return (
    <div>
<input type={type} placeholder={placeholder} className={`${className}`} />

    </div>
  )
}

export default Input