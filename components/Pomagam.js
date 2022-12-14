import Link from 'next/link'

const Pomagam = () => {
    return (
        <section className="pomagam">

            <h1 className="header_pomagam">Pomagam</h1>

            <div className="pomagam_div pomagam_1">
                <h4>Radzić sobie z trudnościami natury emocjonalnej</h4>
                <div className="line_pomagam"></div>
                <p>Zaburzenia nastroju, lęk, niepokój, wycofanie, stres, smutek, złość i agresja</p>
                <Link href="/jak_pomagam" className='pomagam_button'><button className='dark'>Dowiedź sie wiecej</button></Link>
            </div>

            <div className="pomagam_div pomagam_2">
                <h4>Radzić sobie z problemami natury egzystencjalnej</h4>
                <div className="line_pomagam"></div>
                <p>Samotność, brak poczucia sensu i celu życia, myśli samobójcze</p>
                <Link href="/jak_pomagam" className='pomagam_button'><button className='dark'>Dowiedź sie wiecej</button></Link>
            </div>

            <div className="pomagam_div pomagam_3">
                <h4>Poprawić i/lub budować relacje z innymi</h4>
                <div className="line_pomagam"></div>
                <p>Trudności w nawiązywaniu i utrzymywaniu relacji przyjacielskich lub partnerskich</p>
                <Link href="/jak_pomagam" className='pomagam_button'><button className='dark'>Dowiedź sie wiecej</button></Link>
            </div>

            <div className="pomagam_div pomagam_4">
                <h4>Zrozumieć i zaakceptować siebie</h4>
                <div className="line_pomagam"></div>
                <p>Samoakceptacja, trudności związane z orientacją seksualną</p>
                <Link href="/jak_pomagam" className='pomagam_button'><button className='dark'>Dowiedź sie wiecej</button></Link>
            </div>

            <div className="pomagam_div pomagam_5">
                <h4>Skuteczniej funkcjonować</h4>
                <div className="line_pomagam"></div>
                <p>Zaburzenia nastroju, lęk, niepokój, wycofanie, stres, smutek, złość i agresja</p>
                <Link href="/jak_pomagam" className='pomagam_button'><button className='dark'>Dowiedź sie wiecej</button></Link>
            </div>

            <div className="pomagam_div pomagam_6">
                <h4>Pokonać kryzysy osobiste</h4>
                <div className="line_pomagam"></div>
                <p>Niskie poczucie własnej wartości, krytyczne postrzeganie siebie, nieśmiałość</p>
                <Link href="/jak_pomagam" className='pomagam_button'><button className='dark'>Dowiedź sie wiecej</button></Link>
            </div>
        </section>
    )
}

export default Pomagam