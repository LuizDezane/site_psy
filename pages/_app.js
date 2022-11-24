import React, { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

import '../styles/globals.scss'
import '../styles/navbar.scss'
import '../styles/hero.scss'
import '../styles/konsultacje.scss'
import '../styles/pomagam.scss'
import '../styles/o_mnie.scss'
import '../styles/sizes.scss'
import '../styles/kontakt_form.scss'
import '../styles/footer.scss'

import Layout from '../components/Layout'

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