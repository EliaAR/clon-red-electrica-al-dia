import { useEffect, useState } from "react";
import { format } from "date-fns";
import {
  APIinstalledPotencyRenowable,
  APIistalledPotencyNoEmissions,
} from "../../Service/APIinstalledPotency";
import "./InstalledPotency.scss";

function InstalledPotency() {
  const [installedPotencyRenowableValue, setInstalledPotencyRenowableValue] =
    useState(0);
  const [
    installedPotencyRenowablePercentage,
    setInstalledPotencyRenowablePercentage,
  ] = useState(0);
  const [
    installedPotencyNoEmissionsValue,
    setInstalledPotencyNoEmissionsValue,
  ] = useState(0);
  const [
    installedPotencyNoEmissionsPercentage,
    setInstalledPotencyNoEmissionsPercentage,
  ] = useState(0);

  const startDay = format(new Date(), "yyyy-MM") + "-01T00:00";
  const endDay = format(new Date(), "yyyy-MM-dd") + "T23:59";
  const currentDay = format(new Date(), "dd/MM/yyyy");
  const maxPotencyRenewable =
    (installedPotencyRenowableValue * 100) /
    installedPotencyRenowablePercentage;
  const maxPotencyNoEmission =
    (installedPotencyNoEmissionsValue * 100) /
    installedPotencyNoEmissionsPercentage;

  useEffect(() => {
    APIinstalledPotencyRenowable(startDay, endDay).then((data) => {
      setInstalledPotencyRenowableValue(data.value);
      setInstalledPotencyRenowablePercentage(data.percentage);
    });
    APIistalledPotencyNoEmissions(startDay, endDay).then((data) => {
      setInstalledPotencyNoEmissionsValue(data.value);
      setInstalledPotencyNoEmissionsPercentage(data.percentage);
    });
  }, []);

  return (
    <section className="potency">
      <h3 className="potency__title">Potencia instalada - Nacional</h3>
      <p className="potency__date">{currentDay}</p>
      <article>
        <h4 className="potency__title2">Potencia Renovable</h4>
        <div className="potency__dataContainer">
          <p className="potency__percentage">
            {Math.round(installedPotencyRenowablePercentage)}%
          </p>
          <div className="potency__numberContainer">
            <label htmlFor="evolutionRenewable" className="potency__label">
              Mes en curso:
              <span className="potency__dateData">{currentDay}</span>
            </label>
            <div className="potency__barContainer">
              <meter
                id="evolutionRenewable"
                max={maxPotencyRenewable}
                value={installedPotencyRenowableValue}
                className="potency__data"
              ></meter>
              <p className="potency__number">
                {(installedPotencyRenowableValue / 1000).toFixed(1)} GWh
              </p>
            </div>
          </div>
        </div>
      </article>
      <article>
        <h4 className="potency__title2">Potencia Libre de Emisiones</h4>
        <div className="potency__dataContainer">
          <p className="potency__percentage">
            {Math.round(installedPotencyNoEmissionsPercentage)}%
          </p>
          <div>
            <label htmlFor="evolutionNoEmission" className="potency__label">
              Mes en curso:
              <span className="potency__dateData"> {currentDay}</span>
            </label>
            <div className="potency__barContainer">
              <meter
                id="evolutionNoEmission"
                max={maxPotencyNoEmission}
                value={installedPotencyNoEmissionsValue}
                className="potency__data"
              ></meter>
              <p className="potency__number">
                {(installedPotencyNoEmissionsValue / 1000).toFixed(1)} GWh
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export { InstalledPotency };
