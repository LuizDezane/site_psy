import Link from 'next/link'

const KomuPomagam = () => {
    return (
        <div className='parent section_2'>
            <div className="konsultacje">
                <h2>Konsultacje</h2>
            </div>
            <div className="background">
                <div className="upper">
                    <h4>Konsultacje psychologiczne</h4>
                    <p>Proces psychoterapeutyczny poprzedzony jest konsultacjami psychologicznymi. Zazwyczaj cztery spotkania mają charakter konsultacji diagnostycznych. Jest to czas na dokładne zrozumienie problemu, a także osoby, która go doświadcza. Na tej podstawie ustalimy dalszą współpracę.</p>
                    <Link href="/umow_wizyte" className='button'><button className='white'>Dowiedz się więcej...</button></Link>
                </div>

                <div className="lower">
                    <h4>Psychoterapia indywidualna osób dorosłych</h4>
                    <p>Psychoterapia to przede wszystkim spotkanie dwóch osób, które polega na swobodnej  rozmowie toczącej się między pacjentem a terapeutą.</p>
                    <Link href="/umow_wizyte" className='button'><button className='white'>Dowiedz się więcej...</button></Link>
                </div>
            </div>
        </div>
    )
}

export default KomuPomagam