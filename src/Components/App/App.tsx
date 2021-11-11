import { useEffect } from "react";
import { APIevolutionDemand } from "../../Service/APIevolutionDemand";
import { APIevolutionPVPC } from "../../Service/APIevolutionPVPC";
import { APIrealTimeData } from "../../Service/APIrealTimeData";
import { Header } from "../Header/Header";
import { Generation } from "../Generation/Generation";
import { InstalledPotency } from "../InstalledPotency/InstalledPotency";
import { EvolutionDemand } from "../EvolutionDemand/EvolutionDemand";
import { BalancesBorders } from "../BalancesBorders/BalancesBorders";
import "./App.scss";

function App() {
  useEffect(() => {
    // APIrealTimeData().then((data) => {
    //   console.log(data);
    // });
    // APIevolutionDemand({ geo_ids: "8741", geo_limit: "peninsular" }).then(
    //   (value) => console.log(value)
    // );
    // APIbalancesBorders().then((data) => console.log(data));
    // APIevolutionPVPC().then((data) => console.log(data));
    // APIinstalledPotencyRenovables().then((data) => console.log(data));
    // APIistalledPotencyNoEmissions().then((data) => console.log(data));
    // APInationalGenerationEvolutionRenewable().then((data) => console.log(data));
    // APInationalGenerationEvolutionNoEmissions().then((data) =>
    //   console.log(data)
    // );
    // APInationalGenerationMaximumRenewable().then((data) => console.log(data));
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Generation />
        <InstalledPotency />
        <EvolutionDemand />
        <BalancesBorders />
      </main>
    </>
  );
}

export { App };
