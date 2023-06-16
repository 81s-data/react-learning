import React from 'react'

function App() {
  return (
    <div>
      {/* créer un test d'intégration qui teste s'il y a bien marqué coucou dans un paragraphe */}
      <h1>App</h1>
      <p data-testid='p'>coucou</p>
    </div>
  )
}

export default App