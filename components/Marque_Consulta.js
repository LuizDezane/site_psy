import React, {useState} from 'react'
import Link from 'next/link'

const Marque_Consulta = () => {

    const whatsappTexto = "19995036789?text=Tenho%20interesse%20em%20seus%20serviços"
    const whatsappLink = `https://wa.me/${whatsappTexto}`;

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
        <section id='marque_consulta'>
            
            <h1 className="heading">Marque uma consulta</h1>

            <div className="marque_consulta_1">
                <h3>Se você tiver quaisquer perguntas ou dúvidas, simplesmente ligue ou escreva para mim.</h3>
                <p>Você pode agendar sua consulta por telefone ou pela internet, usando o Formulário abaixo.</p>
            </div>

            <div className="marque_consulta_2">
                <h3>Email:</h3>
                <p className="phone-number-link">simonedezanepsi@gmail.com</p>
                <h3>Whatsapp:</h3><br />
                <a href={whatsappLink} className="phone-number-link" target="_blank" rel="noopener noreferrer">(19) 99503-6789</a>
            </div>

            <div className="marque_consulta_3">
                <h3>Envie-me uma mensagem</h3>
                <form className='contato_form' method="POST" action="https://formsubmit.co/simonedezanepsi@gmail.com">
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
            </div>
        </section>
    )
}

export default Marque_Consulta