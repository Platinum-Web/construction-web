function NavBar() {
    return (
        <>
            {/*   */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <span className="text-warning"> PLATINUM </span> BUILDERS
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about_us">ABOUT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#services">SERVICES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">PROJECTS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact_us">CONTACT US</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;