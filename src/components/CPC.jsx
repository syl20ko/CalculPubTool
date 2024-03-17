import React from "react";

const CPC = ({
  tauxConversion,
  setTauxConversion,
  panierMoyen,
  tauxCoutPublicitaire,
}) => {
  // Calcul du nombre de visiteurs nécessaires par vente
  const visiteursParVente = 100 / tauxConversion;

  // Calcul du point mort CPC
  const cpcMax = panierMoyen / visiteursParVente;

  // Calcul du CPC recommandé basé sur le taux de coût publicitaire
  const cpcFinal = cpcMax * (tauxCoutPublicitaire / 100);

  return (
    <div>
      <p>
        <h5 style={{ color: "#9b59b6" }}>A) CPC</h5>
        <small style={{ color: "#9b59b6" }}>Manuel</small>
      </p>
      <hr />
      <div>

        <br />
        <div
          style={{
            backgroundColor: "#27ae60",
            borderRadius: "5%",
            padding: "3px",
          }}
        >
          <p className="text-center" style={{ color: "white", fontWeight: "bold", fontSize: "30px" }}>
            {" "}
            {typeof visiteursParVente === "number"
              ? visiteursParVente.toFixed(0)
              : visiteursParVente}{" "}
          </p>
          <hr  style={{ color: "white", fontWeight: "bold" }} />
          <p
            className="text-center"
            style={{ color: "white", fontWeight: "bold" }}
          >
            Nombre de visiteurs nécessaires par vente
          </p>
        </div>
        <p>
          Point mort CPC :{" "}
          {typeof cpcMax === "number" ? cpcMax.toFixed(2) : cpcMax}€
        </p>
        <p>
          CPC recommandé basé sur le taux de coût publicitaire de{" "}
          {tauxCoutPublicitaire}% :{" "}
          {typeof cpcFinal === "number" ? cpcFinal.toFixed(2) : cpcFinal}€
        </p>
      </div>
    </div>
  );
};

export default CPC;
