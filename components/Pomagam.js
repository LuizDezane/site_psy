import Link from 'next/link'

const Pomagam = () => {
    return (
        <div className="grid_container">
            <h2 className="header">Pomagam</h2>

            <div className="grid_3 upper">
                <div className="grid hover light">
                    <h4>Radzić sobie z trudnościami natury emocjonalnej</h4>
                    <p>Zaburzenia nastroju, lęk, niepokój, wycofanie, stres, smutek, złość i agresja</p>
                </div>
                <div className="grid hover light">
                    <h4>Radzić sobie z problemami natury egzystencjalnej</h4>
                    <p>Samotność, brak poczucia sensu i celu życia, myśli samobójcze</p>
                </div>
                <div className="grid hover light">
                    <h4>Poprawić i/lub budować relacje z innymi</h4>
                    <p>Trudności w nawiązywaniu i utrzymywaniu relacji przyjacielskich lub partnerskich</p>
                </div>
            </div>
            
            <div className="grid_3 lower">
                <div className="grid hover light">
                    <h4>Zrozumieć i zaakceptować siebie</h4>
                    <p>Samoakceptacja, trudności związane z orientacją seksualną</p>
                </div>
                <div className="grid hover light">
                    <h4>Skuteczniej funkcjonować</h4>
                    <p>Zaburzenia nastroju, lęk, niepokój, wycofanie, stres, smutek, złość i agresja</p>
                </div>
                <div className="grid hover light">
                    <h4>Pokonać kryzysy osobiste</h4>
                    <p>Niskie poczucie własnej wartości, krytyczne postrzeganie siebie, nieśmiałość</p>
                </div>
            </div>
            <Link href="/jak_pomagam" className='button'><button className='dark'>Dowiedź sie wiecej</button></Link>
        </div>
    )
}

export default Pomagam