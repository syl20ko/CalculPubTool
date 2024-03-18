import React from "react";
import Tooltip from "./Tooltip";

const VosInformations = ({
  panierMoyen,
  setPanierMoyen,
  gain,
  handleGainChange,
  tauxDeMarge,
  setTauxDeMarge,
  tauxConversion,
  setTauxConversion,
}) => {

  const fieldStyleBlue = {
    backgroundColor: "#E8F0FE",
    borderColor: "#4C86F9",
    color: "#000",
    borderWidth: "2px",
    borderStyle: "solid",
    borderRadius: "4px",
    padding: "10px",
    marginBottom: "10px",
  };

  const fieldStyleGreen = {
    backgroundColor: "#E6F4EA",
    borderColor: "#49A84C",
    color: "#000",
    borderWidth: "2px",
    borderStyle: "solid",
    borderRadius: "4px",
    padding: "10px",
    marginBottom: "10px",
  };

  const fieldStyleYellow = {
    backgroundColor: "#FFF9C4",
    borderColor: "#F6BA04",
    color: "#000",
    borderWidth: "2px",
    borderStyle: "solid",
    borderRadius: "4px",
    padding: "10px",
    marginBottom: "10px",
  };

  return (
    <div className="card with-label mt-2" data-label="Étape 1">
      <div className="card-header text-center">
         <h2 style={{ color: "#1F3164"}}>Vos Informations</h2>
      </div>
      <div className="card-body">
        <div>
          <p>
            <Tooltip text="Le chiffre d'affaires moyen réalisé lors de chaque vente.">
              <label className="mb-2">
                Panier Moyen{" "}
                <span style={{ color: "red", fontWeight: "bold" }}>HT</span>{" "}
                (Commande ou produit) (€)
              </label>
            </Tooltip>
            <input
              className="form-control"
              type="number"
              aria-label="Panier Moyen"
              value={panierMoyen}
              onChange={(e) => setPanierMoyen(Number(e.target.value))}
              style={fieldStyleGreen}
            />
          </p>
        </div>
        <div>
          <p>
            <Tooltip text="Les bénéfices que vous réalisez sur le panier moyen.">
              <label className="mb-2">Bénéfices (€)</label>
            </Tooltip>
            <input
              className="form-control"
              type="number"
              value={gain}
              onChange={handleGainChange}
              style={fieldStyleBlue}
            />
          </p>
        </div>

        <div>
          <p>
            <Tooltip text="Le taux de marge est corrélé aux bénéfices réalisés">
              <label className="mb-2">Taux de marge (%)</label>
            </Tooltip>
            <input
              className="form-control"
              type="number"
              aria-label="Taux de marge en pourcentage"
              value={tauxDeMarge.toFixed(2)}
              onChange={(e) => setTauxDeMarge(Number(e.target.value))}
              style={fieldStyleBlue}
            />
          </p>
        </div>

        <div>
          <p>
            <label className="mb-2">
              Taux de conversion de votre boutique (%)
            </label>

            <input
              className="form-control"
              type="number"
              value={tauxConversion}
              onChange={(e) => setTauxConversion(Number(e.target.value))}
              step="0.01"
              style={fieldStyleYellow}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default VosInformations;
