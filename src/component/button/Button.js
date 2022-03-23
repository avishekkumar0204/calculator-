import React from 'react'

function Button(props) {
  const operand = () => {
    props.createOperand(props.btnValue);
  }
  return (
    <div value={props.btnValue} className="btn  w-16 h-11 py-2 cursor-pointer text-center align-middle rounded-xl bg-black text-white" onClick={operand}>{props.btnValue}</div>
  )
}

export default Button;