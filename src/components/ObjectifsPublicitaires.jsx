import React from "react";

const ObjectifsPublicitaires = ({
  profitSouhaite,
  setProfitSouhaite,
  tauxCoutPublicitaire,
  setTauxCoutPublicitaire,
  tauxMargeReel,
  gainReel,
  ventesNecessaires,
}) => {
  // Fonction pour gérer les changements d'input
  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

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

  const fieldStyleRed = {
    backgroundColor: "#F8D7DA",
    borderColor: "#E1422F",
    color: "#000",
    borderWidth: "2px",
    borderStyle: "solid",
    borderRadius: "4px",
    padding: "10px",
    marginBottom: "10px",
  };

  /*   const fieldStyleGrey = {
    backgroundColor: "#F5F5F5",
    borderColor: "#9E9E9E",
    color: "#000",
    borderWidth: "2px",
    borderStyle: "solid",
    borderRadius: "4px",
    padding: "10px",
    marginBottom: "10px",
  }; */

  return (
    <div className="card mt-2">
      <div className="card-header text-center">
        <h2 style={{ color: "#1F3164" }}>Chiffrer Objectifs</h2>
      </div>
      <div className="card-body">
        <div>
          <p>
            <label className="mb-2">
              Bénéfices que vous souhaitez réaliser (€)
            </label>
            <input
              className="form-control"
              type="number"
              aria-label="Chiffre d'affaires souhaité"
              value={profitSouhaite}
              onChange={handleInputChange(setProfitSouhaite)}
              style={fieldStyleBlue}
            />
          </p>
        </div>
        <div>
          <p>
            <label className="mb-2">Taux Coût Publicitaire (%)</label>
            <input
              className="form-control"
              type="number"
              aria-label="Taux Coût Publicitaire en pourcentage"
              value={tauxCoutPublicitaire}
              onChange={handleInputChange(setTauxCoutPublicitaire)}
              style={fieldStyleRed}
            />
            <p
              style={{
                textAlign: "center",
                fontSize: "12px",
                fontStyle: "italic",
              }}
            >
              (Si vous ne savez pas quoi mettre 20% - 25% est une bonne base)
            </p>
          </p>
        </div>
        <div className="alert alert-primary">
          <ul style={{ color: "#4C86F9", fontWeight: "bold" }}>
            <li>
              {" "}
              Taux Marge réel:{" "}
              <span style={{ color: "black" }}>
                {typeof tauxMargeReel === "number"
                  ? tauxMargeReel.toFixed(2)
                  : tauxMargeReel}
                %
              </span>
            </li>
            <li>
              Bénéf. réel sur une vente:{" "}
              <span style={{ color: "black" }}>
                {" "}
                {typeof gainReel === "number"
                  ? gainReel.toFixed(2)
                  : gainReel}{" "}
                €
              </span>
            </li>
            <li>
              {" "}
              Ventes nécessaires pour atteindre{" "}
              <span style={{ color: "black" }}>{profitSouhaite}€</span> de
              bénéf. :{" "}
              <span style={{ color: "black" }}>
                {" "}
                {typeof ventesNecessaires === "number"
                  ? ventesNecessaires.toFixed(2)
                  : ventesNecessaires}{" "}
                Ventes
              </span>
            </li>
            <li>
              ROAS cible:{" "}
              <span style={{ color: "black" }}>
                {(100 / tauxCoutPublicitaire).toFixed(2)} (
                {(100 / tauxCoutPublicitaire).toFixed(2) * 100}%)
              </span>
            </li>
          </ul>
        </div>
        <p
          style={{ textAlign: "center", fontSize: "12px", fontStyle: "italic" }}
        >
          ROAS {(100 / tauxCoutPublicitaire).toFixed(2)} = 100 / Taux de coût
          pub
          <br />
          Soit 1€ investi rapporte {(100 / tauxCoutPublicitaire).toFixed(2)}€
        </p>
      </div>
    </div>
  );
};

export default ObjectifsPublicitaires;
