

const Images = ({ img, text, className }) => {
  return (
    <div>

<img src={img} alt={text} className={` ${className}`} />
    </div>
  )
}

export default Images