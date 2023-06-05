import React from 'react'

function Compteur({nb, couleur, id, augmenter, diminuer}) {
  return (
    <div>
        <button style={{background : couleur}} onClick={() => diminuer(id)}>diminuer</button>
        {nb}
        <button style={{background : couleur}} onClick={() => augmenter(id)}>augmenter</button>
        {/* <pre>{JSON.stringify(props, null, ' ')}</pre> */}
    </div>
  )
}

export default Compteur;