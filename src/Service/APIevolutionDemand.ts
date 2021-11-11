interface Params {
  geo_limit:
    | "peninsular"
    | "canarias"
    | "baleares"
    | "ceuta"
    | "melilla"
    | "ccaa";
  geo_ids: string;
  start_date: string;
  end_date: string;
}

function APIevolutionDemand({
  geo_limit,
  geo_ids,
  start_date,
  end_date,
}: Params) {
  const ENDPOINT = "https://apidatos.ree.es/es/datos/demanda/evolucion/";

  const params = new URLSearchParams();
  params.append("start_date", start_date);
  params.append("end_date", end_date);
  params.append("time_trunc", "day");
  params.append("geo_trunc", "electric_system");
  params.append("geo_limit", geo_limit);
  params.append("geo_ids", geo_ids);
  params.append("cached", "true");
  return fetch(ENDPOINT + "?" + params.toString())
    .then((response) => response.json())
    .then((response) => {
      return response.included[0].attributes.values[0].value as number;
    });
}

export { APIevolutionDemand };
