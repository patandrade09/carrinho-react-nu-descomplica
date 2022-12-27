import Banner from "./Banner";
import FeatureProduct from "./FeatureProduct";
import ScrollToTopOnMount from "../template/ScrollToTopOnMount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <ScrollToTopOnMount />
      <Banner />
      <div className="d-flex flex-column bg-white py-4">
        <p style={{color:"#6f42c1"}} className="text-center px-5">
          Venha colorir sua vida com a KawaiiYou! Aproveite nossas promoções!
        </p>
        <div className="d-flex justify-content-center">
          <Link style={{color:"#6f42c1"}} to="/products" className="btn btn-light" replace>
            Buscar produto
          </Link>
        </div>
      </div>
      <h2 className="text-muted text-center mt-4 mb-3">New Arrival</h2>
      <div className="container pb-5 px-lg-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
          {Array.from({ length: 6 }, (_, i) => {
            return <FeatureProduct key={i} />;
          })}
        </div>
      </div>
      <div className="d-flex flex-column bg-white py-4">
        <h5 style={{color:"#6f42c1"}} className="text-center mb-3">Siga-nos nas redes sociais</h5>
        <div className="d-flex justify-content-center">
          <a style={{color:"#6f42c1"}} href="!#" className="me-3">
            <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
          </a>
          <a style={{color:"#6f42c1"}} href="!#">
            <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
          </a>
          <a style={{color:"#6f42c1"}} href="!#" className="ms-3">
            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Landing;
