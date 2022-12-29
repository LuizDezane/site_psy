import React, { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

import '../styles/globals.scss'
import '../styles/navbar.scss'
import '../styles/footer.scss'

import '../styles/hero.scss'
import '../styles/konsultacje.scss'
import '../styles/pomagam.scss'
import '../styles/o_mnie.scss'
import '../styles/kontakt_form.scss'
import '../styles/blog_element.scss'
import '../styles/komu_pomagam.scss'
import '../styles/jak_pomagam.scss'
import '../styles/kontakt_map.scss'
import '../styles/map.scss'

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