function APInationalGenerationEvolutionRenewable() {
  const ENDPOINT =
    "https://apidatos.ree.es/es/datos/generacion/evolucion-renovable-no-renovable";

  const params = new URLSearchParams();
  params.append("start_date", "2021-11-10T00:00");
  params.append("end_date", "2021-11-10T23:59");
  params.append("time_trunc", "day");

  return fetch(ENDPOINT + "?" + params.toString())
    .then((response) => response.json())
    .then((response) => {
      return {
        value: response.included[0].attributes.values[0].value,
        percentage: response.included[0].attributes.values[0].percentage,
      } as { value: number; percentage: number };
    });
}

function APInationalGenerationEvolutionNoEmissions() {
  const ENDPOINT =
    "https://apidatos.ree.es/es/datos/generacion/evolucion-estructura-generacion-emisiones-asociadas";

  const params = new URLSearchParams();
  params.append("start_date", "2021-11-10T00:00");
  params.append("end_date", "2021-11-10T23:59");
  params.append("time_trunc", "day");

  return fetch(ENDPOINT + "?" + params.toString())
    .then((response) => response.json())
    .then((response) => {
      return {
        value: response.included[1].attributes.values[0].value,
        percentage: response.included[1].attributes.values[0].percentage,
      } as { value: number; percentage: number };
    });
}

function APInationalGenerationMaximumRenewable() {
  const ENDPOINT =
    "https://apidatos.ree.es/es/datos/generacion/maxima-renovable";
  const params = new URLSearchParams();
  params.append("start_date", "2021-11-10T00:00");
  params.append("end_date", "2021-11-10T23:59");
  params.append("time_trunc", "month");
  params.append("systemElectric", "nacional");

  return fetch(ENDPOINT + "?" + params.toString())
    .then((response) => response.json())
    .then((response) => {
      const maxWinter = response.included[0].attributes.maxValueWinter[0].value;
      const maxSummer = response.included[0].attributes.maxValueSummer[0].value;
      if (maxWinter > maxSummer) {
        return maxWinter as number;
      } else {
        return maxSummer as number;
      }
    });
}

function APInationalGenerationMaximumNoEmissions() {
  const ENDPOINT =
    "https://apidatos.ree.es/es/datos/generacion/maxima-sin-emisiones-historico";
  const params = new URLSearchParams();
  params.append("start_date", "2021-11-10T00:00");
  params.append("end_date", "2021-11-10T23:59");
  params.append("time_trunc", "month");
  params.append("systemElectric", "nacional");

  return fetch(ENDPOINT + "?" + params.toString())
    .then((response) => response.json())
    .then((response) => {
      return response.included[0].attributes.values[0].value as number;
    });
}

export {
  APInationalGenerationEvolutionRenewable,
  APInationalGenerationEvolutionNoEmissions,
  APInationalGenerationMaximumRenewable,
  APInationalGenerationMaximumNoEmissions,
};
