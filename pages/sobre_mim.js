import Head from 'next/head'
import { motion as m } from 'framer-motion'
import { Sobre_Mim } from '../components/Sobre_mim'

export default function Sobre_mim() {
    return (
        <m.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.75, ease: 'easeOut', delay: 0.25}}
        >

            <Head>
                <title>Simone Dezane | Psicóloga e Psicanalista</title>
                <meta name="description" content="Simone Dezane | Psicóloga e Psicanalista" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Sobre_Mim />
            </main>

            <footer>
            </footer>
        </m.div>
    )
}