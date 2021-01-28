import React from "react";

const PizzaDisplayer = ({imgUrl}: { imgUrl?: string }) => {
  return (
    <>
      <img src={imgUrl}></img>
    </>
  );
};

export default PizzaDisplayer;
