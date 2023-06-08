import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function List({updateList, setUpdateList}) {

    const [todos, setTodos] = useState([]);
    const [id, setId] = useState(0);

    useEffect(() => {
        fetch('http://localhost:4200/todo')
        .then(response => response.json())
        .then(data => {
            setTodos(data);
        })
    }, [updateList])

    const modifier = (id) => {
        setId(id);
    }

    const change = (e, id) => {
        const cloneTodos = [...todos];
        const todoToUpdate = cloneTodos.find(item => {
            return item.id === id;
        })
        const index = todos.indexOf(todoToUpdate);
        console.log(index);
        cloneTodos[index][e.target.name] = e.target.value;
        setTodos(cloneTodos);
    }

    const submit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target))
        const option = {
            method: "PUT" ,
            body : JSON.stringify(data),
            headers : {
                "content-type" : "application/json"
            }
        }
        fetch(`http://localhost:4200/todo/${id}` , option)
            .then(function(reponse){ return reponse.json() })
            .then(function(){ 
                setUpdateList(function(update){ return !update})
                setId(0);
            })
    }

    const supprimer = (id) => {
        const option = {
            method: 'DELETE'
        }
        fetch(`http://localhost:4200/todo/${id}`, option)
        .then(response => response.json())
        .then(() => {
            setUpdateList(function(update){return !update});
        })
    }

  return (
    <div>
        <h2>Tes tâches</h2>
        <ol>
            {todos.length > 0 && todos.map((item, key) => {
                return <li className='mb-4' key={key}>{
                        item.id === id ?
                        <div>
                            <form onSubmit={submit}>
                                <input type="text" name="titre" id="titre" onChange={function(e) {change(e, item.id);}}
                                className='me-3'/>
                                <input type="submit" name="envoyer" id="envoyer" value="envoyer"
                                onChange={function(e) { change(e, item.id);}}/>
                            </form>
                        </div>
                        :
                        <div>
                            {item.status ?  <del>{item.titre}</del>: item.titre}
                            <button onClick={() => modifier(item.id)} 
                            className='btn btn-warning ms-3'>Modifier</button>
                            <button onClick={() => supprimer(item.id)} 
                            className='btn btn-danger ms-2'>Supprimer</button>
                        </div>
                    }
                </li>
            })}
        </ol>
    </div>
  )
}

export default List