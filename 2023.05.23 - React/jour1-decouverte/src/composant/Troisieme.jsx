const Troisieme = () => {
    // avant le return
    const a = "Bonjour";
    const b = 10;
    const c = true; // on affiche pas les booleens, ils servent comme condition
    const d = [1,2,3];
    const e = {nom: 'Alain', age: 23};

    // avant le return, je crée 5 variables
    return <div>
        <h2 className="fs-6 text-primary">afficher des variables simples</h2>
        <ul>
            <li>{a}</li>
            <li>{b}</li>
            {c ? <li>la condition est vraie</li> : <li>la condition est fausse</li>}
        </ul>
        <h2 className="fs-6 text-primary">afficher les variables complexes</h2>
        <small>array / object</small>
        <ul>
            <li>{d}</li> {/** affiche tous les éléments du tableau sans séparateur */}
            <li>{d[0]}</li>
            <li>{d[2]}</li>
            {/** <li>{e}</li> Error: Objects are not valid as a React child (found: object with keys {nom, age})*/}
            <li>{e.age}</li>
            <li>{e.nom}</li>
            <li>{JSON.stringify(e)}</li>{/**  Afficher un objet sans passer par ses attributs*/}
            <li>{JSON.stringify(d)}</li>{/**  Afficher un tableau sans passer par ses attributs*/}
        </ul>
    </div>
};
export default Troisieme;