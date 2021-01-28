import React, { useState, useEffect } from "react";
import PizzaDisplayer from "../Components/PizzaDisplayer/PizzaDisplayer";

type PizzaTreatment = {
  imageUrl?: string;
  message?: string;
  error?: string;
};

const Pizza = () => {
  const [pizzaTreatment, setPizzaTreatment] = useState<PizzaTreatment>();
  const callApi = async () => {
    const response = await fetch(
      "https://api.pizzia.k8s.jeremychauvin.fr/pizza-treatment/last"
    );
    if (!response.ok) {
      setPizzaTreatment({ error: "Pas de réponse de l'API" });
      return;
    }
    const { imageUrl, message } = await response.json();
    setPizzaTreatment({ imageUrl, message });
  };
  useEffect(() => {
    setInterval(callApi, 5000);
  }, []);
  if (!pizzaTreatment) {
    return <>CHARGEMENT</>;
  }
  if (pizzaTreatment.error) {
    return <>Error: {pizzaTreatment.error}</>
  }
  return (
    <>
      <PizzaDisplayer imgUrl={pizzaTreatment.imageUrl} />
    </>
  );
};

export default Pizza;
