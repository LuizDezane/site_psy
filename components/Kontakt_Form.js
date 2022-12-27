import Link from 'next/link'
import Map from './Mapa'

const Kontakt_Form = () => {
    return (
        <section className="kontakt_form">

            <h1 className='header_kontakt_form'>Skontaktuj sie ze mną</h1>

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

            <div className="image_kontakt_form"></div>
        </section>
    )
}

export default Kontakt_Form