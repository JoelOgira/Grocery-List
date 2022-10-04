
const Button = ({ buttonText, reqType, setReqType }) => {
  return (
    <button
        style={{width:'33.33%', border: '1px solid green', borderRadius: '0'}}
        className={ buttonText === reqType ? 'selected, btn' : 'btn'}
        role="button"
        onClick={() => setReqType(buttonText)}
    >
        {buttonText}
    </button>
  )
}

export default Button;