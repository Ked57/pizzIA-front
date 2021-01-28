import React from "react";
import { PizzaTreatment } from "types";

const PizzaList = ({
  pizzas,
}: {
  pizzas: PizzaTreatment[];
}) => {
  return (
    <div className="flex flex-auto justify-center">
      <table className="table-auto text-xl">
        <thead className="justify-between">
          <tr className="bg-gray-800 border-4 border-gray-800">
            <th className="px-16 py-2">
              <span className="text-white">Message</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-white">Statut</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {pizzas.map((pizza) => (
            <tr key={pizza.message} className="bg-gray-400 border-4 border-gray-400">
              <td>
                <span className="text-center ml-2">{pizza.message}</span>
              </td>
              <td className="px-16 py-2">{pizza.succes ? "Done" : "Not done"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PizzaList;
