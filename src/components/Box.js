import React from 'react'

const Box = (props) => {
  let result = '';
  console.log("props: ", props);
  if ( props.title === "Computer" && props.result !== "draw" && props.result !== "" ) { 
    result = props.result === "win" ? "lose" : "win";
  } else {
    result = props.result;
  }

  if ( props.title === "Computer" && props.title === "draw") {
     result = "draw";
  }
  
  return (
    <div className={`box ${result}`}>
        <h1>{props.title}</h1>
        <img className="item-img" src={props.item && props.item.img} alt={props.item && props.item.desc}/>
        <h2>{result}</h2>
    </div>
  )
}

export default Box
