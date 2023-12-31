import Head from 'next/head'
import { motion as m } from 'framer-motion'
import { Sobre_Mim } from '../components/Sobre_mim'

export default function O_mnie() {
    return (
        <m.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.75, ease: 'easeOut', delay: 0.25}}
        >

            <Head>
                <title>Simone Dezane | Psicóloga, Psicoterapeuta</title>
                <meta name="description" content="Simone Dezane | Psicóloga, Psicoterapeuta" />
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