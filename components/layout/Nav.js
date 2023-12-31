import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {motion as m} from 'framer-motion'

const variants = {
    open: {opacity: 1, x: '15%'},
    closed: {opacity: 0, x: "20%"},
}

const Nav = () => {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleRouteChange = () => {
            setIsOpen(false)
        }

        router.events.on('routeChangeStart', handleRouteChange)

        // Clean up the event listener on unmount
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [router.events])

    return (
        <section id='nav'>
            <div className='logo_menu'>
                <Link href="/"><h4>Simone Dezane</h4></Link>
            </div>

            <div className="menu_desktop">
                <Link href="/sobre_mim">Sobre mim</Link>
                <Link href="quem_ajudo">quem ajudo</Link>
                <Link href="como_ajudo">Como ajudo</Link>
               {/* <Link href="/valores">Valores</Link>
                 <Link href="/blog">Blog</Link> */}
                <Link href="/contato">Contato</Link>
            </div>

            <div className="menu_button">                
                <Link href="/marque_consulta" className='button_small_screen'><button className='dark'>Marque uma consulta</button></Link>
            </div>

            <nav className={`menu ${isOpen ? 'open' : 'closed'}`} onClick={() => setIsOpen(!isOpen)} >
                <svg className='line top'></svg>
                <svg className='line middle'></svg>
                <svg className='line bottom'></svg>
            </nav>

            <m.li className='menu_container'>
                <m.div 
                    className='menu_links'
                    initial='closed'
                    animate={isOpen ? 'open' : 'closed'}
                    variants={variants}
                    transition={{duration: 0.75, ease: 'easeOut', delay: 0.5}}
                    >
                    <Link className='link' href="/sobre_mim"><h4>Sobre mim</h4></Link>
                    <Link className='link' href="/quem_ajudo"><h4>quem ajudo</h4></Link>
                    <Link className='link' href="/como_ajudo"><h4>Como ajudo</h4></Link>
                    <Link className='link' href="/valores"><h4>Valores</h4></Link>
                    {/* <Link className='link' href="/blog"><h4>Blog</h4></Link> */}
                    <Link className='link' href="/contato"><h4>Contato</h4></Link>
                    <Link className='link button_small_screen' href="/marque_consulta">
                        <button className='dark'>Marque uma consulta</button>
                    </Link>
                </m.div>
            </m.li>
        </section>
    )
}

export default Nav