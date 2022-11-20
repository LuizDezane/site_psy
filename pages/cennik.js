import Head from 'next/head'

import { motion as m } from 'framer-motion'

export default function Cennik() {
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
                        <div>
                            <h1>Cennik</h1>

                            <div className="columns">
                                <ul className="price">
                                    <p>Płatność możliwa gotówką lub kartą.</p>
                                    <p>Proszę o odwoływanie konsultacji najpóźniej na 24 godziny przed umówionym terminem wizyty. </p>
                                    <h3>Konsultacja psychologiczna</h3>
                                    <h2>150zł / 50 minut</h2>
                                    <h3>Psychoterapia  indywidualna </h3>
                                    <h2>150zł / 50 minut</h2>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
            </footer>
        </m.div>
    )
}