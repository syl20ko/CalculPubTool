import React, { useState, useEffect } from "react";
import VosInformations from "./components/VosInformations";
import SeuilRentabilite from "./components/SeuilRentabilite";
import ObjectifsPublicitaires from "./components/ObjectifsPublicitaires";
import BudgetPublicitaire from "./components/BudgetPublicitaire";
import CPC from "./components/CPC";
import CPA from "./components/CPA";
import HeaderTitle from "./components/HeaderTitle";
import './App.css';


function CalculateurPub() {
  const [panierMoyen, setPanierMoyen] = useState(100);
  const [tauxDeMarge, setTauxDeMarge] = useState(50);
  const [tauxCoutPublicitaire, setTauxCoutPublicitaire] = useState(20);
  const [profitSouhaite, setProfitSouhaite] = useState("");
  const [gain, setGain] = useState(""); // Initialiser gain comme chaîne vide pour le calcul initial
  const [tauxConversion, setTauxConversion] = useState(2); // Nouveau

  useEffect(() => {
    // Mise à jour initiale du gain basée sur le panier moyen et le taux de marge par défaut
    const gainInitial = panierMoyen * (tauxDeMarge / 100);
    setGain(gainInitial.toFixed(2));
  }, [panierMoyen, tauxDeMarge]);

  useEffect(() => {
    const caCalcule =
      panierMoyen < 500
        ? 1000
        : panierMoyen >= 500 && panierMoyen < 5000
        ? 10000
        : 10000;
    setProfitSouhaite(caCalcule.toString());
  }, [panierMoyen]);

  const handleInputChange = (setter) => (e) => {
    const value = Math.max(Number(e.target.value), 0);
    setter(value);
  };

  const handleGainChange = (e) => {
    const newGain = e.target.value;
    setGain(newGain);

    // Recalculer le taux de marge basé sur le nouveau gain et le panier moyen
    const newTauxDeMarge = (newGain / panierMoyen) * 100;
    setTauxDeMarge(newTauxDeMarge);
  };

  // Calculs
  const tauxMargeReelCalcule = Math.max(tauxDeMarge - tauxCoutPublicitaire, 0);

  const tauxMargeReel = Number(tauxMargeReelCalcule.toFixed(2));
  const gainReel = panierMoyen * (tauxMargeReel / 100);
  const ventesNecessaires =
    profitSouhaite && gainReel ? Number(profitSouhaite) / gainReel : 0;
  const caResultant = ventesNecessaires * panierMoyen;
  const budgetAllouePub = caResultant * (tauxCoutPublicitaire / 100);

  // Pour éviter la division par zéro dans le calcul du ROAS
  const roasLimit = tauxDeMarge ? ((1 / tauxDeMarge) * 100).toFixed(2) : "N/A";
  const roasLimitPercent = tauxDeMarge
    ? Math.round((1 / tauxDeMarge) * 100 * 100)
    : "N/A";

  return (
    <>
      <HeaderTitle />
      <div className="container mt-4 mb-4">
        <form>
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6">
                  <VosInformations
                    panierMoyen={panierMoyen}
                    setPanierMoyen={setPanierMoyen}
                    gain={gain}
                    handleGainChange={handleGainChange}
                    tauxDeMarge={tauxDeMarge}
                    handleInputChange={handleInputChange}
                    setTauxDeMarge={setTauxDeMarge}
                  />
                </div>
                <div className="col-md-6">
                  <SeuilRentabilite
                    tauxDeMarge={tauxDeMarge}
                    roasLimit={roasLimit}
                    roasLimitPercent={roasLimitPercent}
                    gain={gain}
                    panierMoyen={panierMoyen}
                  />
                </div>
                <div className="col-md-6">
                  <ObjectifsPublicitaires
                    profitSouhaite={profitSouhaite}
                    setProfitSouhaite={setProfitSouhaite}
                    tauxCoutPublicitaire={tauxCoutPublicitaire}
                    setTauxCoutPublicitaire={setTauxCoutPublicitaire}
                    tauxMargeReel={tauxMargeReel.toFixed(2)}
                    gainReel={gainReel.toFixed(2)}
                    ventesNecessaires={ventesNecessaires.toFixed(2)}
                  />
                </div>
                <div className="col-md-6">
                  <BudgetPublicitaire
                    ventesNecessaires={ventesNecessaires}
                    panierMoyen={panierMoyen}
                    caResultant={caResultant}
                    tauxCoutPublicitaire={tauxCoutPublicitaire}
                    budgetAllouePub={budgetAllouePub}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mt-2">
                <div className="card-header text-center">
                  <h2 style={{ color: "#1F3164" }}>Définir ses enchères</h2>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <CPC
                        tauxConversion={tauxConversion}
                        setTauxConversion={setTauxConversion}
                        panierMoyen={panierMoyen}
                        tauxCoutPublicitaire={tauxCoutPublicitaire}
                      />
                    </div>
                    <div className="col-md-6">
                      <CPA
                        panierMoyen={panierMoyen}
                        tauxCoutPublicitaire={tauxCoutPublicitaire}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CalculateurPub;
