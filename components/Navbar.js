import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <section id='navbar'>
        <div className="container">
            <header>
                <Link href="/"><Image className='logo' src="/logo.svg" alt="logo" width={184.34} height={46.77}/></Link>
                <nav>
                    <li>
                        <Link href="/">Stroma główna </Link>
                        <Link href="/o_mnie">O mnie</Link>
                        <Link href="komu_pomagam">Komu pomagam</Link>
                        <Link href="jak_pomagam">Jak pomagam</Link>
                        <Link href="/cennik">Cennik</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/kontakt">Kontakt</Link>
                    </li>
                    <Link href="/umow_wizyte"><button>Umów wizytę</button></Link>
                </nav>
            </header>
        </div>
    </section>
  )
}

export default Navbar