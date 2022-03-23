import React from 'react'
import Button from './button/Button';
import add, { substract, divide, multiply, mod } from '../operation';
const btnVal = ["AC", "%", , "(", ")", "7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"];

function CalculatorBody() {

  function createOperand(ele) {
    if (ele === "AC") {
      document.getElementById("operand-1").innerHTML = "";
      document.getElementById("operator").innerHTML = "";
      document.getElementById("operand-2").innerHTML = "";

    }
    else if (ele === '=') {
      const operator1 = document.getElementById("operand-1").innerHTML;
      const operator2 = document.getElementById("operand-2").innerHTML;
      const operand = document.getElementById("operator").innerHTML;
      console.log(operator1,operator2,operand);

    }
    else if (ele === '*' || ele === '+' || ele === '/' || ele === '-') {
      let operand2 = document.getElementById("operand-2").innerHTML;
      document.getElementById("operand-1").innerHTML += operand2;
      document.getElementById("operator").innerHTML += ele;
      document.getElementById("operand-2").innerHTML = "";

    }
    else
      document.getElementById("operand-2").innerHTML += ele;
  }
  return (

    <div class="flex justify-center items-center h-screen">
      <div className='flex flex-col my-4 w-1/3 mx-40 border-2 shadow-2xl bg-yellow-500 rounded-2xl'>

        <div className="result ">
          <div className=' h-10  text-center ' id="operand-1"></div>
          <div className='h-10  text-center ' id="operator"></div>
          <div className='h-10 text-center ' id="operand-2"></div>
        </div>

        <div className="btn-container grid grid-cols-4 gap-2 mx-8 my-4">
          {
            btnVal.map((val, idx) => {
              return <Button btnValue={val} btnIdx={idx} createOperand={createOperand} />
            })
          }
        </div>

      </div>
    </div>



  )
}


export default CalculatorBody;