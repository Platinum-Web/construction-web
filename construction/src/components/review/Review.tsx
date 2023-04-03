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


const ReviewQuotes = [
    {
        name: "alex halleran",
        message: "Very knowledgeable and courteous sales and service/installation staff. Their installation work was impeccable. Very clean even though they had to cut the slab of the garage. Each team member introduced themselves and explained their primary role(s). Extremely polite. I am very very very happy with the product and the team that stands behind it"
    },
    {
        name: "Victoria Rose Martin",
        message: "I recently had to get my garage door repaired, and I have to say the service was excellent. The technician arrived on time and was very professional and courteous. He quickly diagnosed the issue and explained what needed to be done to fix it. The repair was done in a timely manner, and my garage door now works perfectly."
    },
    {
        name: "Nicole Muscarella",
        message: "I recently had to get some repairs done on my garage and I couldn't be happier with the service I received. The team was professional, efficient, and friendly throughout the entire process. They took the time to explain everything to me and make sure I was satisfied with the work they were doing. I highly recommend this garage repair service to anyone."
    }
]