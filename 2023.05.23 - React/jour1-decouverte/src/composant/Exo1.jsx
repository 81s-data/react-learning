import { useState } from "react";

const Exo1 = () => {
    const [compteur, setCompteur] = useState(0);

    return <div>
        <h2>Exo State</h2>
        {compteur}
        <button onClick={() => {setCompteur(compteur - 1)}}>diminuer</button>
        <button onClick={() => {setCompteur(compteur + 5)}}>augmenter</button>
    </div>
};
export default Exo1;