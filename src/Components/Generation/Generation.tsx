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
    <section className="generation">
      <h3 className="generation__title">Generación - Nacional</h3>
      <p className="generation__date">{currentDay}</p>
      <article>
        <h4 className="generation__title2">Generación Renovable</h4>
        <div className="generation__dataContainer">
          <p className="generation__percentage">
            {Math.round(generationPercentageRenewable)}%
          </p>
          <div className="generation__numberContainer">
            <label htmlFor="evolutionRenewable" className="generation__label">
              Día en curso:{" "}
              <span className="generation__dateData">{currentDay}</span>
            </label>
            <div className="generation__barContainer">
              <meter
                id="evolutionRenewable"
                max={maxGenerationRenewable}
                value={generationValueRenewable}
                className="generation__data"
              ></meter>
              <p className="generation__number">
                {(generationValueRenewable / 1000).toFixed(1)} GWh
              </p>
            </div>
            <label htmlFor="maximumRenewable" className="generation__label">
              Máximo histórico:{" "}
              <span className="generation__dateData">
                {maximumDayRenewable}
              </span>
            </label>
            <div className="generation__barContainer">
              <meter
                id="maximumRenewable"
                max={maxMaximumRenewable}
                value={maximumValueRenewable}
                className="generation__data"
              ></meter>
              <p className="generation__number">
                {(maximumValueRenewable / 1000).toFixed(1)} GWh
              </p>
            </div>
          </div>
        </div>
      </article>
      <article>
        <h4 className="generation__title2">Generación Libre de Emisiones</h4>
        <div className="generation__dataContainer">
          <p className="generation__percentage">
            {Math.round(generationPercentageNoEmission)}%
          </p>
          <div>
            <label htmlFor="evolutionNoEmission" className="generation__label">
              Día en curso:{" "}
              <span className="generation__dateData"> {currentDay}</span>
            </label>
            <div className="generation__barContainer">
              <meter
                id="evolutionNoEmission"
                max={maxGenerationNoEmission}
                value={generationValueNoEmission}
                className="generation__data"
              ></meter>
              <p className="generation__number">
                {(generationValueNoEmission / 1000).toFixed(1)} GWh
              </p>
            </div>
            <label htmlFor="maximumNoEmission" className="generation__label">
              Máximo histórico:{" "}
              <span className="generation__dateData">
                {maximumDayNoEmission}
              </span>
            </label>
            <div className="generation__barContainer">
              <meter
                id="maximumNoEmission"
                max={maxMaximumNoEmission}
                value={maximumValueNoEmission}
                className="generation__data"
              ></meter>
              <p className="generation__number">
                {(maximumValueNoEmission / 1000).toFixed(1)} GWh
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export { Generation };
