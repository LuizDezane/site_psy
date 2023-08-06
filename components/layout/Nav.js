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
                <Link href="/"><h4>Paulina J.</h4></Link>
            </div>

            <div className="menu_desktop">
                <Link href="/o_mnie">O mnie</Link>
                <Link href="komu_pomagam">Komu pomagam</Link>
                <Link href="jak_pomagam">Jak pomagam</Link>
                <Link href="/cennik">Cennik</Link>
                {/* <Link href="/blog">Blog</Link> */}
                <Link href="/kontakt">Kontakt</Link>
            </div>

            <div className="menu_button">                
                <Link href="/umow_wizyte" className='button_small_screen'><button className='dark'>Umów wizytę</button></Link>
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
                    <Link className='link' href="/o_mnie"><h4>O mnie</h4></Link>
                    <Link className='link' href="/komu_pomagam"><h4>Komu pomagam</h4></Link>
                    <Link className='link' href="/jak_pomagam"><h4>Jak pomagam</h4></Link>
                    <Link className='link' href="/cennik"><h4>Cennik</h4></Link>
                    {/* <Link className='link' href="/blog"><h4>Blog</h4></Link> */}
                    <Link className='link' href="/kontakt"><h4>Kontakt</h4></Link>
                    <Link className='link button_small_screen' href="/umow_wizyte">
                        <button className='dark'>Umów wizytę</button>
                    </Link>
                </m.div>
            </m.li>
        </section>
    )
}

export default Nav