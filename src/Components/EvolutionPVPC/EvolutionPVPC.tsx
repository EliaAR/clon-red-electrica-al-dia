import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { format, subDays, addDays } from "date-fns";
import { APIevolutionPVPC } from "../../Service/APIevolutionPVPC";
import "./EvolutionPVPC.scss";

function EvolutionPVPC() {
  const [data, setData] = useState<{
    arrayPVPC: number[];
    arraySpot: number[];
  }>();

  const startDay = format(new Date(), "yyyy-MM-dd") + "T00:00";
  const endDay = format(new Date(), "yyyy-MM-dd") + "T23:59";
  const currentDay = format(new Date(), "dd/MM/yyyy");

  useEffect(() => {
    APIevolutionPVPC(startDay, endDay).then((data) => setData(data));
  }, []);

  return (
    <section className="evolutionPVPC">
      <h3 className="evolutionPVPC__title">
        Evolucion del PVPC frente al precio del mercado diario
      </h3>
      <p className="evolutionPVPC__date">{currentDay}</p>
      {data ? (
        <Chart
          series={[
            { name: "PVPC (€/MWh)", data: data.arrayPVPC, type: "line" },
            {
              name: "Precio mercado spot (€/MWh)",
              data: data.arraySpot,
              type: "line",
            },
          ]}
          options={{
            chart: {
              width: "400px",
            },
            yaxis: {
              title: {
                text: "€/MWh",
                style: {
                  color: "#111111",
                },
              },
            },
          }}
        />
      ) : null}
    </section>
  );
}

export { EvolutionPVPC };
