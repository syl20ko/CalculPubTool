import React, { useState, useEffect } from "react";

function CalculateurPub() {
  const [panierMoyen, setPanierMoyen] = useState(100);
  const [tauxDeMarge, setTauxDeMarge] = useState(50);
  const [tauxCoutPublicitaire, setTauxCoutPublicitaire] = useState(20);
  const [profitSouhaite, setProfitSouhaite] = useState("");
  const [gain, setGain] = useState(""); // Initialiser gain comme chaîne vide pour le calcul initial

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
  const tauxMargeReel = Math.max(tauxDeMarge - tauxCoutPublicitaire, 0); // Évite les valeurs négatives
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
    <div>
      <form>
        <h2>
          <u>Vos informations</u>
        </h2>
        <div>
          <p>
            <label>
              Panier Moyen d'une commande HT (€) :{" "}
              <input
                type="number"
                aria-label="Panier Moyen"
                value={panierMoyen}
                onChange={handleInputChange(setPanierMoyen)}
              />
            </label>
          </p>
        </div>
        <div>
          <p>
            {" "}
            <label>
              Bénéfices (€) :{" "}
              <input
                type="number" // Utiliser "text" pour permettre l'entrée de valeurs décimales
                value={gain}
                onChange={handleGainChange}
              />
            </label>
          </p>
        </div>
        <div>
          <p>
            {" "}
            <label>
              Taux de marge (%) :{" "}
              <input
                type="number"
                aria-label="Taux de marge en pourcentage"
                value={tauxDeMarge}
                onChange={handleInputChange(setTauxDeMarge)}
              />
            </label>
          </p>
        </div>

        <h2>
          <u>Point mort (seuil de rentabilité publicitaire) </u>
        </h2>
        <div>
          <p>
            Avec les données ci-dessous, vous ne perdez pas d'argent mais n'en
            gagnez pas non-plus.
          </p>
          <p>(Calcul rapide du ROAS LIMIT : 1 / {tauxDeMarge}%)</p>
          <p>
            ROAS LIMIT : {roasLimit} ({roasLimitPercent}%)
          </p>
          <p>
            Ventes Minimales à réaliser pour 100€ de pub :{" "}
            {(100 / gain).toFixed(2)} Ventes
          </p>
          <p>
            CA minimal à réaliser pour 100€ de pub :{" "}
            {((100 / gain).toFixed(2) * panierMoyen).toFixed(2)}€
          </p>
        </div>
        <h2>
          <u>Chiffrer ses objectifs publicitaires</u>
        </h2>
        <div>
          <p>
            {" "}
            <label>
              Bénéfices que vous souhaitez réaliser (€) :{" "}
              <input
                type="number"
                aria-label="Chiffre d'affaires souhaité"
                value={profitSouhaite}
                onChange={handleInputChange(setProfitSouhaite)}
              />
            </label>
          </p>
        </div>
        <div>
          <p>
            {" "}
            <label>
              Taux Coût Publicitaire (%):{" "}
              <input
                type="number"
                aria-label="Taux Coût Publicitaire en pourcentage"
                value={tauxCoutPublicitaire}
                onChange={handleInputChange(setTauxCoutPublicitaire)}
              />
            </label>{" "}
            (Si vous ne savez pas quoi mettre 20% - 25% est une bonne base)
          </p>
        </div>
        <div>
          <p>Taux Marge réel: {tauxMargeReel.toFixed(2)}%</p>
        </div>
        <div>
          <p>Bénéfices réel sur chaque vente: {gainReel.toFixed(2)}€</p>
        </div>

        <div>
          <p>
            {" "}
            Ventes nécessaires pour atteindre {profitSouhaite}€ de bénéfice:{" "}
            {ventesNecessaires.toFixed(2)} Ventes
          </p>
        </div>
        <div>
          <p>
            {" "}
            ROAS : {(100 / tauxCoutPublicitaire).toFixed(2)} (pour rappel le
            calcul du ROAS c'est 100 / Taux de coût pub)
          </p>

          <p> Soit ROAS : {(100 / tauxCoutPublicitaire).toFixed(2) * 100}%</p>

          <p>
            Soit 1€ investi rapporte {(100 / tauxCoutPublicitaire).toFixed(2)}€
          </p>
        </div>

        {/* Nouvelle section : Définir le budget */}
        <h2>
          <u>Définir le budget</u>
        </h2>
        <div>
          <p>
            {" "}
            {ventesNecessaires.toFixed(2)} Ventes nécessaires pour atteindre le
            bénéfice souhaité{" "}
          </p>
          <p>
            x {panierMoyen}€ Panier moyen = {caResultant.toFixed(2)}€ (CA)
          </p>
        </div>
        <div>
          <p>
            {" "}
            {caResultant.toFixed(2)}€ (CA) x {tauxCoutPublicitaire.toFixed(2)}% de Taux coût pub
          </p>
          <p>
            {" "}
            Budget alloué à la
            pub = {budgetAllouePub.toFixed(2)}€ 
          </p>{" "}
        </div>
      </form>
    </div>
  );
}

export default CalculateurPub;
