import Link from 'next/link'

const Navbar = () => {
    return (
        <section id='navbar'>
            <div className='logo_menu'>
                <Link href="/"><h4>Simone Dezane</h4></Link>
            </div>

            <div className="menu">
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

            <div className="hamburger">Hamburger</div>
        </section>
    )
}

export default Navbar