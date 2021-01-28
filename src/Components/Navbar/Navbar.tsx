import React from "react";

const App = () => {
  return (
    <nav className="flex flex-auto flex-row bg-gray-800 text-white">
      <ul className="flex flex-auto justify-center flex-row m-2">
        <li className="m-2">
          <a href="/">Home |</a>
        </li>
        <li className="m-2">
          <a href="/stats"> Statistics </a>
        </li>
        <li className="m-2">
          <a href="/pizza">| Pizza</a>
        </li>
      </ul>
    </nav>
  );
};

export default App;
