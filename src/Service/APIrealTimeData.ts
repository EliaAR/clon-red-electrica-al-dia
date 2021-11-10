function APIrealTimeData() {
  const ENDPOINT =
    "https://apidatos.ree.es/es/datos/demanda/demanda-tiempo-real/";
  const params = new URLSearchParams();
  params.append("start_date", "2021-11-09T00:00");
  params.append("end_date", "2021-11-10T00:00");
  params.append("time_trunc", "hour");

  return fetch(ENDPOINT + "?" + params.toString())
    .then((response) => response.json())
    .then((response) => {
      const arrayRealValue: number[] =
        response.included[0].attributes.values.map(
          ({ value }: { value: number }) => {
            return value;
          }
        );
      const arrayProgrammedValue: number[] =
        response.included[1].attributes.values.map(
          ({ value }: { value: number }) => {
            return value;
          }
        );
      const arrayExpectedValue: number[] =
        response.included[2].attributes.values.map(
          ({ value }: { value: number }) => {
            return value;
          }
        );
      return { arrayRealValue, arrayProgrammedValue, arrayExpectedValue };
    });
}

export { APIrealTimeData };
