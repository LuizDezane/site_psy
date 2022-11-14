import Link from 'next/link'

const Hero = () => {
return (
    <div className="parent section_1">

        <div className='upper'>
            <h1>Gdy słucham co mówisz,<br /> słyszę kim jesteś</h1>
            <h4><i>Ralph Waldo Emerson</i></h4>
        </div>

        <div className='lower'>
            <div className="image"></div>
            <div className="text">
                <h2>Paulina Janik<br /> Psycholog, psychoterapeuta</h2>
                <p>W swojej pacy kieruje się przede wszystkim dobrem drugiej osoby.
                    Zależy mi na tym, byś czuł się bezpiecznie
                    i swobodnie, dzieląc się ze mną swoimi historiami i doświadczeniami.
                    Gwarantuję zachowanie poufności.</p>
                <Link href="/umow_wizyte" className='button'><button className='orange'>Więcej o mnie...</button></Link>
            </div>
        </div>
    </div>
    )
}

export default Hero