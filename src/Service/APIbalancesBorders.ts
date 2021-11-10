function APIbalancesBorders() {
  const ENDPOINT =
    "https://apidatos.ree.es/es/datos/intercambios/frontera-programados/";
  const params = new URLSearchParams();
  params.append("start_date", "2021-11-10T00:00");
  params.append("end_date", "2021-11-10T22:00");
  params.append("time_trunc", "day");
  params.append("cached", "true");

  return fetch(ENDPOINT + "?" + params.toString())
    .then((response) => response.json())
    .then((response) => {
      const arrayBalances = response.included.map((balance) => {
        return balance.attributes.values[0].value as number;
      });
      return {
        valueExport: arrayBalances[0] as number,
        valueImport: arrayBalances[1] as number,
        valueBalance: arrayBalances[2] as number,
      };
    });
}

export { APIbalancesBorders };
