import React from 'react'

import background_image from '../public/background.jpg'

const Hero = () => {
return (
<div>
    <div style={{backgroundImage: `url(${background_image.src})`,
    width: '100%',
    height: '80vh',
    opacity: 0.75}}>
    </div>
    <div>
        <h1>Gdy słucham co mówisz,
            słyszę kim jesteś</h1>
        <h4>Ralph Waldo Emerson</h4>
    </div>
    <div>
        <h4>Paulina Janik<br />
            Psycholog, psychoterapeuta</h4>
        <p>W swojej pacy kieruje się przede wszystkim dobrem drugiej osoby.
            Zależy mi na tym, byś czuł się bezpiecznie
            i swobodnie, dzieląc się ze mną swoimi historiami i doświadczeniami.
            Gwarantuję zachowanie poufności.</p>
    </div>

</div>
)
}

export default Hero