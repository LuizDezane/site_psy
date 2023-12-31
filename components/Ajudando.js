import Link from 'next/link'

const Ajudando = () => {
    return (
        <section id="ajudando" className='off_white'>

            <h1 className="heading">Ajudando</h1>

            <div className="ajudando_div ajudando_1">
                <h3>Lidando com dificuldades emocionais</h3>
                <div className="line_ajudando"></div>
                <p>Distúrbios de humor, ansiedade, inquietação, retraimento, estresse, tristeza, raiva e agressão</p>
                <Link href="/como_ajudo" className='ajudando_button'><button className='dark'>Saiba mais</button></Link>
            </div>

            <div className="ajudando_div ajudando_2">
                <h3>Lidando com problemas existenciais</h3>
                <div className="line_ajudando"></div>
                <p>Solidão, falta de sentido e propósito de vida, pensamentos suicidas</p>
                <Link href="/como_ajudo" className='ajudando_button'><button className='dark'>Saiba mais</button></Link>
            </div>

            <div className="ajudando_div ajudando_3">
                <h3>Melhorar e/ou construir relações com os outros</h3>
                <div className="line_ajudando"></div>
                <p>Dificuldades em estabelecer e manter relações de amizade ou parcerias</p>
                <Link href="/como_ajudo" className='ajudando_button'><button className='dark'>Descubra mais</button></Link>
            </div>

            <div className="ajudando_div ajudando_4">
                <h3>Entender e aceitar a si mesmo</h3>
                <div className="line_ajudando"></div>
                <p>Autoaceitação, dificuldades relacionadas à orientação sexual</p>
                <Link href="/como_ajudo" className='ajudando_button'><button className='dark'>Descubra mais</button></Link>
            </div>

            <div className="ajudando_div ajudando_5">
                <h3>Funcionar de maneira mais eficaz</h3>
                <div className="line_ajudando"></div>
                <p>Baixa autoestima, autocrítica, timidez</p>
                <Link href="/como_ajudo" className='ajudando_button'><button className='dark'>Descubra mais</button></Link>
            </div>

            <div className="ajudando_div ajudando_6">
                <h3>Superar crises pessoais</h3>
                <div className="line_ajudando"></div>
                <p>Desafios, mudanças, decisões importantes na vida pessoal ou profissional</p>
                <Link href="/como_ajudo" className='ajudando_button'><button className='dark'>Descubra mais</button></Link>
            </div>
        </section>
    )
}

export default Ajudando
