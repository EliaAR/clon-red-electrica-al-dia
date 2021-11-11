import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { format, subDays, addDays } from "date-fns";
import { APIrealTimeData } from "../../Service/APIrealTimeData";
import "./RealTimeData.scss";

function RealTimeData() {
  const [data, setData] = useState<{
    arrayRealValue: number[];
    arrayProgrammedValue: number[];
    arrayExpectedValue: number[];
  }>();

  const startDay = format(subDays(new Date(), 1), "yyyy-MM-dd") + "T21:00";
  const endDay = format(addDays(new Date(), 1), "yyyy-MM-dd") + "T03:00";
  const currentDay = format(new Date(), "dd/MM/yyyy");

  useEffect(() => {
    APIrealTimeData(startDay, endDay).then((data) => setData(data));
  }, []);

  return (
    <section className="realTimeData">
      <h3 className="realTimeData__title">
        Demanda de energia en tiempo real - peninsular
      </h3>
      <p className="realTimeData__date">{currentDay}</p>
      {data ? (
        <Chart
          series={[
            { name: "Demanda real", data: data.arrayRealValue, type: "line" },
            {
              name: "Demanda programada",
              data: data.arrayProgrammedValue,
              type: "line",
              stroke: {
                curve: "stepline",
              },
            },
            {
              name: "Demanda prevista",
              data: data.arrayExpectedValue,
              type: "line",
            },
          ]}
          options={{
            chart: {
              id: "real-demand",
            },
            xaxis: {
              tickPlacement: "between",
              categories: [
                21, 22, 23, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
                15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2, 3,
              ],
            },
          }}
        />
      ) : null}
    </section>
  );
}

export { RealTimeData };
