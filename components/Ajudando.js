import Link from 'next/link'

const Ajudando = () => {
    return (
        <section id="ajudando" className='off_white'>

            <h1 className="heading">Ajudando</h1>

            <div className="ajudando_div ajudando_1">
                <h3>Lidando com dificuldades emocionais</h3>
                <div className="line_ajudando"></div>
                <p>Ansiedade, depressão, dependência emocional, estressa, tristeza e insatisfação pessoal.</p>
                <Link href="/como_ajudo" className='ajudando_button'><button className='dark'>Saiba mais</button></Link>
            </div>

            <div className="ajudando_div ajudando_2">
                <h3>Desenvolvimento Pessoal</h3>
                <div className="line_ajudando"></div>
                <p>Entender aonde e como chegar!</p>
                <Link href="/como_ajudo" className='ajudando_button'><button className='dark'>Saiba mais</button></Link>
            </div>

            <div className="ajudando_div ajudando_3">
                <h3>Melhorar e/ou construir relações com os outros</h3>
                <div className="line_ajudando"></div>
                <p>Dificuldades em criar, manter e encerrar ciclos.</p>
                <Link href="/como_ajudo" className='ajudando_button'><button className='dark'>Descubra mais</button></Link>
            </div>

            <div className="ajudando_div ajudando_4">
                <h3>Entender e aceitar a si mesmo</h3>
                <div className="line_ajudando"></div>
                <p>“O paradoxo curioso é que quando eu me aceito como eu sou, então eu mudo” <br /> Carl Rogers</p>
                <Link href="/como_ajudo" className='ajudando_button'><button className='dark'>Descubra mais</button></Link>
            </div>
        </section>
    )
}

export default Ajudando
