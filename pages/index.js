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
      </main>

      <footer>
      </footer>
    </div>
  )
}