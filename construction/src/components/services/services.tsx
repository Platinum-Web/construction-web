import { ServicesItems } from './TsFiles/ServicesItems';
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Services() {
    const [ref, inView] = useInView({
        threshold: .19,
        triggerOnce: true,
    });

    useEffect(() => {
        let isVisible = inView;
        if (isVisible) {
            const items = document.querySelectorAll("#icon-grid .col");
            items.forEach((item) => {
                item.classList.add("animate__animated", "animate__fadeInUp");
            });
        }
    }, [inView]);
    return (

        <div className="container py-5 border-bottom" id="services" ref={ref}>
            <h2 className="pb-2 border-bottom text-warning" >Our Services</h2>
            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4 py-5">
                {ServicesItems.map((_item, index) => {
                    return (
                        <div className="col d-flex align-items-start" key={index} id="inner">
                            <i className="fa-solid fa-gear me-2" style={{ color: "#FFC107", fontSize: "1.3rem" }}></i>
                            <div>
                                <h3 className="fw mb-2 fs-5">{_item.heading}</h3>
                                <p>{_item.paragraph}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

    )
}

export default Services;