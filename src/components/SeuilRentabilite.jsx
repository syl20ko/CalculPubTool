import React from "react";

const SeuilRentabilit = ({
  tauxDeMarge,
  roasLimit,
  roasLimitPercent,
  gain,
  panierMoyen,
  tauxConversion
}) => {
  // Calculs supplémentaires si nécessaire
  const ventesMinimales = 100 / gain;
  const caMinimal = ventesMinimales * panierMoyen;

  return (
    <div className="card mt-2" data-label="Étape 2">
      <div className="card-header text-center">
         <h2 style={{ color: "#1F3164"}}>Seuil de Rentabilité</h2>
      </div>

      <div className="card-body">
        <p style={{ textAlign: "center",  color: "#E1432E" }}>
          Avec ces données, vous ne perdez pas d'argent mais vous n'en
          gagnez pas non-plus.
        </p>
        <p style={{ textAlign: "center", fontSize : '12px', fontStyle: 'italic' }}>
          (ROAS LIMIT = 1/{(tauxDeMarge).toFixed(2)}%)
        </p>
        <div className="alert alert-danger">
          <ul style={{ color: "#E1432E", fontWeight: "bold" }}>
            <li>
              {" "}
              ROAS LIMIT : <span style={{color : 'black'}}>{roasLimit} ({roasLimitPercent}%)</span>
            </li>
            <li>
              {" "}
              Pour <span style={{color : 'black'}}>100€ de pub</span>, vous devez réaliser au moins{" "}
              <span style={{color : 'black'}}>{ventesMinimales.toFixed(2)} ventes</span>
            </li>
            <li>
              {" "}
              CA minimal à réaliser pour <span style={{color : 'black'}}>100€ de pub</span> : <span  style={{color : 'black'}}>{caMinimal.toFixed(2)}€</span>
            </li>
            <li>
              Avec un taux de conversion de <span style={{color : 'black'}}>{tauxConversion}%</span>, vous pouvez payer un clic <span style={{color : 'black'}}>{(gain*(tauxConversion/100)).toFixed(2)}€</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SeuilRentabilit;
