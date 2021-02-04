import React, { useEffect, useState } from "react";
import { of } from "await-of";
import { PieChart, ResponsiveContainer, Pie, Cell, Legend } from "recharts";
import { PizzaCountData } from "types";

const Stats = () => {
  const [error, setError] = useState<string>();
  const [totalPizza, setTotalPizza] = useState<Array<PizzaCountData>>();
  const callApi = async (param: string) => {
    const response = await fetch(
      `https://api.pizzia.k8s.jeremychauvin.fr/pizza-treatment/${param}`
    );
    if (!response.ok) {
      setError("Pas de réponse de l'API");
      throw response;
    }
    return response.json();
  };
  const getTotalPizza = async () => {
    const [responseSucceeded, errorSucceeded] = await of(callApi("success"));
    const [responseFailed, errorFailed] = await of(callApi("failed"));
    if (errorSucceeded || errorFailed) {
      setError(errorSucceeded?.message || errorFailed?.message);
      return;
    }
    const data: PizzaCountData[] = [
      {
        name: "Pizza valide",
        value: responseSucceeded.count,
      },
      {
        name: "Pizza non valide",
        value: responseFailed.count,
      },
    ];
    setTotalPizza(data);
  };
  const COLORS = ["#0088FE", "#FF0000"];
  useEffect(() => {
    getTotalPizza().catch((err) => {
      console.error(err);
    });
  }, []);
  return (
    <div className="text-2xl">
      {error ? (
        <p>Something went wrong: {error}</p>
      ) : totalPizza ? (
        <ResponsiveContainer width="100%" height="40%">
          <PieChart>
            <Pie
              data={totalPizza}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              label
            >
              {totalPizza.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend verticalAlign="top" height={36} />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <>Chargement ... </>
      )}
    </div>
  );
};

export default Stats;
