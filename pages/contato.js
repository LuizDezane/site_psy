import Head from 'next/head'
import { motion as m } from 'framer-motion'
import Contato_Map from '../components/Contato_Map'

export default function Contato() {
    return (
        <m.div
    initial={{opacity: 0}}
    animate={{opacity:1}}
    transition={{duration: 0.75, ease: 'easeOut', delay: 0.25}}
    exit={{opacity:0}}
    >

            <Head>
                <title>Simone Dezane | Psicóloga e Psicanalista</title>
                <meta name="description" content="Simone Dezane | Psicóloga e Psicanalista" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Contato_Map />
            </main>

            <footer>
            </footer>
        </m.div>
    )
}