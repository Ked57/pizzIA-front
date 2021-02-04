import React, { useEffect, useState } from "react"
import { PieChart, ResponsiveContainer, Pie, Cell, Legend } from "recharts"
import { PizzaFailed, PizzaSuccess, PizzaCountData } from "types";

const Stats = () => {
  const [error, setError] = useState<string>()
  const [totalPizza, setTotalPizza] = useState<Array<PizzaCountData>>()
  const callApi = async (param: string) => {
    const response = await fetch(
      `https://api.pizzia.k8s.jeremychauvin.fr/pizza-treatment/${param}`
    );
    if (!response.ok) {
      setError("Pas de réponse de l'API");
      throw response;
    }
    return response.json()
  };
  const getTotalPizza = async () => {
    const responseSuccessed: PizzaSuccess = await callApi("success")
    const responseFailed: PizzaFailed = await callApi("failed")
    const data: PizzaCountData[] = [
      {
        name: "Pizza valide",
        value: responseSuccessed.count
      },
      {
        name: "Pizza non valide",
        value: responseFailed.count
      }
    ]
    setTotalPizza(data)
  }
  const COLORS = ['#0088FE', '#FF0000'];
  useEffect(() => {
    const interval = setInterval(() => {
      getTotalPizza().catch((err) => {
        console.error(err);
        clearInterval(interval);
      });
    }, 5000);
  }, []);
  return (
    <div className="text-2xl">
      {totalPizza? (
          <ResponsiveContainer width="100%" height="40%">
          <PieChart>
          <Pie data={totalPizza} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label>
            {
              totalPizza.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
          <Legend verticalAlign="top" height={36}/>
          </PieChart>
        </ResponsiveContainer>
        ):(
          <>Chargement ... </>
        )
      }
    </div>
  )
}

export default Stats
