import Head from 'next/head'
import Link from 'next/link'

import Hero from '../components/Hero'
import KomuPomagam from '../components/KomuPomagam'

export default function Home() {
return (
<div>

  <Head>
    <title>Paulina Janik | Psycholog, Psychoterapeuta</title>
    <meta name="description" content="Paulina Janik | Psycholog, Psychoterapeuta" />
    <link rel="icon" href="/favicon.ico" />
  </Head>

  <main>
    <section>
      <div className="container">
        <Hero />
        <KomuPomagam />
      </div>
    </section>

    <h2>Pomagam</h2>
    <div className="kolumna_1">
      <h4>Radzić sobie z trudnościami natury emocjonalnej</h4>
      <p>Zaburzenia nastroju, lęk, niepokój, wycofanie, stres, smutek, złość i agresja.</p>
    </div>
    <div className="kolumna_2">
      <h4>Radzić sobie z problemami natury egzystencjalnej</h4>
      <p>Samotność, brak poczucia sensu i celu życia, myśli samobójcze.</p>
    </div>
    <div className="kolumna_3">
      <h4>Poprawić i/lub budować relacje z innymi</h4>
      <p>Trudności w nawiązywaniu i utrzymywaniu relacji przyjacielskich lub partnerskich.</p>
    </div>
    <div className="kolumna_4">
      <h4>Zrozumieć i zaakceptować siebie</h4>
      <p>zaburzenia nastroju, lęk, niepokój, wycofanie, stres, smutek, złość i agresja.</p>
    </div>
    <div className="kolumna_5">
      <h4>Skuteczniej funkcjonować</h4>
      <p>Niskie poczucie własnej wartości, krytyczne postrzeganie siebie, nieśmiałość.</p>
    </div>
    <div className="kolumna_6">
      <h4>Pokonać kryzysy osobiste</h4>
      <p>Wyzwania, zmiany, ważne decyzje w życiu prywatnym lub zawodowym.</p>
    </div>
    <Link href="/umow_wizyte" className='button'><button className='orange'>Dowiedź sie wiecej...</button></Link>

    <br /><br />

    <h2>Ostatnio na Blogu</h2>
    <h4>Psychoterapia Indywidualna osób dorosłych</h4>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
    <Link href="/umow_wizyte" className='button'><button className='orange'>Czytaj dalej...</button></Link>

    <h4>Psychoterapia Indywidualna osób dorosłych</h4>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
    <Link href="/umow_wizyte" className='button'><button className='orange'>Czytaj dalej...</button></Link>

    <h4>Psychoterapia Indywidualna osób dorosłych</h4>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
    <Link href="/umow_wizyte" className='button'><button className='orange'>Czytaj dalej...</button></Link>

    <h3>Skontaktuj sie ze mną</h3>
  </main>

  <footer>

  </footer>
</div>
)
}