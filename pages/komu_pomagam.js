import Head from 'next/head'

import { motion as m } from 'framer-motion'

export default function Komu_pomagam() {
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
                            <h1>Komu Pomagam</h1>
                            <p>Dzień dobry, nazywam się Paulina Janik bardzo się cieszę, że tu jesteś. Domyślam się jak dużo masz wątpliwości, z jakimi trudnościami musisz mierzyć się na co dzień, a także jakich problemów doświadczasz. Być może trafiłeś tu, ponieważ:
                                <ul>
                                    <li>czujesz, że potrzebujesz pomocy</li>
                                    <li>chciałbyś pokonać swoje lęki i uwolnić się od przeszłości</li>
                                    <li>doświadczasz trudności w budowaniu i utrzymaniu relacji przyjacielskich, partnerskich, nie odczuwasz satysfakcji z tych relacji, często popadasz w konflikty z innymi ludźmi, czujesz się samotny</li>
                                    <li>niepokoi Cię obniżony nastrój, nadmierny smutek, uczucie pustki, negatywne myśli na swój temat, odczuwasz brak satysfakcji z życia, masz myśli samobójcze</li>
                                    <li>doświadczasz kryzysu w życiu prywatnym lub zawodowym</li>
                                    <li>cierpisz z powodu zaburzeń psychicznych, zaburzeń osobowości, zaburzeń lękowych, depresji</li>
                                    <li>wydaje Ci się, że próbowałeś już wszystkiego, ale nic się nie zmienia</li>
                                </ul>
                                W swojej pracy towarzyszę osobom takim jak Ty. Wspieram i pomagam zrozumieć wewnętrzne potrzeby, pokonać trudności oraz odnaleźć drogę do poradzenia sobie z nimi.
                                <br />
                                Psychoterapia jest dla mnie procesem otwierania się na nową jakość życia, szansą na rozwój i zrozumienie. Jestem tu właśnie po to, żeby zachęcić Ciebie do podjęcia tej terapeutycznej podróży w bezpieczny i profesjonalny sposób.
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