import React from 'react'

function FormArticle({setUpdateList}) {

    const formData = {titre: '', body: ''}

    const handleInput = (e) => {
        formData[e.target.name] = e.target.value;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.titre.length < 3 || formData.body.length < 3) {
            alert('pas ok')
        } else {
            // fonction POST
            const option = {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'content-type' : 'application/json'
                }
            }

            fetch('http://localhost:4200/articles', option)
            .then(response => response.json)
            .then(data => {
                console.log(data);
                setUpdateList(function(update){return !update});
            })
        }
    }

    return (
        <div className='container'>
            <h1 className='text-center'>Formulaire Article</h1>
            <div className='w-50 mx-auto'>
                <form className='form-group row' onSubmit={handleSubmit}>
                    <div className='form-floating mb-3'>
                        <input type="text" id='titre' placeholder='titre' className='form-control'
                        name='titre' onChange={handleInput}/>
                        <label htmlFor="titre" className='ps-4'>Titre</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <textarea id='body' cols="30" rows="10" className='form-control'
                        name='body' placeholder='corps' onChange={handleInput}></textarea>
                        <label htmlFor="body" className='ps-4'>Corps</label>
                    </div>
                    <div className='form-floating d-flex justify-content-end'>
                        <input type="submit" value="envoyer" className='btn btn-primary'/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormArticle