

const Button = ({ className, Text }) => {
  return (
    <button className={`${className} `}>
      {Text}    
    </button>
  )
}

export default Button