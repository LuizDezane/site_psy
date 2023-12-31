import React, { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

import '../styles/globals.scss'
import '../components/layout/section.scss'
import '../components/layout/navbar.scss'
import '../components/layout/nav.scss'
import '../components/layout/footer.scss'

import '../components/hero.scss'
import '../components/consulta.scss'
import '../components/ajudando.scss'
import '../components/blog_element.scss'
import '../components/contato_form.scss'

import '../components/sobre_mim.scss'
import '../components/quem_ajudo.scss'
import '../components/como_ajudo.scss'
import '../components/valores.scss'
import '../components/marque_consulta.scss'

import '../components/contato_map.scss'
import '../components/map.scss'

import Layout from '../components/layout/Layout'

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