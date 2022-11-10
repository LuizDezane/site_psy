import Link from 'next/link'

const Hero = () => {
    return (
        <div className='section_A'>
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
                        <div className="text">
                            <h2>Paulina Janik<br />
                            Psycholog, psychoterapeuta</h2>
                            <p>W swojej pacy kieruje się przede wszystkim dobrem drugiej osoby.
                            Zależy mi na tym, byś czuł się bezpiecznie
                            i swobodnie, dzieląc się ze mną swoimi historiami i doświadczeniami.
                            Gwarantuję zachowanie poufności.</p>
                            <Link href="/umow_wizyte" className='button'><button className='orange'>Więcej o mnie...</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero