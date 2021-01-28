import React, { useState, useEffect } from "react";
import { PizzaTreatment } from "../types";
import PizzaDisplayer from "../Components/PizzaDisplayer/PizzaDisplayer";
import RecipeHelper from "../Components/RecipeHelper/RecipeHelper";

const Pizza = () => {
  const [pizzaTreatment, setPizzaTreatment] = useState<PizzaTreatment>();
  const callApi = async () => {
    const response = await fetch(
      "https://api.pizzia.k8s.jeremychauvin.fr/pizza-treatment/last"
    );
    if (!response.ok) {
      setPizzaTreatment({ error: "Pas de réponse de l'API" });
      throw response;
    }
    const { imageUrl, message } = await response.json();
    setPizzaTreatment({ imageUrl, message });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      callApi().catch((err) => {
        console.error(err);
        clearInterval(interval);
      });
    }, 5000);
  }, []);
  return (
    <div className="flex flex-auto justify-center">
      {pizzaTreatment ? (
        <>
          <RecipeHelper
            message={pizzaTreatment.error || pizzaTreatment.message}
          />
          {pizzaTreatment.imageUrl ? (
            <PizzaDisplayer imgUrl={pizzaTreatment.imageUrl} />
          ) : (
            <></>
          )}
          {pizzaTreatment.succes ? (
            pizzaTreatment.succes === 1 ? (
              <>Pizza finie !</>
            ) : (
              <>Pizza en cours ...</>
            )
          ) : (
            <></>
          )}
        </>
      ) : (
        <>Chargement...</>
      )}
    </div>
  );
};

export default Pizza;
