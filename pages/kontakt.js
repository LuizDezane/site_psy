import Head from 'next/head'

import { motion as m } from 'framer-motion'
import Map from '../components/Mapa'

export default function Kontakt() {
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
                        <h2>Kontakt</h2>
                        <h3>Informacje kontaktowe</h3>
                        <h4>Centrum Psyche</h4>
                        <p>mgr Paulina Janik</p>

                        <h3>Adres</h3>
                        <p>ul. Białowieska 3a/5d (4 piętro), Wrocław</p>
                        <p>Budynek Pixel House, naprzeciwko Centrum Handlowego Magnolia Park i siłowni McFit (róg Legnickiej i Białowieskiej)</p>

                        <h3>Dane kontaktowe</h3>
                        <p>tel: 530 023 204</p>
                        <p>email: paulina.janik.gabinet@gmail.com</p>

                        <Map/>
                        </div>                        
                    </div>                    
                </section>
            </main>

            <footer>
            </footer>
        </m.div>
    )
}