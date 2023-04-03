import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NavBtn from './components/navBtns/NavBtn';

function App() {
    return (
        <div id="page">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/request-estimate" element={<NavBtn heading={'Request Estimate'} paragraph={ScheduleBtn_paragrap} />} />
                <Route path="/schedule-service" element={<NavBtn heading={'Schedule Service'} paragraph={ScheduleBtn_paragrap} />} />
            </Routes>

            <Footer />
        </div>
    )
}
export default App;


const ScheduleBtn_paragrap = "Schedule a garage door service appointment today and get the help you need to keep your door working smoothly and safely. Our team of experts is here to assist you every step of the way";