import React, { useEffect, useState } from 'react';
import './App.css'
import Produit from './components/Produit';

const App = () => {

  const [cocktails, setCocktails] = useState([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(response => response.json())
    .then(({drinks}) => {
      let ingredients = [];
      let mesures = [];

      const cocktails = drinks.map(drink => {

        let drinkIngredients = [];
        let drinkMesures = [];

        Object.keys(drink).filter(item => {
          return item.match(/strIngredient\d/);
        }).map(item => {
          if (drink[item]) {
            drinkIngredients.push(drink[item]);
          }
        });
        ingredients.push(drinkIngredients);
        

        Object.keys(drink).filter(item => {
          return item.match(/strMeasure\d/);
        }).map(item => {
          if (drink[item]) {
            drinkMesures.push(drink[item]);
          }
        });
        mesures.push(drinkMesures);

        return {title: drink.strDrink, description: drink.strInstructions, image: drink.strDrinkThumb, ingredients, mesures}
      })
      // console.log(ingredients);
      // console.log(mesures);
      setCocktails(cocktails);
    })
  }, []);

  const incrementIndex = () => {
    if (index < cocktails.ingredients.length) {
      setIndex(index+1);
    }
  }

  return <div>
    <h1>Recherche un cocktail</h1>
    <div>
      <input type="text" id="search" placeholder='rechercher un cocktail'/>
    </div>
    <p>liste des cocktails trouvés</p>
    <div className='listeCocktails'>
    {cocktails.map(({title, description, image, ingredients, mesures}, key) => {
      incrementIndex();
      return < Produit title={title}
                description={description}
                image={image}
                key={key}
                ingredients={ingredients[index]}
                mesures={mesures}/>
    })}
    </div>
  </div>
}
export default App;