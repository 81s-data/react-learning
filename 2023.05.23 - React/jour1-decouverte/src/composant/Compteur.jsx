import { useState } from "react";

const Compteur = () => {
    const [nombre, setNombre] = useState(0);

    return <div className="px-4">
        {nombre}
        <button className="btn btn-dark btn-sm ms-2"
                onClick={function() {setNombre(nombre + 1)}}>
                    augmenter le nombre de 1
        </button>
    </div>
};
export default Compteur;