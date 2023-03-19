import { Route, Routes } from "react-router-dom";
import CarouselMain from "./Carousel/CarouselMain";
import NavBar from "./NavBar/NavBar";


function Header() {
    return (
        <>
            {/* <Routes>
                <NavBar />
            </Routes> */}
            <NavBar />
            <CarouselMain />
        </>
    )
}
export default Header;