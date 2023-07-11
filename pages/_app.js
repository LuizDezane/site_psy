import React, { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

import '../styles/globals.scss'
import '../styles/layout/section.scss'
import '../styles/layout/navbar.scss'
import '../styles/layout/footer.scss'

import '../styles/home/hero.scss'
import '../styles/home/konsultacje.scss'
import '../styles/home/pomagam.scss'
import '../styles/home/blog_element.scss'
import '../styles/home/kontakt_form.scss'

import '../styles/o_mnie/o_mnie.scss'

import '../styles/komu_pomagam/komu_pomagam.scss'
import '../styles/jak_pomagam/jak_pomagam.scss'
import '../styles/cennik/cennik.scss'
import '../styles/umow_wizyte/umow_wizyte.scss'

import '../styles/kontakt/kontakt_map.scss'
import '../styles/kontakt/map.scss'

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