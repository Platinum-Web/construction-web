import { ReviewQuotes } from './TsFiles/ReviewsQuote';
import './css/Reviewstyling.css';
function Review() {

    return (
        <div className="container mt-5 animate__animated animate__fadeInUp animate__delay-1s" id="review">
            <div className="row">
                {
                    ReviewQuotes.map((_item, index) => {
                        return (
                            <div className="col-lg-4 d-flex flex-column justify-content-between align-items-center animate__animated animate__fadeIn animate__zoomIn" style={{ height: "350px" }} key={index}>
                                <i className="fa-solid fa-quote-left mb-3" style={{ fontSize: "4rem" }}></i>
                                <div className="flex-grow-1 text-center animate__animated animate__fadeIn">
                                    <h2 className="fw-normal">{_item.name}</h2>
                                    <p>{_item.message}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Review;