function navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">Logo</a>
            <ul>
                <li className="active">
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/SignIn">Sign-in</a>
                </li>
                <li>
                    <a href="/SignUp">Sign-up</a>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;