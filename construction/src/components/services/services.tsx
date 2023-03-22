import { ServicesItems } from './TsFiles/ServicesItems';

function Services2() {
    return (
        <div className="album py-5" id='services'>
            <div className="container">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                    {
                        ServicesItems.map((_item, index) => {
                            return (
                                <div className="col">
                                    <div className="card shadow-sm" key={index}>
                                        <img src={_item.imageUrl} className="bd-placeholder-img card-img-top" width="100%" height="225rem" aria-label={_item.title} title={_item.title} />
                                        <div className="card-body">
                                            <p className="card-text">{_item.paragraph}</p>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }

                </div>
            </div>
        </div >
    )
}

export default Services2;