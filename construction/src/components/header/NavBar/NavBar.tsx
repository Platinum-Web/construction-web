import { Component, ReactNode } from "react";
import "./css/NavbarStyling.css";
import "./css/buttonsStyling.css";
import { Link } from 'react-router-dom';
import { Company } from '../../Const/const';

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    };
    render() {
        return (
            <nav className="navbarItems">

                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <img className="bi me-1" width="80" height="50" src={Company.logo} />
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

                    <Link to="/schedule-service">
                        <button id="schedule-btn" type="button">Schedule Service</button>
                    </Link>
                    <Link to="/request-estimate">
                        <button id="request-estimate-btn" type="button">Request Estimate</button>
                    </Link>

                </ul>

            </nav >

        )
    }
}


export default Navbar;

const MenuItems = [
    {
        title: "Home",
        url: "/",
        class_Name: "nav-links",
        icon: "fa-solid fa-house-user"
    },
    {
        title: "Services",
        url: "/#services",
        class_Name: "nav-links",
        icon: "fa-solid fa-screwdriver-wrench"
    },
    {
        title: "About Us",
        url: "/#aboutUs",
        class_Name: "nav-links",
        icon: "fa-solid fa-users icon"
    },
    {
        title: "Reviews",
        url: "/#review",
        class_Name: "nav-links",
        icon: "fa-solid fa-comment"
    },
    {
        title: "Contact Us",
        url: "/#contacts",
        class_Name: "nav-links",
        icon: "fa-solid fa-address-book"
    },
    {
        title: "Schedule Service",
        url: "/#scheduleService",
        class_Name: "nav-links-mobile"
    }
];

