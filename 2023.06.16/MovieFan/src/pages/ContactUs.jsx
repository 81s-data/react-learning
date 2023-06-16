import React from 'react'
import Footer from '../componant/Footer'

function ContactUs() {
  return (
    <div>
        <div className='mb-3 p-3'>
            <h1>Nous sommes là pour vous</h1>
            <form className='form-group row p-2'>
                <input className='form-control mb-3' type="email" name="" id="" placeholder='Votre email'/>
                <input className='form-control mb-3' type="text" id='object' placeholder='Le sujet du message'/>
                <textarea className='form-control mb-3' name="" id="" cols="30" rows="10" placeholder='Votre message'></textarea>
                <div className='form-floating d-flex justify-content-end'>
                    <input className='btn btn-primary' type="submit" value="Envoyer" />
                </div>
            </form>
        </div>
        <Footer />
    </div>
  )
}

export default ContactUs