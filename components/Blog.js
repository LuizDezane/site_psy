import Link from 'next/link'

const Blog = () => {
    return (
        <div>
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
    )
}

export default Blog