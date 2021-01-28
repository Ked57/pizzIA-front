import React from "react";

const RecipeHelper = ({message}: { message?: string }) => {
  return (
    <>
      <div>Remarque: {message}</div>
    </>
  );
};

export default RecipeHelper;
