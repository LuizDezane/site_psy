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
        <div className="grid_container hero_container">
            <div className="hero"></div>
            <div className='blur upper'>
                <h2>Gdy słucham co mówisz,<br /> słyszę kim jesteś</h2>
                <h4 className='ralph'><i>Ralph Waldo Emerson</i></h4>
            </div>

            <div className='blur lower'></div>
            <div className="image"></div>
            <div className="text">
                <h3>Paulina Janik</h3>
                <h4>Psycholog, psychoterapeuta</h4>
                <p className='paragraph'>W swojej pacy kieruje się przede wszystkim dobrem drugiej osoby.
                    Zależy mi na tym, byś czuł się bezpiecznie
                    i swobodnie, dzieląc się ze mną swoimi historiami i doświadczeniami.
                    Gwarantuję zachowanie poufności.</p>
                <Link href="/o_mnie" className='button'><button>Więcej o mnie...</button></Link>
            </div>

        </div>
    )
}

export default Hero