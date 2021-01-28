import React from "react";

const PizzaDisplayer = (props: { imgUrl?: string }) => {
  return (
    <>
      <img src={props.imgUrl}></img>
    </>
  );
};

export default PizzaDisplayer;
