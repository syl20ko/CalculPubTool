import React from "react";

const VosInformations = ({ panierMoyen, setPanierMoyen, gain, handleGainChange, tauxDeMarge, setTauxDeMarge,handleInputChange } ) => {
  return (
    <div>
      {" "}
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
              onChange={(e) => setPanierMoyen(Number(e.target.value))}
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
              onChange={(e) => setTauxDeMarge(Number(e.target.value))}
              />
          </label>
        </p>
      </div>
    </div>
  );
};

export default VosInformations;
