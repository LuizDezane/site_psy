import Head from 'next/head'

import { motion as m } from 'framer-motion'

export default function Umow_wizyte() {
    return (
        <m.div
    initial={{opacity: 0}}
    animate={{opacity:1}}
    transition={{duration: 0.75, ease: 'easeOut', delay: 0.25}}
    exit={{opacity:0}}
    >

            <Head>
                <title>Paulina Janik | Psycholog, Psychoterapeuta</title>
                <meta name="description" content="Paulina Janik | Psycholog, Psychoterapeuta" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <section>
                    <div className="container_o_mnie">
                        <div>
                            <h1>Umów wizytę</h1>
                            <p>Jeśli masz jakiekolwiek pytania czy wątpliwości, po prostu zadzwoń lub napisz do mnie.</p>
                            <p>Wizytę możesz umówić telefonicznie lub przez Internet w kalendarzu poniżej.</p>
                            
                            <h3>tel: 530 023 204</h3>
                            <h3>email: paulina.janik.gabinet@gmail.com</h3>

                            <h2>Formularz zgłoszeniowy</h2>
                            <form action="#" method="POST">
                                <div className="general_info">

                                    <label htmlFor="name"><h4>Imię i nazwisko</h4></label>
                                    <input type="text" id='imie' name="imie" placeholder="Twoje imię i nazwisko" required />

                                    <label htmlFor="email"><h4>Adres email</h4></label>
                                    <input type="email" id="email" name="email" placeholder="Email" required></input>

                                    <label htmlFor="numer_telefonu"><h4>Telefon kontaktowy</h4></label>
                                    <input type="tel" id="tel" name="tel" placeholder="Numer telefonu"></input>

                                    <label htmlFor="temat"><h4>Temat</h4></label>
                                    <textarea id="temat" name="text" placeholder="Treść wiadomości" cols="30" rows="8"></textarea>
                                </div>
                                
                                <button type="submit" value="Send">Wyślij wiadomość</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
            </footer>
        </m.div>
    )
}