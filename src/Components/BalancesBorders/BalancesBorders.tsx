import { useEffect, useState } from "react";
import { format } from "date-fns";
import { APIbalancesBorders } from "../../Service/APIbalancesBorders";
import "./BalancesBorders.scss";

function BalancesBorders() {
  const [valueExport, setValueExport] = useState(0);
  const [valueImport, setValueImport] = useState(0);
  const [valueBalance, setValueBalance] = useState(0);
  const [percentageExport, setPercentageExport] = useState(0);
  const [percentageImport, setPercentageImport] = useState(0);

  const startDay = format(new Date(), "yyyy-MM-dd") + "T00:00";
  const endDay = format(new Date(), "yyyy-MM-dd") + "T22:00";
  const currentDay = format(new Date(), "dd/MM/yyyy");
  const maxExport = (valueExport * 100) / percentageExport;
  const maxImport = (valueImport * 100) / percentageImport;

  useEffect(() => {
    APIbalancesBorders(startDay, endDay).then((data) => {
      setValueExport(data.valueExport);
      setValueImport(data.valueImport);
      setValueBalance(data.valueBalance);
      setPercentageExport(data.percentageExport);
      setPercentageImport(data.percentageImport);
    });
  });

  return (
    <section className="balances">
      <h3 className="balances__title">Saldos por fronteras - Programado</h3>
      <p className="balances__date">{currentDay}</p>
      <div className="balances__programmed">
        <article className="balances__data">
          <p className="balances__number">
            {Math.round(valueBalance / 1000)} GWh{" "}
          </p>
          <p> Saldo Intercambios Programados</p>
        </article>
      </div>
      <div className="balances__impExp">
        <article className="balances__imp">
          <article className="balances__data">
            <p className="balances__number">
              {Math.round(valueExport / 1000)} GWh{" "}
            </p>
            <p className="balances__paragraph">Exportación</p>
          </article>
          <meter
            max={Math.abs(maxExport)}
            value={Math.abs(valueExport)}
            className="balances__bar"
          ></meter>
        </article>
        <article className="balances__exp">
          <article className="balances__data">
            <p className="balances__number">
              {Math.round(valueImport / 1000)} GWh{" "}
            </p>
            <p className="balances__paragraph">Importación</p>
          </article>
          <meter
            max={maxImport}
            value={valueImport}
            className="balances__bar"
          ></meter>
        </article>
      </div>
    </section>
  );
}
export { BalancesBorders };
