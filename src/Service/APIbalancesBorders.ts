function APIbalancesBorders(startDay, endDay) {
  const ENDPOINT =
    "https://apidatos.ree.es/es/datos/intercambios/frontera-programados/";
  const params = new URLSearchParams();
  params.append("start_date", startDay);
  params.append("end_date", endDay);
  params.append("time_trunc", "day");
  params.append("cached", "true");

  return fetch(ENDPOINT + "?" + params.toString())
    .then((response) => response.json())
    .then((response) => {
      const arrayBalances = response.included.map((balance) => {
        return balance.attributes.values[0].value as number;
      });
      const arrayPercentages = response.included.map((balance) => {
        return balance.attributes.values[0].percentage as number;
      });
      return {
        valueExport: arrayBalances[0] as number,
        valueImport: arrayBalances[1] as number,
        valueBalance: arrayBalances[2] as number,
        percentageExport: (arrayPercentages[0] * 100) as number,
        percentageImport: (arrayPercentages[1] * 100) as number,
        percentageBalance: (arrayPercentages[2] * 100) as number,
      };
    });
}

export { APIbalancesBorders };
