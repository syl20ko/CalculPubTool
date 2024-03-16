import React from "react";

const VosInformations = ({ panierMoyen, setPanierMoyen, gain, handleGainChange, tauxDeMarge, setTauxDeMarge,handleInputChange } ) => {
  return (
    <div className="card mt-2">
      {" "}
     <div className="card-header text-center">
       <h2 style={{ color: '#1F3164'}}>
       Vos informations
      </h2>
     </div>
     <div className="card-body form-group">
      <div>
        <p>
          <label className="mb-2">
            Panier Moyen (Commande ou produit) <span style={{color : "red", fontWeight : "bold"}}>HT</span> (€) :{" "}
            </label>
            <input
            className="form-control"
              type="number"
              aria-label="Panier Moyen"
              value={panierMoyen}
              onChange={(e) => setPanierMoyen(Number(e.target.value))}
              />
         
        </p>
      </div>
      <div>
        <p>
          {" "}
          <label>
            Bénéfices (€) :{" "}
            <input
            className="form-control"
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
            className="form-control"
              type="number"
              aria-label="Taux de marge en pourcentage"
              value={tauxDeMarge}
              onChange={(e) => setTauxDeMarge(Number(e.target.value))}
              />
          </label>
        </p>
      </div>
      </div>
    </div>
  );
};

export default VosInformations;
