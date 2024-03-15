import React from 'react';

const SeuilRentabilit = ({ tauxDeMarge, roasLimit, roasLimitPercent, gain, panierMoyen }) => {
  // Calculs supplémentaires si nécessaire
  const ventesMinimales = 100 / gain;
  const caMinimal = ventesMinimales * panierMoyen;

  return (
    <div>
      <h2>
        <u>Point mort (seuil de rentabilité publicitaire)</u>
      </h2>
      <div>
        <p>
          Avec les données ci-dessous, vous ne perdez pas d'argent mais n'en gagnez pas non-plus.
        </p>
        <p>(Calcul rapide du ROAS LIMIT : 1 / {tauxDeMarge}%)</p>
        <p>
          ROAS LIMIT : {roasLimit} ({roasLimitPercent}%)
        </p>
        <p>
          Ventes Minimales à réaliser pour 100€ de pub :{" "}
          {ventesMinimales.toFixed(2)} Ventes
        </p>
        <p>
          CA minimal à réaliser pour 100€ de pub :{" "}
          {caMinimal.toFixed(2)}€
        </p>
      </div>
    </div>
  );
};


export default SeuilRentabilit;
