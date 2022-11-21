import Head from 'next/head'
import { motion as m } from 'framer-motion'

import Hero from '../components/Hero'
import Konsultacje from '../components/Konsultacje'
import Pomagam from '../components/Pomagam'

export default function Home() {
    return (
        <m.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
            transition={{duration: 1.25, ease: 'easeOut', delay: 0.75}}>

            <Head>
                <title>Paulina Janik | Psycholog, Psychoterapeuta</title>
                <meta name="description" content="Paulina Janik | Psycholog, Psychoterapeuta" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <section>
                    <div className="container">
                        <Hero />
                        <Konsultacje />
                        <Pomagam />
                    </div>
                </section>
            </main>

            <footer>
            </footer>
        </m.div>
    )
}