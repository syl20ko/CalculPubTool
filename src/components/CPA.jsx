import React from 'react';

const CPA = ({ panierMoyen, tauxCoutPublicitaire }) => {
  // Calcul du CPA cible basé sur le panier moyen et le taux de coût publicitaire
  const cpaCible = panierMoyen * (tauxCoutPublicitaire / 100);

  return (
    <div>
        <hr />
      <h3><i>2)Au CPA automatique</i></h3>
      <p>
        <strong>Panier moyen (€) :</strong> {panierMoyen}€
      </p>
      <p>
        <strong>Taux de coût de la publicité cible (%) :</strong> {tauxCoutPublicitaire}%
      </p>
      <p>
        <strong>CPA cible :</strong> {cpaCible.toFixed(2)}€ ({panierMoyen} * {tauxCoutPublicitaire}%)
      </p>
      <p>
        Stratégie d’enchères de type CPA cible (ou Maximiser les conversions avec un objectif de CPA).
      </p>
      <p>
       Si CPA de {cpaCible.toFixed(2)}€ insuffisant (pas de diffusion), alors baser les calculs sur la LTV client.
      </p>
      <p>
       <u>Conseil :</u> Commencez en cpc manuel puis après 50 conversions environ testez les enchères automatiques au CPA.
      </p>
    </div>
  );
};

export default CPA;