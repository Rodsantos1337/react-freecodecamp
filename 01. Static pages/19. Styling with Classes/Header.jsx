export default function Header() {
    return (
        <header className="nav-wrap">
            <img className="nav-logo" src="react-logo.png" width="40px" alt="React logo" />
            <nav>
                <ul className="nav-list">
                    <li>
                        Pricing
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </nav>
        </header>
    )
}