import { Company } from "../Const/const";
function AboutCompany() {
    return (
        <div className="p-5 mb-4 mt-5 bg-light rounded-3" id="aboutUs">
            <div className="container py-5">
                <div>
                    <img className="bi mb-2" width="160rem" height="100rem" src="Images/logo/logo-no-background.png" />
                    <h1 className="display-5 fw-bold">{Company.name}</h1>
                </div>
                <p className="col-md-11 fs-5">
                    At Platinum Builders, we specialize in providing top-quality garage solutions that cater to the specific needs
                    and requirements of our clients. Whether you're a homeowner, small business owner or a large corporation,
                    we have the expertise and experience to help you create a garage space that perfectly fits your needs.
                    Our team of highly skilled professionals is dedicated to innovation and problem-solving,
                    ensuring that we stay ahead of the curve in delivering cutting-edge garage solutions to our clients. With years of experience in the industry,
                    we have built a reputation for excellence, delivering exceptional results on every project we undertake.
                </p>
            </div>
        </div>
    )
}
export default AboutCompany;