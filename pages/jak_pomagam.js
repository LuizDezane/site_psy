import Head from 'next/head'

import { motion as m } from 'framer-motion'

import Jak_Pomagam from '../components/Jak_Pomagam'

export default function Jak_pomagam() {
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
                <Jak_Pomagam />
            </main>

            <footer>
            </footer>
        </m.div>
    )
}