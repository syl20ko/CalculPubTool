import React from "react";

const CPC = ({
  tauxConversion,
  tauxCoutPublicitaire,
  gain
}) => {
  // Calcul du nombre de visiteurs nécessaires par vente
  const visiteursParVente = 100 / tauxConversion;

  // Calcul du point mort CPC
  const cpcMax = gain / visiteursParVente;

  // Calcul du CPC recommandé basé sur le taux de coût publicitaire
  const cpcFinal = cpcMax * (tauxCoutPublicitaire / 100);

  return (
    <div className="mb-5">
      <p>
        <h5 style={{ color: "#9b59b6" }}>A) CPC</h5>
        <small style={{ color: "#9b59b6" }}>Manuel</small>
      </p>
      <hr />
 
        <div className="card card-body">
          <p
            className="text-center"
            style={{ color: "black", fontWeight: "bold", fontSize: "30px" }}
          >
            {" "}
            {typeof visiteursParVente === "number"
              ? visiteursParVente.toFixed(0)
              : visiteursParVente}{" "}
          </p>
          <hr style={{ color: "black", fontWeight: "bold" }} />
          <p
            className="text-center"
            style={{ color: "black", fontWeight: "bold" }}
          >
            Nombre de visiteurs nécessaires par vente
          </p>
        </div>
        <div className="card card-body text-center mt-2">
          {" "}
          <p>
            <p> {typeof cpcMax === "number" ? cpcMax.toFixed(2) : cpcMax}€</p>
            <hr />
            Point mort CPC{" "}
          </p>
        </div>
        <div className="card card-body text-center mt-2">
          <p style={{ color: "black", fontWeight: "bold", fontSize: "30px" }}>
            {" "}
            {typeof cpcFinal === "number" ? cpcFinal.toFixed(2) : cpcFinal}€
          </p>
          <hr />
          <p>
            {" "}
            CPC recommandé basé sur le taux de coût publicitaire de{" "}
            {tauxCoutPublicitaire}%{" "}
          </p>{" "}
          <p></p>
        </div>
      </div>
  );
};

export default CPC;
