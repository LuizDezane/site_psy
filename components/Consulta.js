import Link from 'next/link'

const Consulta = () => {
    return (
        <section id='consulta' className='white'>

            <div className="consulta_1">
                <div className="circle">
                    <div className="icon icon_1"></div>
                </div>
                <h3>Consultas Psicológicas</h3>
                <p>O processo psicoterapêutico é precedido por consultas psicológicas. Geralmente, quatro encontros têm
                    um caráter de consultas diagnósticas. Este é o momento para entender profundamente o problema e a pessoa que
                    o vivencia. Com base nisso, estabeleceremos nossa futura cooperação.</p>
                <Link href="/quem_ajudo" className='consulta_button'><button className='light'>Saiba mais</button>
                </Link>
            </div>

            <div className="consulta_2">
                <div className="circle">
                    <div className="icon icon_2"></div>
                </div>
                <h3>Psicoterapia Individual para Adultos</h3>
                <p>A psicoterapia é, acima de tudo, um encontro entre duas pessoas, baseado numa conversa livre
                    entre o paciente e o terapeuta.</p>
                <Link href="/quem_ajudo"><button className='light'>Saiba mais</button></Link>
            </div>
        </section>
    )
}

export default Consulta
