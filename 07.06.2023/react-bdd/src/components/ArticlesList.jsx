import React, { useEffect, useState} from 'react'

function ArticlesList({setUpdateList, updateList}) {

    const [articles, setArticles] = useState([]);
    const [id, setId] = useState(0);

    useEffect(() => {
        fetch('http://localhost:4200/articles')
        .then(response => response.json())
        .then(articles => {
            setArticles(articles);
        })
    }, [updateList]) // provient du parent (App)

    const modifier = (id) => {
        setId(id);
        setUpdateList(function(update){return !update});
    }

    function changeData(e , id){
        const cloneArticles = structuredClone(articles);
        const articleAModifier = cloneArticles.find(function(item){
            return item.id === id
        })
        const index = cloneArticles.indexOf(articleAModifier)
        cloneArticles[index][e.target.name] = e.target.value ;
        // console.log( clonePosts); 
        setArticles(cloneArticles);
    }

    function submit(e){
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target))
        const option = {
            method: "PUT" ,
            body : JSON.stringify(data),
            headers : {
                "content-type" : "application/json"
            }
        }
        fetch(`http://localhost:4200/articles/${id}` , option)
            .then(function(reponse){ return reponse.json() })
            .then(function(){ 
                setUpdateList(function(update){ return !update})
                setId(0);
            })
    }

    const supprimer = (id) => {
        const verif = confirm("êtes-vous sûr de vouloir vérifier l'articles ?")
        if (!verif) return;

        const option = {
            method: 'DELETE'
        }
        fetch(`http://localhost:4200/articles/${id}`, option)
        .then(response => response.json())
        .then(() => {
            setUpdateList(function(update){return !update});
        })
    }

    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center'>Articles</h1>
            {articles.map((item, key) => {
                return < div key={key}>{
                    item.id === id ? 
                    <form onSubmit={submit} key={key}>
                        <input type="hidden" name="id" value={item.id} />
                        <input type='text' name="titre" onChange={function(e){
                            changeData(e, id)
                        }} value={item.titre} />
                        <textarea name="body" rows="3" onChange={function(e){
                            changeData(e, id)}} value={item.body} ></textarea>
                        <input type="submit" value="ok"/>
                    </form> 
                    :
                    <article>
                        <h4>{item.titre}</h4>
                        <p>{item.body}</p>
                        <button className='btn btn-warning me-3'onClick={() => modifier(item.id)} >Modifier</button>
                        <button className='btn btn-danger' onClick={() => supprimer(item.id)}>Supprimer</button>
                    </article>
                }</div>
            })}
        </div>
    )
}

export default ArticlesList