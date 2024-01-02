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
                    <h2 className='center'>"Emoções não expressadas nunca morrem.<br />São enterradas vivas e depois saem de formas piores"</h2>
                    <h4 className='ralph center'><i>-Sigmund Freud-</i></h4>
                </div>
                
                <div className='lower'>
                    <div className="image_1"></div>
                    <div className="text left">
                        <h3>Seja bem-vindo(a)!</h3>
                        <p className='paragraph'>Sou Simone Dezane, psicóloga comprometida em oferecer um espaço acolhedor e confidencial para que você possa explorar e superar os desafios da vida. </p>
                        <Link href="/sobre_mim" className='button'><button className='dark'>Mais sobre mim...</button></Link>
                    </div>
                </div>
            </section>
    )
}

export default Hero