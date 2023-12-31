import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {


    const whatsappTexto = "19995036789?text=Tenho%20interesse%20em%20seus%20serviços"
    const whatsappLink = `https://wa.me/${whatsappTexto}`;
    
    return (
        <div id="footer">

            <div className="column_1">
                <h3>Entre em Contato Comigo</h3>
                <br />
                <p>Psicóloga</p>
                <p>Simone Dezane</p>
                <p>CRP 06/195851</p>
                <br />
                <Link href="/marque_consulta" className='div5'><button className='dark'>Agende uma Consulta</button></Link>
            </div>


            <div className="column_2">

                <div className="footer_bottom">
                    <div className='footer_bottom_left'>
                        <Link href={whatsappLink} target="_blank"><Image className='icon' src="/images/whatsapp.svg" alt="whats" width={35} height={35} /></Link>
                        <Link href="https://www.linkedin.com/in/simone-cesario-592488139/" target="_blank"><Image className='icon' src="/images/linkedin.svg" alt="linkedin" width={35} height={35} /></Link>
                         <Link href="https://www.instagram.com/psi_simonedezane/" target="_blank"><Image className='icon' src="/images/instagram.svg" alt="instagram" width={35} height={35} /></Link>
                        {/*<Link href="" target="_blank"><Image className='icon' src="/images/twoj_psycholog.svg" alt="twoj_psycholog" width={35} height={35} /></Link>*/}
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