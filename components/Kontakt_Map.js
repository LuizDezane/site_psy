import React from 'react'
import Map from './Map'
import Link from 'next/link'

const Kontakt = () => {

    const dialNumber = () => {
        window.location.href = "tel:+48530023204"
    }
    
    return (
        <section id='kontakt_map'>

            <h1 className="heading">Kontakt</h1>
            
            <div className="background blur">
                <div className='kontakt_map_1'>
                    <h3>Centrum Psyche</h3>
                    <p>mgr Paulina Janik</p>
                </div>

                <div className='kontakt_map_2'>
                    <h4>Adres</h4>
                    <p>ul. Białowieska 3c/4a (3 piętro), Wrocław <br />
                    Budynek Pixel House, naprzeciwko Centrum Handlowego Magnolia Park i siłowni McFit (róg Legnickiej i
                    Białowieskiej)</p>
                </div>

                <div className='kontakt_map_3'>
                    <h4>Telefon:</h4>
                    <p onClick={dialNumber}>0530 023 204</p>
                    <h4>email:</h4>
                    <Link href="mailto:paulina.janik.gabinet@gmail.com">paulina.janik.gabinet@gmail.com</Link>
                </div>
            </div>

            <div className='mapa'>
                <Map />
            </div>
        </section>
    )
}

export default Kontakt