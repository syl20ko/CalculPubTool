import React, { useState, useEffect } from "react";
import VosInformations from "./components/VosInformations";
import SeuilRentabilite from "./components/SeuilRentabilite";
import ObjectifsPublicitaires from "./components/ObjectifsPublicitaires";
import BudgetPublicitaire from "./components/BudgetPublicitaire";
import CPC from "./components/CPC";
import CPA from "./components/CPA";

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
  // Dans CalculateurPub, lors du calcul de tauxMargeReel
  // Calculs pour enchérir manuellement
  const visiteursParVente = 100 / tauxConversion;
  const cpcMax = panierMoyen / visiteursParVente;
  const cpcFinal = cpcMax * (tauxCoutPublicitaire / 100);

  return (
    <div>
      <form>
        <VosInformations
          panierMoyen={panierMoyen}
          setPanierMoyen={setPanierMoyen}
          gain={gain}
          handleGainChange={handleGainChange}
          tauxDeMarge={tauxDeMarge}
          handleInputChange={handleInputChange}
          setTauxDeMarge={setTauxDeMarge}
        />
        <SeuilRentabilite
          tauxDeMarge={tauxDeMarge}
          roasLimit={roasLimit}
          roasLimitPercent={roasLimitPercent}
          gain={gain}
          panierMoyen={panierMoyen}
        />
        <ObjectifsPublicitaires
          profitSouhaite={profitSouhaite}
          setProfitSouhaite={setProfitSouhaite}
          tauxCoutPublicitaire={tauxCoutPublicitaire}
          setTauxCoutPublicitaire={setTauxCoutPublicitaire}
          tauxMargeReel={tauxMargeReel.toFixed(2)}
          gainReel={gainReel.toFixed(2)}
          ventesNecessaires={ventesNecessaires.toFixed(2)}
        />
        <BudgetPublicitaire
          ventesNecessaires={ventesNecessaires}
          panierMoyen={panierMoyen}
          caResultant={caResultant}
          tauxCoutPublicitaire={tauxCoutPublicitaire}
          budgetAllouePub={budgetAllouePub}
        />
        <h2>
          <u>Définir ses enchères</u>
        </h2>
        <CPC
          tauxConversion={tauxConversion}
          setTauxConversion={setTauxConversion}
          panierMoyen={panierMoyen}
          tauxCoutPublicitaire={tauxCoutPublicitaire}
        />

<CPA
          panierMoyen={panierMoyen}
          tauxCoutPublicitaire={tauxCoutPublicitaire}
        />
     
      </form>
    </div>
  );
}

export default CalculateurPub;
