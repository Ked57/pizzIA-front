import React from "react";

const App: React.FC = () => {
  return (
    <nav className="flex flex-auto flex-row">
      <ul className="flex flex-auto flex-row m-2">
        <li className="m-2">
          <a href="/">Home</a>
        </li>
        <li className="m-2">
          <a href="/stats">Statistics</a>
        </li>
        <li className="m-2">
          <a href="/pizza">Pizza</a>
        </li>
      </ul>
    </nav>
  );
};

export default App;
