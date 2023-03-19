import { CarouselItems } from "./TsFiles/CarouselItems";
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