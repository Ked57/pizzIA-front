import PizzaList from "../Components/PizzaList/PizzaList";
import React, { useState } from "react";
import { PizzaTreatment } from "../types";

const Home = () => {
  const [pizzas, setPizzas] = useState<PizzaTreatment[]>([]);
  return (
    <div className="h-full flex flex-auto justify-around flex-col">
      <PizzaList pizzas={[{ message: "yo yo yo", succes: 1 }, ...pizzas]} />
    </div>
  );
};

export default Home;
