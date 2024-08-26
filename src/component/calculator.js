import React,{useState} from "react";

function Cal() {
        const[data,setData]=useState("");
        const getValue=(event)=>{
                console.log(event.target.value);
                setData(data.concat(event.target.value))
        }
        function calculation(){
                setData(eval(data).toString())
        }
        function back(){
                setData(data.slice(0,-1))
        }
        function clear(){
                setData("")

        }
  return (
    <>
      <div className="container">
        <div>
          <input placeholder="0" value={data}/>
        </div>
        <div>
          <button className="black"  onClick={getValue} value="(">(</button>
          <button  className="black" onClick={getValue} value=")">)</button>
          <button className="black"  onClick={getValue} value="%">%</button>
          <button className="black"  onClick={clear} >AC</button>
        </div>
        <div>
          <button  onClick={getValue} value="7">7</button>
          <button  onClick={getValue} value="8">8</button>
          <button  onClick={getValue} value="9">9</button>
          <button className="black"  onClick={getValue} value="*">*</button>
        </div>
        <div>
          <button  onClick={getValue} value="4">4</button>
          <button  onClick={getValue} value="5">5</button>
          <button  onClick={getValue} value="6">6</button>
          <button className="black"  onClick={getValue} value="-">-</button>
        </div>
        <div>
          <button  onClick={getValue} value="1">1</button>
          <button  onClick={getValue} value="2">2</button>
          <button  onClick={getValue} value="3">3</button>
          <button className="black"  onClick={getValue} value="+">+</button>
        </div>
        <div>
          <button  onClick={getValue} value="0">0</button>
          <button className="black"  onClick={back} >Back</button>
          <button className="black"  onClick={calculation}>=</button>
          <button className="black"  onClick={getValue} value="/">/</button>
        </div>
      </div>
    </>
  );
}
export default Cal;
