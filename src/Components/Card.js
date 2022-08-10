import React from "react";
import im1 from '../images/2.png'
function Card(props) {
  const position = `translate(${props.top}px,${props.left}px)`;
  return (
    <div
      onClick={() => {
        props.setActive(props.id);
      }}
      className="box-class"
      style={{
        // backgroundColor: props.active === props.id ? "red" : "",
        transform:position,
        zIndex:props.id,
        boxShadow: props.active === props.id? `0px 0px 10px gold`:"none"
      }}
     
    > </div>
  );
}

export default Card;
