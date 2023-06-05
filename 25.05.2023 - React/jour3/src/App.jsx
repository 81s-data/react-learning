import React from 'react'

function App() {
  let resultat = [];

        // mapper les colones name / capitale / region / population / flags
        // sur https://restcountries.com/v3.1/all

        //<section>
        //  <h2>name
        //  <img src="flags.png" alt="">
        //  <ul>
        //      <li> population:
        //      <li> region:
        //      <li> capital:
        //  </ul>
        //</section>

        document.querySelector('#search').addEventListener('input', (e) => {
            const recherche = resultat.filter(item => {
                return item.name.common.toLowerCase().includes(e.target.value.toLowerCase());
            });
            console.log(recherche);
            render(recherche);
        });
        const render = (params) => {
            // params est un tableau
            document.querySelector('#paysRoot').innerHTML = '';
            params.map(item => {
                document.querySelector('#paysRoot').innerHTML +=
                    `<section>
                        <h2>${item.name.common}</h2>
                        <img src="${item.flags.png}" alt="${item.flags.alt}">
                        <ul>
                            <li> population: ${item.population} habitants </li>
                            <li> region: ${item.region} </li>
                            <li> capital: ${item.capital} </li>
                        </ul>
                    </section>`;
            })
        }
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(pays => {
            resultat = pays.map(({name, capital, flags, region, population}) => {
                return {name, capital, flags, region, population};
            })
            render(resultat);
        })
  return (
    <div>
      <div id="filtres">
        <h3>Filtres</h3>
        <input type="text" id="search"/>
        <input type="text" id="searchRegion"/>
      </div>
      <div id="paysRoot"></div>
    </div>
  )
}

export default App;