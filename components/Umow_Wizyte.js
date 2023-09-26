import React, {useState} from 'react'
import Link from 'next/link'

const Umow_Wizyte = () => {

    const dialNumber = () => {
        window.location.href = "tel:+48530023204"
    }

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

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const data = new FormData(e.target)
        
        await fetch('https://formsubmit.co/twopercentoff@gmail.com', {
            method: 'POST',
            body: data,
            })
            
        window.location.href = '/'
    }

    return (
        <section id='umow_wizyte'>

            <h1 className="heading">Umów wizytę</h1>

            <div className="umow_wizyte_1">
                <h3>Jeśli masz jakiekolwiek pytania czy wątpliwości, po prostu zadzwoń lub napisz do mnie.</h3>
                <p>Wizytę możesz umówić telefonicznie lub przez Internet w kalendarzu poniżej.</p>
            </div>

            <div className="umow_wizyte_2">
                <h3>email:</h3>
                <p><Link href="mailto:paulina.janik.gabinet@gmail.com">paulina.janik.gabinet@gmail.com</Link></p><br />
                <h3>Telefon:</h3>
                <p onClick={dialNumber}>0530 023 204</p>
            </div>

            <div className="umow_wizyte_3">
                <h3>Formularz zgłoszeniowy</h3>
                <form className='kontakt_form' method="POST" action="https://formsubmit.co/paulina.janik.gabinet@gmail.com">
                    <div className="general_info">
                        <input className='blur' type="text" id='imie' name="name" placeholder="Twoje imię i nazwisko" onChange={handleInputChange} required />

                        <input className='blur' type="email" id="email" name="email" placeholder="Email" onChange={handleInputChange} required />

                        <input className='blur' type="tel" id="tel" name="phoneNumber" placeholder="Numer telefonu" onChange={handleInputChange} required />

                        <textarea className='blur' id="temat" name="description" placeholder="Treść wiadomości" cols="30" rows="8"onChange={handleInputChange} required />
                    </div>

                    <div className="submit">
                        <button className='dark' type="submit" value="Send">Wyślij wiadomość</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Umow_Wizyte