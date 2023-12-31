import React from 'react'
import Map from './Map'
import Link from 'next/link'

const Contato = () => {

    const dialNumber = () => {
        window.location.href = "tel:+19995036789"
    }
    
    return (
        <section id='contato_map'>

            <h1 className="heading">Contato</h1>
            
            <div className="background blur">
                <div className='contato_map_1'>
                    <h3>Psicóloga</h3>
                    <p>Simone Dezane</p>
                    <p>CRP:195851</p>                   
                </div>

                <div className='contato_map_2'>
                    <h4>Adres</h4>
                    <p>ul. Białowieska 3a/5d, Wrocław <br />
                    Budynek Pixel House, naprzeciwko Centrum Handlowego Magnolia Park i siłowni McFit (róg Legnickiej i
                    Białowieskiej)</p>
                </div>

                <div className='contato_map_3'>
                    <h4>Telefon:</h4>
                    <p onClick={dialNumber}>(19)99503-6789</p>
                    <h4>email:</h4>
                    <Link href="mailto:luizdezane@gmail.com">luizdezane@gmail.com</Link>
                </div>
            </div>

            <div className='mapa'>
                <Map />
            </div>
        </section>
    )
}

export default Contato