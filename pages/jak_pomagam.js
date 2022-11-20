import Head from 'next/head'

import { motion as m } from 'framer-motion'

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
                <section>
                    <div className="container_o_mnie">
                        <div>
                            <h3>Jak pomagam</h3>
                            
                            <h4>Konsultacja psychologiczna</h4>                            
                            <p>
                            Proces psychoterapeutyczny poprzedzony jest konsultacjami psychologicznymi. Zazwyczaj cztery spotkania mają charakter konsultacji diagnostycznych. Jest to czas na dokładne zrozumienie problemu, a także osoby, która go doświadcza.
                            <br />
                            Konsultacja psychologiczna nie jest psychoterapią, a także nie zobowiązuje do jej rozpoczęcia. Daje jednak możliwość przyjrzenia się swoim trudnościom i podjęcia właściwej decyzji. Zatem głównym jej celem jest omówienie problemu i ustalenie formy pomocy, która będzie najkorzystniejsza dla pacjenta. 
                            <br />
                            Pierwsza konsultacja wiąże się z przedstawieniem powodów zgłoszenia przez pacjenta oraz z omówieniem motywacji do zmiany. To także moment na zapoznanie ze sposobem pracy specjalisty.
                            <br />
                            W trakcie kolejnych konsultacji przeprowadzany jest wywiad odnoszący się do funkcjonowania pacjenta w konkretnych obszarach. To etap pozwala na dobranie odpowiedniego podejścia terapeutycznego. Jeżeli pacjent jest zdecydowany na podjęcie procesu terapeutycznego, dochodzi do zawarcia kontraktu terapeutycznego. 
                            <br />
                            Kontrakt terapeutyczny zawiera w sobie zasady prowadzenia procesu terapeutycznego. Wiąże się z ustaleniem celów psychoterapii, czyli oczekiwanych zmian, a także z wyznaczeniem terminów spotkań, częstotliwości, płatności, omówieniem zasad poufności, zadań terapeuty i pacjenta. Dopiero po upewnieniu się przez obie strony, że zasady współpracy są jasne i akceptowane rozpoczyna się proces psychoterapii.
                            </p>
                            Nie każde konsultacje psychologiczne kończą się psychoterapią. Niektórzy pacjenci potrzebują jedynie doraźnego wsparcia lub zrozumienia obecnych trudności. O rozpoczęciu psychoterapii decyduje zarówno pacjent, który posiada motywację do pracy jak i terapeuta, który wyraża gotowość do długoterminowej pomocy.
                            
                            <h4>Psychoterapia indywidualna</h4>
                            <p>
                            Psychoterapia to przede wszystkim spotkanie dwóch osób, które polega na swobodnej  rozmowie toczącej się między pacjentem a terapeutą. 
                            <br />
                            Psychoterapeuta zachęca pacjenta do dzielenia się swymi doświadczeniami, skojarzeniami, myślami, odczuciami na temat tego, jak czuje się w chwili obecnej, jak przeżywa osoby ze swojego otoczenia. Psychoterapeuta pomaga pacjentowi w rozumieniu jego doświadczeń, a także nieświadomych potrzeb, pragnień, wyborów.
                            <br />
                            Psychoterapeuta zachęca, aby pacjent mówił o swoich prawdziwych myślach i uczuciach. Pokazuje jemu nowe perspektywy związane z nowymi sposobami radzenia sobie w trudnych sytuacjach. To wszystko pozwala na to, aby pacjent mógł rozpocząć lepsze funkcjonowanie w życiu codziennym.
                            </p>
                            
                            <h4>Ile trwa psychoterapia?</h4>
                            <p>
                            Standardowa sesja trwa 50 minut. Zazwyczaj sesja odbywa się raz w tygodniu. 
                            <br />
                            Wiele trudności pacjentów narastało przez wiele lat. Aby dokonać różnych zmian w życiu pacjenta, także potrzebny jest dłuższy czas. Długość trwania terapii jest indywidualna dla każdego pacjenta. Psychoterapia może być krótkoterminowa (do 15 spotkań) lub długoterminowa (do kilku lat).
                            <br />
                            Terapia jest procesem – wymaga więc cierpliwości, utrwalenia i czasu, aby zmiana była stała.
                            </p>
                            
                            <h4>Poufność</h4>
                            <p>
                            Proces psychoterapeutyczny, treści wnoszone do gabinetu objęte są tajemnicą zawodową. Bardzo poważnie traktuje prywatność i poufność każdego pacjenta. Oznacza to, że nikt postronny nie dowie się, że korzystasz z mojej pomocy, ani o czym rozmawiamy podczas spotkań. Zasada ta jest ważna i leży u podstaw zaufania do terapeuty.
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