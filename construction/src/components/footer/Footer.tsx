import './css/footer.css';
const Footer = () => {
    return (
        // <div className="container" id='contacts'>
        //     <footer className="row py-5 my-5 border-top justify-content-between">
        //         <div className="col-12 col-sm-6 col-md-3 mb-3">

        //         </div>

        //     </footer>

        // </div >

        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted"><span className="text-warning"> Platinum </span> Builders, Inc</p>
                <div col-md-4 justify-content-between >
                    <div className='phone'>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <i className="fa-solid fa-phone"></i>
                            <a href='tel:+5615834635' id='num-link'>(561) 583-4635</a>
                        </div>
                        <a href='tel:+9082931382' id='num-link' style={{ marginLeft: "1.5rem" }}>(908) 293-1382</a>
                    </div>

                    <div className="email mt-4">
                        <i className="fa-solid fa-envelope"></i>
                        <a href="mailto:example@example.com">example@example.com</a>
                    </div>
                </div>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
                </ul>
            </footer>
        </div>
    )
}
export default Footer;