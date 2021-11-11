import { useEffect, useState } from "react";
import { format } from "date-fns";
import { APIevolutionDemand } from "../../Service/APIevolutionDemand";
import "./EvolutionDemand.scss";

function EvolutionDemand() {
  const [evolutionDemandPeninsular, setEvolutionDemandPeninsular] = useState(0);
  const [evolutionDemandCanarias, setEvolutionDemandCanarias] = useState(0);
  const [evolutionDemandBaleares, setEvolutionDemandBaleares] = useState(0);
  const [evolutionDemandMelilla, setEvolutionDemandMelilla] = useState(0);
  const [evolutionDemandCeuta, setEvolutionDemandCeuta] = useState(0);

  const startDay = format(new Date(), "yyyy-MM-dd") + "T00:00";
  const endDay = format(new Date(), "yyyy-MM-dd") + "T23:59";
  const currentDay = format(new Date(), "dd/MM/yyyy");
  useEffect(() => {
    APIevolutionDemand({
      geo_limit: "peninsular",
      geo_ids: "8741",
      start_date: startDay,
      end_date: endDay,
    }).then((num) => setEvolutionDemandPeninsular(num));
    APIevolutionDemand({
      geo_limit: "canarias",
      geo_ids: "8742",
      start_date: startDay,
      end_date: endDay,
    }).then((num) => setEvolutionDemandCanarias(num));
    APIevolutionDemand({
      geo_limit: "baleares",
      geo_ids: "8743",
      start_date: startDay,
      end_date: endDay,
    }).then((num) => setEvolutionDemandBaleares(num));
    APIevolutionDemand({
      geo_limit: "ceuta",
      geo_ids: "8744",
      start_date: startDay,
      end_date: endDay,
    }).then((num) => setEvolutionDemandCeuta(num));
    APIevolutionDemand({
      geo_limit: "melilla",
      geo_ids: "8745",
      start_date: startDay,
      end_date: endDay,
    }).then((num) => setEvolutionDemandMelilla(num));
  }, []);

  return (
    <section className="evolutionDemand">
      <h3 className="evolutionDemand__title">Evolucion de la demanda</h3>
      <p className="evolutionDemand__date">{currentDay}</p>
      <article>
        <div className="evolutionDemand__dataContainer">
          <h4 className="evolutionDemand__dataTitle">Peninsular</h4>
          <p className="evolutionDemand__regionalData">
            {Math.round(evolutionDemandPeninsular).toLocaleString("es")}
            <span className="evolutionDemand__regionalDataUnit">MWh</span>
          </p>
        </div>
        <div className="evolutionDemand__dataContainer">
          <h4 className="evolutionDemand__dataTitle">Baleares</h4>
          <p className="evolutionDemand__regionalData">
            {Math.round(evolutionDemandBaleares).toLocaleString("es")}
            <span className="evolutionDemand__regionalDataUnit">MWh</span>
          </p>
        </div>
        <div className="evolutionDemand__dataContainer">
          <h4 className="evolutionDemand__dataTitle">Canarias</h4>
          <p className="evolutionDemand__regionalData">
            {Math.round(evolutionDemandCanarias).toLocaleString("es")}
            <span className="evolutionDemand__regionalDataUnit">MWh</span>
          </p>
        </div>
        <div className="evolutionDemand__dataContainer">
          <h4 className="evolutionDemand__dataTitle">Ceuta</h4>
          <p className="evolutionDemand__regionalData">
            {Math.round(evolutionDemandCeuta).toLocaleString("es")}
            <span className="evolutionDemand__regionalDataUnit">MWh</span>
          </p>
        </div>
        <div className="evolutionDemand__dataContainer">
          <h4 className="evolutionDemand__dataTitle">Melilla</h4>
          <p className="evolutionDemand__regionalData">
            {Math.round(evolutionDemandMelilla).toLocaleString("es")}
            <span className="evolutionDemand__regionalDataUnit">MWh</span>
          </p>
        </div>
      </article>
    </section>
  );
}

export { EvolutionDemand };
