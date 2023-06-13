import React, { useEffect, useState } from 'react'
import { db } from '../../config'
import { collection, getDocs } from 'firebase/firestore'

function Liste({update}) {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        async function getDocuments() {
            const data = await getDocs(collection(db, 'notes'))
            return data.docs.map(item => {
                    return item.data();
            })
        }
        getDocuments().then((data) => {
            setNotes(data);
        });
    }, [update])

  return (
    <div>
        <h2>Liste</h2>
        {notes && notes.map((item, key) => {
            return <p key={key}>{item.titre}</p>
        })}
    </div>
  )
}

export default Liste