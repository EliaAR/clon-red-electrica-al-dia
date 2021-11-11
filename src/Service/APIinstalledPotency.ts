function APIinstalledPotencyRenowable(startDay, endDay) {
  const ENDPOINT =
    "https://apidatos.ree.es/es/datos/generacion/potencia-evolucion-renovable-no-renovable/";

  const params = new URLSearchParams();
  params.append("start_date", startDay);
  params.append("end_date", endDay);
  params.append("time_trunc", "month");

  return fetch(ENDPOINT + "?" + params.toString())
    .then((response) => response.json())
    .then((response) => {
      return {
        value: response.included[0].attributes.values[0].value,
        percentage: response.included[0].attributes.values[0].percentage * 100,
      } as { value: number; percentage: number };
    });
}

function APIistalledPotencyNoEmissions(startDay, endDay) {
  const ENDPOINT =
    "https://apidatos.ree.es/es/datos/generacion/potencia-total-evolucion-estructura-emisiones-asociadas/";

  const params = new URLSearchParams();
  params.append("start_date", startDay);
  params.append("end_date", endDay);
  params.append("time_trunc", "month");

  return fetch(ENDPOINT + "?" + params.toString())
    .then((response) => response.json())
    .then((response) => {
      return {
        value: response.included[0].attributes.values[0].value,
        percentage: response.included[0].attributes.values[0].percentage * 100,
      } as { value: number; percentage: number };
    });
}

export { APIinstalledPotencyRenowable, APIistalledPotencyNoEmissions };
