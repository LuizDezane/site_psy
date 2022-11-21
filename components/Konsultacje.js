import Link from 'next/link'

const Konsultacje = () => {
    return (
        <div className='grid_container'>
            <h2 className="header">Konsultacje</h2>

            <div className="grid_10">
                <div className="grid">
                    <div>
                        <h4>Konsultacje psychologiczne</h4>
                        <p>Proces psychoterapeutyczny poprzedzony jest konsultacjami psychologicznymi. Zazwyczaj cztery spotkania mają charakter konsultacji diagnostycznych. Jest to czas na dokładne zrozumienie problemu, a także osoby, która go doświadcza. Na tej podstawie ustalimy dalszą współpracę.</p>
                        <Link href="/komu_pomagam" className='button'><button className='white'>Dowiedz się więcej</button></Link>
                    </div>

                    <div>
                        <h4>Psychoterapia indywidualna osób dorosłych</h4>
                        <p>Psychoterapia to przede wszystkim spotkanie dwóch osób, które polega na swobodnej  rozmowie toczącej się między pacjentem a terapeutą.</p>
                        <Link href="/komu_pomagam" className='button'><button className='white'>Dowiedz się więcej</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Konsultacje