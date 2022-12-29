import Head from 'next/head'
import { motion as m } from 'framer-motion'
import Kontakt_Map from '../components/Kontakt_Map'

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
                <Kontakt_Map />
            </main>

            <footer>
            </footer>
        </m.div>
    )
}