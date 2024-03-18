import React from "react";

const CPA = ({ panierMoyen, tauxCoutPublicitaire }) => {
  // Calcul du CPA cible basé sur le panier moyen et le taux de coût publicitaire
  const cpaCible = panierMoyen * (tauxCoutPublicitaire / 100);

  return (
    <div className="mb-5">
      <p>
        <h5 style={{ color: "#9b59b6" }}>B) CPA </h5>
        <small style={{ color: "#9b59b6" }}>Automatique</small>
      </p>
      <hr />
      <div className="card card-body">
        <p
          className="text-center"
          style={{ color: "black", fontWeight: "bold", fontSize: "30px" }}
        >
          {cpaCible.toFixed(2)}€
        </p>
        <hr />
        <p
          className="text-center"
          style={{ color: "black", fontWeight: "bold" }}
        >
          CPA cible
        </p>
      </div>
      <hr />
     
      <p>
        Stratégie d’enchères de type CPA cible (ou Maximiser les conversions
        avec un objectif de CPA).
      </p>
      <p>
        Si CPA de {cpaCible.toFixed(2)}€ insuffisant (pas de diffusion), alors
        baser les calculs sur la LTV client.
      </p>
      <p>
        <u style={{fontWeight: "bold"}}>Conseil :</u> Commencez en cpc manuel puis après 50 conversions
        environ testez les enchères automatiques au CPA.
      </p>
    </div>
  );
};

export default CPA;
