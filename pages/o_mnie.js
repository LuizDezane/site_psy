import Head from 'next/head'

import { motion as m } from 'framer-motion'

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
                <section>
                    <div className="section_3">
                        <div>
                            <h2>O mnie</h2>
                            <p>mgr Paulina Janik</p>                            
                        </div>
                        <div className="tresc">
                        <p>Dzień dobry Państwu, nazywam się Paulina Janik - psycholog, socjoterapeuta, psychoterapeuta psychodynamiczny.
                            <br />
                            Jestem absolwentką Psychologii na Uniwersytecie Humanistycznospołecznym SWPS we Wrocławiu, o specjalności klinicznej.
                            <br />
                            Kwalifikacje psychoterapeutyczne zdobywam podczas specjalistycznego czteroletniego szkolenia w Szkole Psychoterapii Psychodynamicznej w Krakowskim Centrum Psychodynamicznym, rekomendowanym przez Polskie Towarzystwo Psychologiczne oraz Polskie Towarzystwo Psychoterapii Psychodynamicznej, gdzie ukończyłam również dwuletnie Studium Socjoterapii.
                            <br />
                            Moje doświadczenie i zgromadzony warsztat psychoterapeutyczny nieustannie pogłębiam biorąc udział w różnych szkoleniach, konferencjach naukowych oraz czytając literaturę psychologiczną.
                            <br />
                            Doświadczenie zawodowe zdobywałam w Wojewódzkim Szpitalu Specjalistycznym w Legnicy na Oddziale Psychiatrycznym, gdzie pracowałam z osobami hospitalizowanymi w ostrym kryzysie zdrowia psychicznego. Współpracowałam z Poradnią Zdrowia Psychicznego IKAR we Wrocławiu, gdzie udzielałam pomocy i wsparcia psychologicznego.
                            <br />
                            Prowadzę konsultacje psychologiczne,  psychoterapię indywidualną osób dorosłych w nurcie psychodynamicznym, która stanowi wsparcie dla osób doświadczających trudności, cierpienia lub dyskomfortu w życiu codziennym.
                            <br />
                            Pracuję w oparciu o standardy i zasady Kodeksu Etyki psychoterapeuty Polskiego Towarzystwa Psychoterapii Psychodynamicznej oraz Polskiego Towarzystwa Psychologicznego.
                            <br />
                            W trosce o dobro pacjenta, swoją pracę poddaję również regularnej superwizji u certyfikowanych superwizorów Polskiego Towarzystwa Psychoterapii Psychodynamicznej.
                            <br />
                            Jestem członkiem Polskiego Towarzystwa Psychoterapii Psychodynamicznej.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
            </footer>
        </m.div>
    )
}