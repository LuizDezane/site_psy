import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Hero from '../components/Hero'

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
        <br /><br />

        <h2>Konsultacje psychologiczne</h2>
        <p>Proces psychoterapeutyczny poprzedzony jest konsultacjami psychologicznymi. Zazwyczaj cztery spotkania mają charakter konsultacji diagnostycznych. Jest to czas na dokładne zrozumienie problemu, a także osoby, która go doświadcza. Na tej podstawie ustalimy dalszą współpracę.</p>
        <Link href="/umow_wizyte" className='button'><button className='white'>Dowiedz się więcej...</button></Link>
        <br /><br />

        <h2>Psychoterapia Indywidualna osób dorosłych</h2>
        <p>Psychoterapia to przede wszystkim spotkanie dwóch osób, które polega na swobodnej  rozmowie toczącej się między pacjentem a terapeutą.</p>
        <Link href="/umow_wizyte" className='button'><button className='white'>Dowiedz się więcej...</button></Link>
        <br /><br />

        </div>
    </section>
  </main>

  <footer>

  </footer>
</div>
)
}