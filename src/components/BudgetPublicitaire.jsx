import React, { useState } from "react";

const BudgetPublicitaire = ({
  ventesNecessaires,
  panierMoyen,
  caResultant,
  tauxCoutPublicitaire,
  budgetAllouePub,
  profitSouhaite,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className="card with-label mt-2" data-label="Étape 4">
      <div className="card-header text-center">
         <h2 style={{ color: "#1F3164"}}>Budget Publicitaire</h2>
      </div>
      <div className="card-body">
        <div className="alert alert-success">
          <p className="text-center">
            <u>
              Pour réaliser{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                {profitSouhaite}€
              </span>{" "}
              de bénéfices
              <br />
              (coût pub inclu)
            </u>
          </p>
          <ul style={{ color: "#378239", fontWeight: "bold" }}>
            <li>
              <span style={{ color: "black" }}>
                {ventesNecessaires.toFixed(2)}
              </span>{" "}
              ventes nécessaires
            </li>
            <li>
             
              <span style={{ color: "black" }}>{caResultant.toFixed(2)}€ </span>
              de CA nécessaires
            </li>
          </ul>
          <hr />
          <p
            className="text-center"
            style={{ color: "green", fontWeight: "bold", fontSize: "15px" }}
          >
            {caResultant.toFixed(2)}€ (CA) <br /> X <br />{" "}
            {tauxCoutPublicitaire}% (Taux Coût Pub)
            <br />
          </p>
          <p
            className="text-center"
            style={{ color: "green", fontWeight: "bold", fontSize: "25px" }}
          >
            = <span style={{ color: "black", fontWeight: "bold", fontSize: "25px" }}>{budgetAllouePub.toFixed(2)}€</span>
          </p>
        </div>

        {/* détails calculs */}
        <p className="text-center">
          <btn
            style={{ color: "#1E3164" }}
            role="button"
            onClick={toggleCollapse}
            aria-expanded={isOpen}
            aria-controls="collapseExample"
          >
            {isOpen ? "Fermer le détail" : "Afficher le détail"}
          </btn>
        </p>
        <div
          className={isOpen ? "collapse show" : "collapse"}
          id="collapseExample"
        >
          <div className="card card-body">
            <div className="text-center">
              <p>
                {ventesNecessaires.toFixed(2)} ventes x {panierMoyen}€ (Panier
                moyen) = {caResultant.toFixed(2)}€
              </p>
            </div>
            <div className="text-center">
              <p>
                {caResultant.toFixed(2)}€ (CA) x{" "}
                {typeof tauxCoutPublicitaire === "number"
                  ? tauxCoutPublicitaire.toFixed(2)
                  : tauxCoutPublicitaire}
                % Taux coût pub
                <br />= {budgetAllouePub.toFixed(2)}€
              </p>
              <p>
                Ce budget publicitaire est mensuel si vous souhaitez réaliser{" "}
                {profitSouhaite}€ de bénéfices chaque mois.{" "}
              </p>
            </div>
          </div>
        </div>
        {/* end détails calculs */}
      </div>
    </div>
  );
};

export default BudgetPublicitaire;
