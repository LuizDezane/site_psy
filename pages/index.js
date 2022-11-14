import Head from 'next/head'
import Link from 'next/link'

import Hero from '../components/Hero'
import Konsultacje from '../components/Konsultacje'
import Pomagam from '../components/Pomagam'

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
        <Konsultacje />
        <Pomagam />
      </div>
    </section>

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