import React, { useEffect, useState } from 'react';
import './App.css'
import Produit from './components/Produit';

const App2 = () => {

  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(response => response.json())
    .then(({drinks}) => {

      const cocktails = drinks.map(drink => {
        
        return {title: drink.strDrink, 
                description: drink.strInstructions, 
                image: drink.strDrinkThumb,
                // ingredientsAndMeaures: {
                //   drink.strIngredient1 : drink.strMeasure1,
                //   drink.strIngredient2 : drink.strMeasure2,
                //   drink.strIngredient3 : drink.strMeasure3,
                //   drink.strIngredient4 : drink.strMeasure4,
                //   drink.strIngredient5 : drink.strMeasure5,
                //   drink.strIngredient6 : drink.strMeasure6,
                //   drink.strIngredient7 : drink.strMeasure7,
                //   drink.strIngredient8 : drink.strMeasure8,
                //   drink.strIngredient9 : drink.strMeasure9,
                //   drink.strIngredient10 : drink.strMeasure10,
                //   drink.strIngredient11 : drink.strMeasure11,
                //   drink.strIngredient12 : drink.strMeasure12,
                //   drink.strIngredient13 : drink.strMeasure13,
                //   drink.strIngredient14 : drink.strMeasure14,
                //   drink.strIngredient15 : drink.strMeasure15
                // }
              }
      })
      setCocktails(cocktails);
    })
  }, []);
  return <div>
    <h1>Recherche un cocktail</h1>
    <div>
      <input type="text" id="search" placeholder='rechercher un cocktail'/>
    </div>
    <p>liste des cocktails trouvés</p>
    <div className='listeCocktails'>
    {cocktails.map(({title, description, image}, key) => {
      return < Produit title={title}
                description={description}
                image={image}
                key={key} />
    })}
    </div>
  </div>
}
export default App2;