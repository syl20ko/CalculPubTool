import React from 'react';

const ObjectifsPublicitaires = ({
  profitSouhaite,
  setProfitSouhaite,
  tauxCoutPublicitaire,
  setTauxCoutPublicitaire,
  tauxMargeReel,
  gainReel,
  ventesNecessaires
}) => {
  // Fonction pour gérer les changements d'input
  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  return (
    <div>
      <h2><u>Chiffrer ses objectifs publicitaires</u></h2>
      <div>
        <p>
          <label>
            Bénéfices que vous souhaitez réaliser (€) :
            <input
              type="number"
              aria-label="Chiffre d'affaires souhaité"
              value={profitSouhaite}
              onChange={handleInputChange(setProfitSouhaite)}
            />
          </label>
        </p>
      </div>
      <div>
        <p>
          <label>
            Taux Coût Publicitaire (%):
            <input
              type="number"
              aria-label="Taux Coût Publicitaire en pourcentage"
              value={tauxCoutPublicitaire}
              onChange={handleInputChange(setTauxCoutPublicitaire)}
            />
          </label> (Si vous ne savez pas quoi mettre 20% - 25% est une bonne base)
        </p>
      </div>
      <div>
      <p>Taux Marge réel: {typeof tauxMargeReel === 'number' ? tauxMargeReel.toFixed(2) : tauxMargeReel}%</p>

      </div>
      <div>
        <p>Bénéfices réel sur chaque vente: {typeof gainReel === 'number' ? gainReel.toFixed(2) : gainReel} €</p>
      </div>
      <div>
        <p>Ventes nécessaires pour atteindre {profitSouhaite}€ de bénéfice: {typeof ventesNecessaires === 'number' ? ventesNecessaires.toFixed(2) : ventesNecessaires} Ventes</p>
      </div>
      <div>
        <p>ROAS :  {(100 / tauxCoutPublicitaire).toFixed(2)} (pour rappel le calcul du ROAS c'est 100 / Taux de coût pub)</p>
        <p>Soit ROAS : {(100 / tauxCoutPublicitaire).toFixed(2) * 100}%</p>
        <p>Soit 1€ investi rapporte {(100 / tauxCoutPublicitaire).toFixed(2)}€</p>
      </div>
    </div>
  );
};

export default ObjectifsPublicitaires;
