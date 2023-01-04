import React from 'react'
import Link from 'next/link'

const Cennik_Element = () => {
    return (
        <section className='cennik_element'>

            <h1 className="header_cennik">Cennik</h1>

            <div className="cennik_element_1">
                <h3>Płatność możliwa gotówką lub kartą.</h3>
                <p>Proszę o odwoływanie konsultacji najpóźniej na 24 godziny przed umówionym terminem wizyty. </p>
            </div>
            
            <div className="cennik_element_2">
                <div>
                    <div className="circle">
                        <div className="icon icon_1"></div>
                    </div>
                    <p>Konsultacja psychologiczna</p>
                    <h2>170zł / 50 minut</h2>                    
                </div>
                <div>
                    <div className="circle">
                        <div className="icon icon_2"></div>
                    </div>
                    <p>Psychoterapia indywidualna </p>
                    <h2>170zł / 50 minut</h2>
                </div>
            </div>

            <div className="menu_button">                
                <Link href="/umow_wizyte" className='button_small_screen'><button className='dark'>Umów wizytę</button></Link>
            </div>
        </section>
    )
}

export default Cennik_Element