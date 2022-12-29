import Head from 'next/head'
import { motion as m } from 'framer-motion'
import { O_Mnie } from '../components/O_Mnie'

export default function O_mnie() {
    return (
        <m.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.75, ease: 'easeOut', delay: 0.25}}
        >

            <Head>
                <title>Paulina Janik | Psycholog, Psychoterapeuta</title>
                <meta name="description" content="Paulina Janik | Psycholog, Psychoterapeuta" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <O_Mnie />
            </main>

            <footer>
            </footer>
        </m.div>
    )
}