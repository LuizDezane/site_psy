import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {

    const dialNumber = () => {
        window.location.href = "tel:+19995036789"
    }
    
    return (
        <div id="footer">

            <div className="column_1">
                <h3>Entre em Contato Comigo</h3>
                <br />
                <p>Psicóloga</p>
                <p>Simone Dezane</p>
                <br />
                <p>Rua Eliana de Castro 136</p>
                <br />
                <Link href="/marque_consulta" className='div5'><button className='dark'>Agende uma Consulta</button></Link>
            </div>


            <div className="column_2">
                <li className='footer_menu'>
                    <Link href="/">Página inicial</Link>
                    <Link href="/sobre_mim">Sobre mim</Link>
                    <Link href="quem_ajudo">Quem ajudo</Link>
                    <Link href="como_ajudo">Como ajudo</Link>
                   {/* <Link href="/valores">Valores</Link>
                     <Link href="/blog">Blog</Link> */}
                    <Link href="/contato">Contato</Link>
                </li>

                <div className="footer_bottom">
                    <div className='footer_bottom_left'>
                        <Image onClick={dialNumber} className='icon' src="/images/phone.svg" alt="phone" width={35} height={35} />
                        <Link href="https://www.linkedin.com/in/simone-cesario-592488139/" target="_blank"><Image className='icon' src="/images/linkedin.svg" alt="linkedin" width={35} height={35} /></Link>
                        <Link href="https://www.facebook.com/profile.php?id=100087274075683&sk=services" target="_blank"><Image className='icon' src="/images/facebook.svg" alt="facebook" width={35} height={35} /></Link>
                        <Link href="https://twojpsycholog.pl/profil-psychologa/paulina-janik-3521" target="_blank"><Image className='icon' src="/images/twoj_psycholog.svg" alt="twoj_psycholog" width={35} height={35} /></Link>
                    </div>

                    <div className='logo_menu'>
                        <Link href="/"><h4>Simone Dezane</h4></Link>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Footer