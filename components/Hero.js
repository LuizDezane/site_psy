import Link from 'next/link'
import React, { useEffect } from 'react'
import { gsap } from 'gsap'

const Hero = () => {

useEffect(() => {
    const t1 = gsap.timeline()
    gsap.fromTo(".hero, .upper, h2, h4, .lower, .image, .text, h3, h4, .paragraph, .button",
    {opacity: 0, y: 25},
    {opacity: 1, y: 0, duration: 1, delay: 1, stagger: 0.15})
})

    return (
            <section id='hero'>
                <div className='upper'>
                    <h1 className='center'>Quando eu ouço o que você diz,<br />eu ouço quem você é</h1>
                    <h4 className='ralph center'><i>Ralph Waldo Emerson</i></h4>
                </div>
                
                <div className='lower'>
                    <div className="image_1"></div>
                    <div className="text left">
                        <h2>Simone Dezane</h2>
                        <h3>Psicóloga, psicoterapeuta</h3>
                        <p className='paragraph'>No meu trabalho, sou guiada principalmente pelo bem das outras pessoas.
                        Eu quero que você se sinta seguro
                        e compartilhe livremente suas histórias e experiências comigo.
                        Garanto confidencialidade.</p>
                        <Link href="/sobre_mim" className='button'><button className='dark'>Mais sobre mim...</button></Link>
                    </div>
                </div>
            </section>
    )
}

export default Hero