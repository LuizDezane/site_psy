import Head from 'next/head'
import Image from 'next/image'

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
      </div>
    </section>
  </main>

  <footer>

  </footer>
</div>
)
}