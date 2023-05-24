import React, { useState } from 'react';

function MultiState() {
    const [zoom, setZoom] = useState(100);
    const [show, setShow] = useState(true);

    return (<div>
        <h2>MultiState</h2>
        {
            show && <img src="https://via.placeholder.com/400x200" alt="" width={zoom}/>
        }
        <button onClick={function() {setZoom(zoom - 100)}}>zoom -</button>
        <button onClick={function() {setZoom(zoom + 100)}}>zoom +</button>
        <button onClick={function() {setShow(!show)}}>afficher masquer</button>
    </div>
    );
}

export default MultiState;
