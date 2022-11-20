import Head from 'next/head'

import { motion as m } from 'framer-motion'

export default function Blog() {
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
                        <h2>Blog</h2>
                    </div>
                </section>
            </main>

            <footer>
            </footer>
        </m.div>
    )
}