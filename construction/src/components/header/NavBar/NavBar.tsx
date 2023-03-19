import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";
import "./css/NavbarStyling.css";
import { MenuItems } from './/MenuItems';
class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    };
    render() {
        return (
            <nav className="navbarItems">

                <h1 className="navbar-logo"> <span className="text-warning"> PLATINUM </span> BUILDERS </h1>

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
                    <button>Schedule Service</button>
                </ul>

            </nav>
        )
    }
}


export default Navbar;