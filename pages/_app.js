import '../styles/globals.scss'
import '../styles/navbar.scss'
import '../styles/hero.scss'
import '../styles/komu_pomagam.scss'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp
