import Link from 'next/link'

const Konsultacje = () => {
    return (
        <div className='grid_container'>

            <h1 className="header">Konsultacje</h1>

            <div className="kosnultacje_1">
                <h4>Konsultacje psychologiczne</h4>
                <p>Proces psychoterapeutyczny poprzedzony jest konsultacjami psychologicznymi. Zazwyczaj cztery spotkania mają charakter konsultacji diagnostycznych. Jest to czas na dokładne zrozumienie problemu, a także osoby, która go doświadcza. Na tej podstawie ustalimy dalszą współpracę.</p>
                <Link href="/komu_pomagam" className='konsultacje_button'><button className='dark'>Dowiedz się więcej</button></Link>
            </div>

            <div className="line"></div>

            <div className="kosnultacje_2">
                <h4>Psychoterapia indywidualna osób dorosłych</h4>
                <p>Psychoterapia to przede wszystkim spotkanie dwóch osób, które polega na swobodnej  rozmowie toczącej się między pacjentem a terapeutą.</p>
                <Link href="/komu_pomagam" className='konsultacje_button'><button className='dark'>Dowiedz się więcej</button></Link>
            </div>
        </div>
    )
}

export default Konsultacje