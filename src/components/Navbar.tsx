import { HiLocationMarker } from "react-icons/hi";
import { useState } from "react";

function Navbar() {
  const [city, setCity] = useState("");

  return (
    <div className="bg-blue-200 p-4 flex items-center justify-center space-x-4">
      <div className="flex items-center">
        <input
          className="py-2 px-4 rounded-l-2xl"
          onInput={(e) => { setCity(e.target.value) }}
          type="text"
          value={city}
          placeholder="Cidade"
        />
        <button className="py-2 px-4 bg-blue-600 text-white rounded-r-2xl">
          Procurar
        </button>
      </div>
      <button className="bg-blue-600 flex items-center space-x-2 rounded-2xl py-2 px-4">
        <HiLocationMarker size={25} color="white" className="inline-block" />
        <p className="text-white">Sua localização atual</p>
      </button>
    </div>
  );
}

export default Navbar;
