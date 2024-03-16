import React from 'react';

const BudgetPublicitaire = ({
  ventesNecessaires,
  panierMoyen,
  caResultant,
  tauxCoutPublicitaire,
  budgetAllouePub
}) => {
  return (
    <div className='card mt-2'>
     <div className="card-header text-center">
     <h2 style={{ color: '#1F3164'}}>Définir le budget</h2>
     </div>
     <div className="card-body">
     <div>
        <p>
          {ventesNecessaires.toFixed(2)} Ventes nécessaires pour atteindre le bénéfice souhaité
        </p>
        <p>
          x {panierMoyen}€ Panier moyen = {caResultant.toFixed(2)}€ (CA)
        </p>
      </div>
      <div>
        <p>
          {caResultant.toFixed(2)}€ (CA) x  {typeof tauxCoutPublicitaire === 'number' ? tauxCoutPublicitaire.toFixed(2) : tauxCoutPublicitaire} % de Taux coût pub
        </p>
        <p> Budget alloué à la pub = {budgetAllouePub.toFixed(2)}€</p>
      </div>
     </div>
    </div>
  );
};

export default BudgetPublicitaire;
