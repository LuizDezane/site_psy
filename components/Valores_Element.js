import React from 'react'
import Link from 'next/link'

const Valores_Element = () => {
    return (
        <section id='valores_element'>

            <h1 className="heading">Valores</h1>

            <div className="valores_element_1">
                <h3>Pagamento possível em dinheiro ou cartão.</h3>
                <p>Por favor, cancele sua consulta no máximo 24 horas antes da data agendada.</p>
            </div>
            
            <div className="valores_element_2">
                <div>
                    <div className="circle">
                        <div className="icon icon_1"></div>
                    </div>
                    <p>Consulta psicológica</p>
                    <h2>R$ 80 / 50 minutos</h2>                    
                </div>
                <div>
                    <div className="circle">
                        <div className="icon icon_2"></div>
                    </div>
                    <p>Psicoterapia individual </p>
                    <h2>R$ 80 / 50 minutos</h2>
                </div>
            </div>

            <div className="menu_button">                
                <Link href="/marque_consulta" className='button_small_screen'><button className='dark'>Marque uma consulta</button></Link>
            </div>
        </section>
    )
}

export default Valores_Element