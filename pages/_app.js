import '../styles/globals.scss'
import '../styles/navbar.scss'
import '../styles/hero.scss'
import '../styles/konsultacje.scss'
import '../styles/pomagam.scss'
import '../styles/o_mnie.scss'

import Layout from '../components/Layout'

import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  
  return (
    <Layout>
      <div>
        <AnimatePresence initial={true} mode={'wait'}>
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
      </div>
    </Layout>
  )
}

export default MyApp