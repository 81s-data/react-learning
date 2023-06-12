const EventSuite = () => {

    const fleurs = [
        {id: 1, nom: 'rose', prix: 20},
        {id: 2, nom: 'jasmin', prix: 120},
        {id: 3, nom: 'tulipe', prix: 30}
    ];

    // dans la vue afficher pour chaque fleurs
    // <div>
    // <p> rose <button>prix</button> </p> => si je clique => alert(20)
    // <p> jasmin <button>prix</button> </p> => si je clique => alert(120)
    // <p> tulipe <button>prix</button> </p> => si je clique => alert(30)
    // </div>
    // cas pratique : réaliser le jsx ci dessus

    const showPrix = prix => {
        alert(prix);
    }

    return <div>
        <h2>Exercice - EventSuite</h2>
        {/* <p> rose <button onClick={showPrix(fleurs[0].prix)}>prix</button> </p> ne fonctionne pas*/}
        
        {/* <p> rose <button onClick={function() {showPrix(fleurs[0].prix)}}>prix</button> </p>
        <p> jasmin <button onClick={function() {showPrix(fleurs[1].prix)}}>prix</button> </p>
        <p> tulipe <button onClick={function() {showPrix(fleurs[2].prix)}}>prix</button> </p> */}
        {fleurs.map((item, key) => {
            return <p key={key}> {item.nom}
                    <button key={key} onClick={function(){showPrix(item.prix)}}>prix</button>
                </p>
        })}
    </div>
}
export default EventSuite;