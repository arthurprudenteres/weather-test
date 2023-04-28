import { FaSyncAlt } from "react-icons/fa";
import { getData } from "./api/station";
import { useState,useEffect } from "react";




export const Main = () => {
  // Importar dados do servidor
  const [temperatura, setTemperatura] = useState("Off");
  const [umidade, setUmidade] = useState("Off");
  const [vento, setVento] = useState("Off");
  const [pluviometro, setPluviometro] = useState("Off");
  const [tempo, setTempo] = useState("Off");
  const [maxtemp, setMaxtemp] = useState("Off");
  const [mintemp, setMintemp] = useState("Off");

  getData().then((data) => {
    setTemperatura(data.temperatura + "°C");
    setUmidade(data.umidade + "%");
    setVento(data.vento + "km/h");
    setPluviometro(data.nivel + "mm");
    if (data.tempo === "1") {
      setTempo("Limpo");
    } else setTempo("Chuvoso")
    setMaxtemp(data.maxtemp + "°C");
    setMintemp(data.mintemp + "°C");
  })
  
  return (
    <div className="max-w-7xl mx-auto my-5 px-4 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[30% 27.5% 38%] gap-8">
        <div className="bg-white rounded-2xl shadow-lg">
          <div className="text-center font-bold text-blue-600 p-5 flex flex-col content-between h-full gap-6">
            <div className="flex justify-end">
              <FaSyncAlt />
            </div>
            {/* LLocalização atual */}
            <h1 className="text-4xl">Ipameri</h1>
            {/* Temperatura atual */}
            <h1 className="text-9xl">
              {temperatura}
            </h1>
            {/* Clima atual */}
            <h1 className="text-4xl">{tempo}</h1>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg">
          <div className="grid grid-cols-2 h-full p-2">
            <div className="py-5 pl-8 flex flex-col justify-between h-full">
              {[
                "Temperatura",
                "Umidade",
                "Vento",
                "Chuva",
                "Max Temp.",
                "Min Temp.",
              ].map((e, i) => (
                <p key={i} className="text-blue-600 font-semibold text-lg">
                  {e}
                </p>
              ))}
            </div>
            <div className="rounded-2xl bg-blue-600 py-5 pl-8 flex flex-col justify-between h-full">
              {/* Buscar dados com fetch */}
            {[
                temperatura,
                umidade,
                vento,
                pluviometro,
                maxtemp,
                mintemp,
              ].map((e, i) => (
                <p key={i} className="text-white font-semibold text-lg">
                  {e}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-2 shadow-lg">teste</div>
      </div>

      <div className="grid mt-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-5"></div>
      <div className="tagLine">
        <p className="text-center mt-10">Forecast</p>
      </div>
    </div>
  );
};
