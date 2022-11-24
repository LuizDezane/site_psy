import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.svg'

const Navbar = () => {

return (
<div id='navbar'>
    <div className="container">
        <div className="upper_header">
            <div className='div1'>
                <Image className='icon' src="/phone.svg" alt="phone" width={35} height={35} />
                <p>0212 123 45 67</p>
            </div>
            <div className='div2'>
                <Link href="/">
                <Image className='logo' src={logo} alt="logo" width={120} height={60} />
                </Link>
            </div>
            <div className='div3'>
                <Image className='icon' src="/instagram.svg" alt="instagram" width={35} height={35} />
                <Image className='icon' src="/facebook.svg" alt="facebook" width={35} height={35} />
            </div>
        </div>
        <div className="lower_header">
            <li className='div4'>
                <Link href="/">Strona główna</Link>
                <Link href="/o_mnie">O mnie</Link>
                <Link href="komu_pomagam">Komu pomagam</Link>
                <Link href="jak_pomagam">Jak pomagam</Link>
                <Link href="/cennik">Cennik</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/kontakt">Kontakt</Link>
            </li>
            <Link href="/umow_wizyte" className='div5'><button>Umów wizytę</button></Link>
        </div>
    </div>
</div>
)
}

export default Navbar