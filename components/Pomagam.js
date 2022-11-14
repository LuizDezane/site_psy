import Link from 'next/link'

const Pomagam = () => {
    return (
        <div className="parent section_3">
            <div className="header">
                <h2>Pomagam</h2>
            </div>
            
            <div className="kolumny">
                <div className="kolumna">
                    <h4>Radzić sobie z trudnościami natury emocjonalnej</h4>
                    <p>Zaburzenia nastroju, lęk, niepokój, wycofanie, stres, smutek, złość i agresja.</p>
                </div>
                <div className="kolumna">
                    <h4>Radzić sobie z problemami natury egzystencjalnej</h4>
                    <p>Samotność, brak poczucia sensu i celu życia, myśli samobójcze.</p>
                </div>
                <div className="kolumna">
                    <h4>Poprawić i/lub budować relacje z innymi</h4>
                    <p>Trudności w nawiązywaniu i utrzymywaniu relacji przyjacielskich lub partnerskich.</p>
                </div>
                <div className="kolumna">
                    <h4>Zrozumieć i zaakceptować siebie</h4>
                    <p>zaburzenia nastroju, lęk, niepokój, wycofanie, stres, smutek, złość i agresja.</p>
                </div>
                <div className="kolumna">
                    <h4>Skuteczniej funkcjonować</h4>
                    <p>Niskie poczucie własnej wartości, krytyczne postrzeganie siebie, nieśmiałość.</p>
                </div>
                <div className="kolumna">
                    <h4>Pokonać kryzysy osobiste</h4>
                    <p>Wyzwania, zmiany, ważne decyzje w życiu prywatnym lub zawodowym.</p>
                </div>                
            </div>
            <Link href="/umow_wizyte" className='button'><button className='orange'>Dowiedź sie wiecej...</button></Link>
        </div>        
    )
}

export default Pomagam