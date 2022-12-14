import Link from 'next/link'

const Konsultacje = () => {
    return (
        <section className='konsultacje aurora'>

            <div className="kosnultacje_1">
                <div className="circle">
                    <div className="icon icon_1"></div>
                </div>
                <h4>Konsultacje psychologiczne</h4>
                <p>Proces psychoterapeutyczny poprzedzony jest konsultacjami psychologicznymi. Zazwyczaj cztery spotkania mają
                    charakter konsultacji diagnostycznych. Jest to czas na dokładne zrozumienie problemu, a także osoby, która
                    go doświadcza. Na tej podstawie ustalimy dalszą współpracę.</p>
                <Link href="/komu_pomagam" className='konsultacje_button'><button className='light'>Dowiedz się więcej</button>
                </Link>
            </div>

            <div className="kosnultacje_2">
                <div className="circle">
                    <div className="icon icon_2"></div>
                </div>
                <h4>Psychoterapia indywidualna osób dorosłych</h4>
                <p>Psychoterapia to przede wszystkim spotkanie dwóch osób, które polega na swobodnej rozmowie toczącej się
                    między pacjentem a terapeutą.</p>
                <Link href="/komu_pomagam"><button className='light'>Dowiedz się więcej</button></Link>
            </div>
        </section>
    )
}

export default Konsultacje