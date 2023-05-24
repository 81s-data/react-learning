const Sixieme = () => {
    const articles = [
        {id: 1, titre: 'lorem ipsum', commentaires: 2, actif: true},
        {id: 2, titre: 'sed consent', commentaires: 0, actif: false},
        {id: 3, titre: 'lorem sed', commentaires: 20, actif: false}
    ]
    // si je veux afficher tous les articles actifs
    return<div>
        {articles.filter(item => {
            return item.actif;
        }).map((item, key) => {
            return <p key={key}>{JSON.stringify(item)}</p>
        })}
        <h2>solution 2: map et opérateur ternaire</h2>
        {articles.map(function(item, key) {
            return <p key={key}>{item.actif ? JSON.stringify(item) : ''}</p>
        })}
        <h2>solution 3: map et opérateur binaire (&&)</h2>
        {articles.map(function(item, key){
            return <p key={key}>{item.actif && JSON.stringify(item)}</p> // test et execute JSON.stringify(item)
        })}
    </div>
};

export default Sixieme;