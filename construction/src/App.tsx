import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import CustomeExample from './components/aboutCompany/AboutCompany';
import Review from './components/review/Review';
import Services from './components/services/services';
import Footer2 from './components/footer/Footer';


function App() {
    return (
        <div id="page">
            <Header />
            <Services />
            <CustomeExample />
            <Review />
            <Footer />
        </div>
    )
}
export default App;