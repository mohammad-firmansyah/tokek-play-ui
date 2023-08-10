import '../style/Nav.css'

export default function Nav() {
    return (
        <>
        <header>
            <nav id="filter">
                <ul>
                    <li className='selected'>Live</li>
                    <li>Explore</li>
                    <li>Promo</li>
                </ul>
            </nav>
        </header>
        </>
    )
}