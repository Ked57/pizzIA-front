import React from "react";
import { FaPizzaSlice, FaHome, FaChartPie } from 'react-icons/fa';
import { Link } from "react-router-dom";

const App = () => {
  return (
    <nav className="flex flex-auto flex-row bg-gray-900 text-white">
      <img src="https://pizzia.s3.fr-par.scw.cloud/logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=SCWAV5NBXFK8A9XWJBDW%2F20210204%2Ffr-par%2Fs3%2Faws4_request&X-Amz-Date=20210204T143147Z&X-Amz-Expires=3581&X-Amz-Signature=1af6b67f402ec8492294f28436f447a44b9852640929c5c7f62f03a1a31368c3&X-Amz-SignedHeaders=host" className="m-4" width="30%" height="20%" />
      <ul className="flex flex-auto justify-center flex-row m-2">
        <li className="m-4">
          <Link to="/"><FaHome /></Link>
        </li>
        <li className="m-4 mr-28 ml-28">
          <Link to="/stats"><FaChartPie /></Link>
        </li>
        <li className="m-4">
          <Link to="/pizza"> <FaPizzaSlice /></Link>
        </li>
      </ul>
    </nav>
  );
};

export default App;
