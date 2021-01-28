import React from "react";

const RecipeHelper = (props: { message?: string }) => {
  return (
    <>
      <div>Remarque: {props.message}</div>
    </>
  );
};

export default RecipeHelper;
