function APIevolutionPVPC() {
  const ENDPOINT =
    "https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real/";

  const params = new URLSearchParams();
  params.append("start_date", "2021-11-10T00:00");
  params.append("end_date", "2021-11-10T23:59");
  params.append("time_trunc", "hour");
  params.append("cached", "true");

  return fetch(ENDPOINT + "?" + params.toString())
    .then((response) => response.json())
    .then((response) => {
      const arrayPVPC: number[] = response.included[0].attributes.values.map(
        ({ value }) => {
          return value;
        }
      );
      const arraySpot: number[] = response.included[1].attributes.values.map(
        ({ value }) => {
          return value;
        }
      );
      return { arrayPVPC, arraySpot };
    });
}

export { APIevolutionPVPC };
