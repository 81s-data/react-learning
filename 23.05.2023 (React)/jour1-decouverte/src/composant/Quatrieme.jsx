const Quatrieme = () => {
    let test = true;
    let fleurs = ['rose', 'jasmin', 'lilas'];
    let formation = {
        duree: 15,
        unite: 'jours',
        nom: 'react'
    }
    return <div>
        <h1>exo 2</h1>
        <p> je suis une formation de {formation.duree} {formation.unite} en {formation.nom} </p>
        <p> j'aime les {fleurs[0]}s et le {fleurs[2]} </p>
        {test ? <p>je vais en pause</p> : <p>je travaille</p>}
    </div>
};
export default Quatrieme;