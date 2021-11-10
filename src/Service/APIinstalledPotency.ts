function APIinstalledPotencyRenovables() {
  const ENDPOINT =
    "https://apidatos.ree.es/es/datos/generacion/potencia-evolucion-renovable-no-renovable/";

  const params = new URLSearchParams();
  params.append("start_date", "2021-11-01T00:00");
  params.append("end_date", "2021-11-10T23:59");
  params.append("time_trunc", "month");

  return fetch(ENDPOINT + "?" + params.toString())
    .then((response) => response.json())
    .then((response) => {
      return {
        value: response.included[0].attributes.values[0].value,
        percentage: response.included[0].attributes.values[0].percentage,
      } as { value: number; percentage: number };
    });
}

function APIistalledPotencyNoEmissions() {
  const ENDPOINT =
    "https://apidatos.ree.es/es/datos/generacion/potencia-total-evolucion-estructura-emisiones-asociadas/";

  const params = new URLSearchParams();
  params.append("start_date", "2021-11-01T00:00");
  params.append("end_date", "2021-11-10T23:59");
  params.append("time_trunc", "month");

  return fetch(ENDPOINT + "?" + params.toString())
    .then((response) => response.json())
    .then((response) => {
      return {
        value: response.included[0].attributes.values[0].value,
        percentage: response.included[0].attributes.values[0].percentage,
      } as { value: number; percentage: number };
    });
}

export { APIinstalledPotencyRenovables, APIistalledPotencyNoEmissions };
