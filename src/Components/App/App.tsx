import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Generation } from "../Generation/Generation";
import { InstalledPotency } from "../InstalledPotency/InstalledPotency";
import { RealTimeData } from "../RealTimeData/RealTimeData";
import { EvolutionDemand } from "../EvolutionDemand/EvolutionDemand";
import { BalancesBorders } from "../BalancesBorders/BalancesBorders";
import { EvolutionPVPC } from "../EvolutionPVPC/EvolutionPVPC";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <h1 className="main__title">Datos de la Red Eléctrica al día</h1>
        <div className="main__container">
          <Generation />
          <InstalledPotency />
          <RealTimeData />
          <EvolutionDemand />
          <BalancesBorders />
          <EvolutionPVPC />
        </div>
      </main>
      <Footer />
    </>
  );
}

export { App };
