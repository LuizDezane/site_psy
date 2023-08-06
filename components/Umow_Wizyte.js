import React from 'react'
import Link from 'next/link'

const Umow_Wizyte = () => {

    const dialNumber = () => {
        window.location.href = "tel:+48530023204"
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
                <form className='kontakt_form' action="#" method="POST">
                    <div className="general_info">
                        <input className='blur' type="text" id='imie' name="imie" placeholder="Twoje imię i nazwisko" required />

                        <input className='blur' type="email" id="email" name="email" placeholder="Email" required></input>

                        <input className='blur' type="tel" id="tel" name="tel" placeholder="Numer telefonu"></input>

                        <textarea className='blur' id="temat" name="text" placeholder="Treść wiadomości" cols="30" rows="8"></textarea>
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