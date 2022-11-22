import Link from 'next/link'
import React, { useEffect } from 'react'
import { gsap } from 'gsap'

import Element_1 from './webgl/Element_1'

const Hero = () => {

    useEffect(() => {
        const t1 = gsap.timeline()
        gsap.fromTo(".grid_8_centered, h1, h4, .lower, .image, .text, h2, .hero_text, .button",
        {opacity: 0, y: 25},
        {opacity: 1, y: 0, duration: 1, delay: 1, stagger: 0.15})
    })

return (
    <div className="grid_container">
        <Element_1 />
        <div className="grid_8_hero">
            <div className='grid_hero blur upper'>
                <h1>Gdy słucham co mówisz,<br /> słyszę kim jesteś</h1>
                <h4><i>Ralph Waldo Emerson</i></h4>
            </div>

            <div className='blur lower'>
                <div className="image"></div>
                <div className="text">
                    <h2>Paulina Janik</h2>
                    <h3>Psycholog, psychoterapeuta</h3>
                    <p>W swojej pacy kieruje się przede wszystkim dobrem drugiej osoby.
                        Zależy mi na tym, byś czuł się bezpiecznie
                        i swobodnie, dzieląc się ze mną swoimi historiami i doświadczeniami.
                        Gwarantuję zachowanie poufności.</p>
                    <Link href="/o_mnie" className='button'><button className='dark'>Więcej o mnie...</button></Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Hero