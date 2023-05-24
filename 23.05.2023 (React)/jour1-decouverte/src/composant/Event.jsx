const Event = () => {
    // je veux réaliser associer au fait du clique sur le bouton
    // alert('Bonjour')
    // il faut ajouter à la balise <button onClick={}>

    function hello() {
        alert("hello");
    }

    function total (a, b) {
        alert(a+b);
    }

    return <div>
        <h2>Les événements dans les composants</h2>
        <button className="me-2" onClick={function(){alert('Bonjour')}}>bonjour</button>
        {/* cas appel de fonction sans paramètres */}
        <button className="me-2" onClick={hello}>hello</button>
        {/* cas appel de fonction avec paramètres */}
        <button onClick={function() {total(1,2)}}>total</button>
    </div>
}

export default Event;