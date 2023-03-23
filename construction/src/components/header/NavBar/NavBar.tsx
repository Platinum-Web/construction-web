import { Component, ReactNode } from "react";
import "./css/NavbarStyling.css";
import "./css/buttonsStyling.css";
import { MenuItems } from './TsFiles/MenuItems';
class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    };
    render() {
        return (
            <nav className="navbarItems">

                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <img className="bi me-1" width="80" height="50" src="Images/logo/logo-no-background.png" />
                    <span className="fs-5 navbar-brand"> ProTrack Garage <span className="text-warning"> Builders </span></span>
                </a>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {
                        MenuItems.map((_item, index) => {
                            return (
                                <li key={index}>
                                    <a href={_item.url} className={_item.class_Name}>
                                        <i className={_item.icon}></i> {_item.title}
                                    </a>
                                </li>
                            )
                        })
                    }
                    <button id="schedule-btn">Schedule Service</button>
                    <button id="request-estimate-btn">Request Estimate</button>
                </ul>

            </nav >
        )
    }
}


export default Navbar;