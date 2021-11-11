import { useEffect } from "react";
import { APIbalancesBorders } from "../../Service/APIbalancesBorders";
import { APIevolutionDemand } from "../../Service/APIevolutionDemand";
import { APIevolutionPVPC } from "../../Service/APIevolutionPVPC";
import {
  APIinstalledPotencyRenowable,
  APIistalledPotencyNoEmissions,
} from "../../Service/APIinstalledPotency";
import { APIrealTimeData } from "../../Service/APIrealTimeData";
import { Header } from "../Header/Header";
import { Generation } from "../Generation/Generation";
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
      <main>
        <Generation />
      </main>
    </>
  );
}

export { App };
