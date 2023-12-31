import Head from 'next/head'

import { motion as m } from 'framer-motion'

import Como_Ajudo from '../components/Como_Ajudo'

export default function Como_ajudo() {
    return (
        <m.div
    initial={{opacity: 0}}
    animate={{opacity:1}}
    transition={{duration: 0.75, ease: 'easeOut', delay: 0.25}}
    exit={{opacity:0}}
    >

            <Head>
                <title>Simone Dezane | Psicóloga, Psicoterapeuta</title>
                <meta name="description" content="Simone Dezane | Psicóloga, Psicoterapeuta" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Como_Ajudo />
            </main>

            <footer>
            </footer>
        </m.div>
    )
}