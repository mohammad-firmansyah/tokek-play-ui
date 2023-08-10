import '../style/Nav.css'

export default function Nav() {
    return (
        <>
        <header>

            <nav id="top">
                    <svg className="unf-icon back-ico" viewBox="0 0 24 24" width="24" height="24" fill="var(--NN100, #E4EBF5)" ><path d="M20 11.25H4.78l5.73-5.72a.77.77 0 0 0 0-1.07.75.75 0 0 0-1.06 0l-7.1 7.1a.77.77 0 0 0 0 1.07l7.1 7.1a.75.75 0 0 0 1.06 0 .77.77 0 0 0 0-1.07l-5.92-5.91H20a.75.75 0 1 0 0-1.5Z"></path></svg>
                    <svg className="unf-icon search-ico" viewBox="0 0 24 24" width="24" height="24" fill="#C7CBD2"><path d="m20.53 19.46-4.4-4.4a7.33 7.33 0 1 0-1.07 1.06l4.41 4.41a.77.77 0 0 0 1.06 0 .77.77 0 0 0 0-1.07Zm-15.78-9a5.75 5.75 0 1 1 5.75 5.75 5.76 5.76 0 0 1-5.75-5.72v-.03Z"></path></svg>
            </nav>

            <nav id="filter">
                <ul>
                    <li><a href='#live'>Live</a></li>
                    <li><a href='#explore'>Explore</a></li>
                    <li><a href='#promo'>Promo</a></li>
                </ul>
            </nav>
        </header>
        </>
    )
}