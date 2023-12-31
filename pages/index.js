import Head from 'next/head'
import { motion as m } from 'framer-motion'

import Hero from '../components/Hero'
import Consulta from '../components/Consulta'
import Pomagam from '../components/Pomagam'
import Blog_Element from '../components/Blog_Element'
import Contato_Form from '../components/Contato_Form'

export default function Home() {
    return (
        <m.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1, ease: 'easeOut', delay: 0.25}}
        >
            <Head>
                <title>Simone Dezane | Psicóloga, Psicoterapeuta</title>
                <meta name="description" content="Simone Dezane | Psicóloga, Psicoterapeuta" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Hero />
                <Consulta />
                <Pomagam />
                {/* <Blog_Element /> */}
                <Contato_Form />
            </main>
        </m.div>
    )
}