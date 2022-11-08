import React from 'react'
import Link from 'next/link'

import background_image from '../public/background.jpg'

const Hero = () => {
return (
<div className='hero'>
        <div className='background'>
            <div className='slogan_top'>
                <div className="area">
                    <h1>Gdy słucham co mówisz,<br />
                        słyszę kim jesteś</h1>
                    <h4>Ralph Waldo Emerson</h4>
                </div>
            </div>

            <div className='slogan_bottom'>
                <div className="area">
                    <div className="image"></div>
                    <h4>Paulina Janik<br />
                        Psycholog, psychoterapeuta</h4>
                    <p>W swojej pacy kieruje się przede wszystkim dobrem drugiej osoby.
                        Zależy mi na tym, byś czuł się bezpiecznie
                        i swobodnie, dzieląc się ze mną swoimi historiami i doświadczeniami.
                        Gwarantuję zachowanie poufności.</p>
                        <Link href="/umow_wizyte" className='button'><button className='orange'>Więcej o mnie...</button></Link>
                </div>
            </div>
        </div>
    </div>
    )
    }

    export default Hero