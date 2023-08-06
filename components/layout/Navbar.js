import Link from 'next/link'

const Navbar = () => {
    return (
        <section id='navbar'>
            <div className='logo_menu'>
                <Link href="/"><h4>Paulina J.</h4></Link>
            </div>

            <div className="menu">
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

            <div className="hamburger">Hamburger</div>
        </section>
    )
}

export default Navbar