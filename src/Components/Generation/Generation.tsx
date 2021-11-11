import { useEffect, useState } from "react";
import { format } from "date-fns";
import {
  APInationalGenerationEvolutionNoEmissions,
  APInationalGenerationEvolutionRenewable,
  APInationalGenerationMaximumNoEmissions,
  APInationalGenerationMaximumRenewable,
} from "../../Service/APInationalGeneration";
import "./Generation.scss";

function Generation() {
  const [generationValueRenewable, setGenerationValueRenewable] = useState(0);
  const [generationPercentageRenewable, setGenerationpercentageRenewable] =
    useState(0);
  const [generationValueNoEmission, setGenerationValueNoEmission] = useState(0);
  const [generationPercentageNoEmission, setGenerationpercentageNoEmission] =
    useState(0);
  const [maximumValueRenewable, setMaximumValueRenewable] = useState(0);
  const [maximumValueNoEmission, setMaximumValueNoEmission] = useState(0);
  const [maximumPercentageRenewable, setMaximumPercentageRenewable] =
    useState(0);
  const [maximumPercentageNoEmission, setMaximumPercentageNoEmission] =
    useState(0);
  const [maximumDayRenewable, setMaximumDayRenewable] = useState("");
  const [maximumDayNoEmission, setMaximumDayNoEmission] = useState("");

  const startDay = format(new Date(), "yyyy-MM-dd") + "T00:00";
  const endDay = format(new Date(), "yyyy-MM-dd") + "T23:59";
  const currentDay = format(new Date(), "dd/MM/yyyy");
  const maxGenerationRenewable =
    (generationValueRenewable * 100) / generationPercentageRenewable;
  const maxGenerationNoEmission =
    (generationValueNoEmission * 100) / generationPercentageNoEmission;
  const maxMaximumRenewable =
    (maximumValueRenewable * 100) / maximumPercentageRenewable;
  const maxMaximumNoEmission =
    (maximumValueNoEmission * 100) / maximumPercentageNoEmission;

  useEffect(() => {
    APInationalGenerationEvolutionRenewable(startDay, endDay).then((data) => {
      setGenerationValueRenewable(data.value);
      setGenerationpercentageRenewable(data.percentage);
    });
    APInationalGenerationEvolutionNoEmissions(startDay, endDay).then((data) => {
      setGenerationValueNoEmission(data.value);
      setGenerationpercentageNoEmission(data.percentage);
    });
    APInationalGenerationMaximumRenewable().then((data) => {
      setMaximumValueRenewable(data.value);
      setMaximumPercentageRenewable(data.percentage);
      setMaximumDayRenewable(data.dayMax);
    });
    APInationalGenerationMaximumNoEmissions().then((data) => {
      setMaximumValueNoEmission(data.value);
      setMaximumPercentageNoEmission(data.percentage);
      setMaximumDayNoEmission(data.dayMax);
    });
  }, []);

  return (
    <section>
      <h3>Generación Nacional</h3>
      <p>{currentDay}</p>
      <article>
        <h4>Generación Renovable</h4>
        <p>{Math.round(generationPercentageRenewable)}%</p>
        <p>{(generationValueRenewable / 1000).toFixed(1)}</p>
        <form>
          <label htmlFor="evolutionRenewable">Día en curso: {currentDay}</label>
          <meter
            id="evolutionRenewable"
            max={maxGenerationRenewable}
            value={generationValueRenewable}
          ></meter>
          <label htmlFor="maximumRenewable">
            Máximo histórico:{maximumDayRenewable}
          </label>
          <meter
            id="maximumRenewable"
            max={maxMaximumRenewable}
            value={maximumValueRenewable}
          ></meter>
        </form>
      </article>
      <article>
        <h4>Generación Libre de Emisiones</h4>
        <p>{Math.round(generationPercentageNoEmission)}%</p>
        <p>{(generationValueNoEmission / 1000).toFixed(1)}</p>
        <form>
          <label htmlFor="evolutionNoEmission">
            Día en curso: {currentDay}
          </label>
          <meter
            id="evolutionNoEmission"
            max={maxGenerationNoEmission}
            value={generationValueNoEmission}
          ></meter>
          <label htmlFor="maximumNoEmission">
            Máximo histórico:{maximumDayNoEmission}
          </label>
          <meter
            id="maximumNoEmission"
            max={maxMaximumNoEmission}
            value={maximumValueNoEmission}
          ></meter>
        </form>
      </article>
    </section>
  );
}

export { Generation };
