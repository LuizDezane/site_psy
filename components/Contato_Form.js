import React, {useState} from 'react'

const Contato_Form = () => {

    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        service: '',
        description: '',
        budget: '',
        timeHorizon: '',
        payment: '',
    })

    const handleInputChange = async (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <section id="contato_form">
            
            <h1 className='heading'>Envie-me uma mensagem</h1>

            <form className='contato_form' method="POST" action="https://formsubmit.co/luizdezane@gmail.com">
                <div className="general_info">
                    <input className='blur' type="text" id='imie' name="name" placeholder="Nome e sobrenome" onChange={handleInputChange} required />

                    <input className='blur' type="email" id="email" name="email" placeholder="Email" onChange={handleInputChange} required />

                    <input className='blur' type="tel" id="tel" name="phoneNumber" placeholder="Celular" onChange={handleInputChange} required />

                    <textarea className='blur' id="temat" name="description" placeholder="Mensagem" cols="30" rows="8"onChange={handleInputChange} required />
                </div>

                <div className="submit">
                    <button className='dark' type="submit" value="Send">Envie uma mensagem</button>
                </div>
            </form>

            <div className="image_contato_form"></div>
        </section>
    )
}

export default Contato_Form