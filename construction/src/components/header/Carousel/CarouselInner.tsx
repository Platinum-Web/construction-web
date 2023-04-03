function CarouselInner() {
    return (
        <>
            {CarouselItems.map((_item, index) => (
                <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                    <img src={_item.img} className="d-block w-100" alt="Grage Door Image" />
                    <div className="carousel-caption">
                        <h5>{_item.heading}</h5>
                        <p>{_item.caption}</p>
                        <button type="button" className="btn btn-warning" id="carousel-btn">
                            Request Service
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
}
export default CarouselInner;

const CarouselItems = [
    {
        heading: 'Garage door installation and spring replacement',
        caption: 'Convenient and Affordable Garage Door Remote Solutions',
        img: 'Images/g6.jpeg'
    },
    {
        heading: 'Revived and ready to roll! Garage door repair complete',
        caption: 'GARAGE DOORs OPENER REPAIR/INSTALLATION SERVICES',
        img: 'Images/home-1.jpg'
    },
    {
        heading: 'Platinum Builders: Your Gateway to Luxurious Garage Doors',
        caption: 'We Provide Garage Doors Service 24/7. Call Today!',
        img: 'Images/g5.jpeg'
    },

];