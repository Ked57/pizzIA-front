import React from "react";
import { FaPizzaSlice, FaHome, FaChartPie } from 'react-icons/fa';
import logo from "../../assets/logo.png";

const App = () => {
  return (
    <nav className="flex flex-auto flex-row bg-gray-900 text-white">
      <img src={logo} className="m-4" width="30%" height="20%" />
      <ul className="flex flex-auto justify-center flex-row m-2">
        <li className="m-4">
          <a href="/"><FaHome /></a>
        </li>
        <li className="m-4 mr-28 ml-28">
          <a href="/stats"><FaChartPie /></a>
        </li>
        <li className="m-4">
          <a href="/pizza"> <FaPizzaSlice /></a>
        </li>
      </ul>
    </nav>
  );
};

export default App;
