import Link from 'next/link'

const Consulta = () => {
    return (
        <section id='consulta' className='white'>

            <div className="consulta_1">
                <div className="circle">
                    <div className="icon icon_1"></div>
                </div>
                <h3>Consultas Psicológicas</h3>
                <p>O processo terapêutico consiste em consultas individuais, realizadas através de conversas, onde trabalhamos questões internas como conflitos e angústias trazidas pelo paciente. Com base no que o paciente compartilha durante as sessões, trabalhamos juntos na análise dessas questões, visando sempre o bem-estar do paciente.</p>
                <Link href="/quem_ajudo" className='consulta_button'><button className='light'>Saiba mais</button>
                </Link>
            </div>

            <div className="consulta_2">
                <div className="circle">
                    <div className="icon icon_2"></div>
                </div>
                <h3>Abordagem psicanalítica</h3>
                <p>meu objetivo é ajudá-lo(a) a encontrar clareza e autoconhecimento para lidar com questões emocionais, relacionamentos, ansiedade, depressão ou quaisquer outros obstáculos que estejam impactando sua vida.</p>
                <Link href="/quem_ajudo"><button className='light'>Saiba mais</button></Link>
            </div>
        </section>
    )
}

export default Consulta
