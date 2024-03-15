import React from 'react';

const CPC = ({ tauxConversion, setTauxConversion, panierMoyen, tauxCoutPublicitaire }) => {
  // Calcul du nombre de visiteurs nécessaires par vente
  const visiteursParVente = 100 / tauxConversion;

  // Calcul du point mort CPC
  const cpcMax = panierMoyen / visiteursParVente;

  // Calcul du CPC recommandé basé sur le taux de coût publicitaire
  const cpcFinal = cpcMax * (tauxCoutPublicitaire / 100);

  return (
    <div>
      <p>
        <h3>
          <i>1)Au CPC Manuel</i>
        </h3>
      </p>
      <p>
        <label>
          Taux de conversion (%) :
          <input
            type="number"
            value={tauxConversion}
            onChange={(e) => setTauxConversion(Number(e.target.value))}
            step="0.01"
          />
        </label>
      </p>
      <p>Nombre de visiteurs nécessaires par vente : {typeof visiteursParVente === 'number' ? visiteursParVente.toFixed(0) : visiteursParVente} </p>
      <p>Point mort CPC :  {typeof cpcMax === 'number' ? cpcMax.toFixed(2) : cpcMax}€</p>
      <p>CPC recommandé basé sur le taux de coût publicitaire de {tauxCoutPublicitaire}% : {typeof cpcFinal === 'number' ? cpcFinal.toFixed(2) : cpcFinal}€</p>
    </div>
  );
};

export default CPC;
