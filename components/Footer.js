import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/images/logo.svg'

const Footer = () => {
    return (
        <div className="container_footer">

            <div className="column_1">
                <h3>Skontaktuj sie ze mna</h3>
                <br />
                <p>Centrum Psyche</p>
                <p>mgr Paulina Janik</p>
                <br />
                <p>ul. Białowieska 3a/5d (4 piętro), Wrocław</p>
                <p>Budynek Pixel House, naprzeciwko Centrum Handlowego Magnolia Park i siłowni McFit (róg Legnickiej i Białowieskiej</p>
                <br />
                <Link href="/umow_wizyte" className='div5'><button className='dark'>Umów wizytę</button></Link>
            </div>

            <div className="column_2">
                <li className='footer_menu'>
                    <Link href="/">Strona główna</Link>
                    <Link href="/o_mnie">O mnie</Link>
                    <Link href="komu_pomagam">Komu pomagam</Link>
                    <Link href="jak_pomagam">Jak pomagam</Link>
                    <Link href="/cennik">Cennik</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/kontakt">Kontakt</Link>
                </li>

                <div className="footer_bottom">
                    <div className='footer_bottom_left'>
                        <Image className='icon' src="/images/phone.svg" alt="phone" width={35} height={35} />
                        <Link href="https://www.instagram.com/_pomiedzy__slowami_/" target="_blank"><Image className='icon' src="/images/instagram.svg" alt="instagram" width={35} height={35} /></Link>
                        <Link href="https://www.facebook.com/profile.php?id=100087274075683&sk=services" target="_blank"><Image className='icon' src="/images/facebook.svg" alt="facebook" width={35} height={35} /></Link>
                    </div>

                    <div>
                        <Link href="/">
                        <Image className='logo' src={logo} alt="logo" width={120} height={60} />
                        </Link>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Footer