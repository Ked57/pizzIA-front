import React from "react";

const RecipeHelper = ({message}: { message?: string }) => {
  return (
    <>
      <div className="p-2">Remarque: {message}</div>
    </>
  );
};

export default RecipeHelper;
