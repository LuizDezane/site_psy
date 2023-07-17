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
                    <h1 className='center'>Gdy słucham co mówisz,<br /> słyszę kim jesteś</h1>
                    <h4 className='ralph center'><i>Ralph Waldo Emerson</i></h4>
                </div>
                
                <div className='lower'>
                    <div className="image_1"></div>
                    <div className="text left">
                        <h2>Paulina Janik</h2>
                        <h3>Psycholog, psychoterapeuta</h3>
                        <p className='paragraph'>W swojej pracy kieruję się przede wszystkim dobrem drugiej osoby.
                        Zależy mi na tym, byś czuł się bezpiecznie
                        i swobodnie, dzieląc się ze mną swoimi historiami i doświadczeniami.
                        Gwarantuję zachowanie poufności.</p>
                        <Link href="/o_mnie" className='button'><button className='dark'>Więcej o mnie...</button></Link>
                    </div>
                </div>
            </section>
    )
}

export default Hero