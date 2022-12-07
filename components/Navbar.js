import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/images/logo.svg'

const Navbar = () => {
    return (
        <div id='navbar' className="container">
            <div className="header">

                <div className='logo_menu'>
                    <Link href="/">
                    <Image className='logo' src={logo} alt="logo" width={120} height={60} />
                    </Link>
                </div>

                <div className="menu">
                    <li className='links'>
                        <Link href="/">Strona główna</Link>
                        <Link href="/o_mnie">O mnie</Link>
                        <Link href="komu_pomagam">Komu pomagam</Link>
                        <Link href="jak_pomagam">Jak pomagam</Link>
                        <Link href="/cennik">Cennik</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/kontakt">Kontakt</Link>
                    </li>
                    {/* <div className="hamburger">MENU</div>
                    <Link href="/umow_wizyte" className='button_large_screeen'><button>Umów wizytę</button></Link> */}
                </div>
                
                <div className='socials'>
                    <div>
                        {/* <Link href="https://www.instagram.com/_pomiedzy__slowami_/" target="_blank"><Image className='icon' src="/images/instagram.svg" alt="instagram" width={35} height={35} /></Link> */}
                    </div>
                    <div>
                        <Link href="https://www.facebook.com/profile.php?id=100087274075683&sk=services" target="_blank"><Image className='icon' src="/images/facebook.svg" alt="facebook" width={35} height={35} /></Link>
                    </div>
                    <div>
                        <Image className='icon phone' src="/images/phone.svg" alt="phone" width={35} height={35} />
                    </div>
                    <div>
                        <a>0212 123 45 67</a>
                    </div>
                </div>

                <div className="menu_button">                
                    <Link href="/umow_wizyte" className='button_small_screen'><button>Umów wizytę</button></Link>
                </div>

            </div>
        </div>
    )
}

export default Navbar