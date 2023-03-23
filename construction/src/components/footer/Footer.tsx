import { Company } from '../Const/const';
import './css/footer.css';
function Footer() {
    return (
        <div className="container" id="contacts">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className='col-md-4 mb-0 text-muted'>{Company.name}</p>

                <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <img className="bi me-2" width="100rem" height="60rem" src="Images/logo/logo-no-background.png"></img>
                </a>

                <ul className="nav col-md-4 justify-content-end">
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
                </ul>
            </footer>
        </div>
    )
}

export default Footer;