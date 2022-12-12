import Link from 'next/link'

const Blog_Element = () => {
    return (
        <section>
            <div className="grid_container">
                <h1 className="header_pomagam">Ostatnio na blogu</h1>
                <h2>Ostatnio na Blogu</h2>
                <h4>Psychoterapia Indywidualna osób dorosłych</h4>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
                <Link href="/umow_wizyte" className='button'><button className='orange'>Czytaj dalej...</button></Link>

                <h4>Psychoterapia Indywidualna osób dorosłych</h4>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
                <Link href="/umow_wizyte" className='button'><button className='orange'>Czytaj dalej...</button></Link>

                <h4>Psychoterapia Indywidualna osób dorosłych</h4>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
                <Link href="/umow_wizyte" className='button'><button className='orange'>Czytaj dalej...</button></Link>

                <h3>Skontaktuj sie ze mną</h3>
            </div>
        </section>
    )
}

export default Blog_Element