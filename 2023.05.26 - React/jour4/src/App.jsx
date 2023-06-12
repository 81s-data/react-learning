import React, { useState } from 'react';
import Sommaire from '../composants/Sommaire';
import Ajax from '../composants/Ajax';
import Exo1 from '../composants/Exo1';

const App = () => {
  return <div>
    <Sommaire />
    {/* <Ajax /> */}
    <Exo1 />
  </div>
}
export default App;