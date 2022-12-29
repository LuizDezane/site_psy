import React from 'react'
import Map from './Mapa'

const Kontakt = () => {
    return (
        <section className='kontakt_map'>

            <h1 className="header_kontakt_map">Kontakt</h1>
            
            <div className="background blur">
                <div className='kontakt_map_1'>
                    <h3>Centrum Psyche</h3>
                    <p>mgr Paulina Janik</p>
                </div>

                <div className='kontakt_map_2'>
                    <h4>Adres</h4>
                    <p>ul. Białowieska 3a/5d (4 piętro), Wrocław <br />
                    Budynek Pixel House, naprzeciwko Centrum Handlowego Magnolia Park i siłowni McFit (róg Legnickiej i
                    Białowieskiej)</p>
                </div>

                <div className='kontakt_map_3'>
                    <h4>Telefon:</h4>
                    <p>0530 023 204</p>
                    <h4>email:</h4>
                    <p>paulina.janik.gabinet@gmail.com</p>
                </div>
            </div>

            <div className='mapa'>
                <Map />
            </div>
        </section>
    )
}

export default Kontakt