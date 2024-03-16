import React from "react";

const SeuilRentabilit = ({
  tauxDeMarge,
  roasLimit,
  roasLimitPercent,
  gain,
  panierMoyen,
}) => {
  // Calculs supplémentaires si nécessaire
  const ventesMinimales = 100 / gain;
  const caMinimal = ventesMinimales * panierMoyen;

  return (
    <div className="card mt-2">
      <div className="card-header text-center">
        <h2 style={{ color: "#1F3164" }}>Seuil de Rentabilité</h2>
      </div>

      <div className="card-body">
        <p style={{ textAlign: "center",  color: "#E1432E" }}>
          Avec les données ci-dessous, vous ne perdez pas d'argent mais vous n'en
          gagnez pas non-plus.
        </p>
        <p style={{ textAlign: "center" }}>
          (Mémo : calcul rapide du ROAS LIMIT : 1 / {(tauxDeMarge).toFixed(2)}%)
        </p>
        <div className="alert alert-danger">
          <ul style={{ color: "#E1432E", fontWeight: "bold" }}>
            <li>
              {" "}
              ROAS LIMIT : {roasLimit} ({roasLimitPercent}%)
            </li>
            <li>
              {" "}
              Pour 100€ de pub, vous devez réaliser au moins{" "}
              {ventesMinimales.toFixed(2)} ventes
            </li>
            <li>
              {" "}
              CA minimal à réaliser pour 100€ de pub : {caMinimal.toFixed(2)}€
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SeuilRentabilit;
