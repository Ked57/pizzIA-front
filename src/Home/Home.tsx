import PizzaList from "../Components/PizzaList/PizzaList";
import React, { useEffect, useState } from "react";
import { of } from "await-of";
import { callApi } from "../api";
import { PizzaTreatment } from "../types";

const Home = () => {
  const [pizzas, setPizzas] = useState<PizzaTreatment[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    (async () => {
      const [pizzas, err] = await of(callApi("last-10"));
      if (err) {
        setError(`${err.name}: ${err.message}`);
        return;
      }
      setPizzas(pizzas)
    })();
  }, []);
  return (
    <div className="h-full flex flex-auto justify-around flex-col">
      <p>{error ? `Something went wrong: ${error}` : ""}</p>
      <PizzaList pizzas={pizzas} />
    </div>
  );
};

export default Home;
