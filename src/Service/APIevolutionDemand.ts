function APIevolutionDemand({ geo_limit, geo_ids }) {
  const ENDPOINT = "https://apidatos.ree.es/es/datos/demanda/evolucion/";

  const params = new URLSearchParams();
  params.append("start_date", "2021-11-10T00:00");
  params.append("end_date", "2021-11-10T23:59");
  params.append("time_trunc", "day");
  params.append("geo_trunc", "electric_system");
  params.append("geo_limit", geo_limit);
  params.append("geo_ids", geo_ids);
  params.append("cached", "true");
  return fetch(ENDPOINT + "?" + params.toString())
    .then((response) => response.json())
    .then((response) => {
      debugger;
      return response.included[0].attributes.values[0].value as number;
    });
}

export { APIevolutionDemand };
