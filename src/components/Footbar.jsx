import { useContext } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { BsTwitter, BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const Footbar = () => {
  const { isLoggedIn, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLinkClick = (url) => {
    const newWindow = window.open(url, "_blank", "noopener noreferrer");
    if (newWindow) {
      newWindow.opener = null;
    } else {
      navigate(url);
    }
  };

  return (
    <footer style={{ backgroundColor: "#9cc976" }} className="page-footer font-small pt-1 text-light">
      <Container fluid className="p-3">
        <Row>
          <Col md={5} className="mt-md-0 p-3 d-flex flex-column align-items-center text-dark ">
            <h1>TRACLE.</h1>
            <Image fluid src="https://i.ibb.co/gwHhDPb/11zon-cropped-1.png" width={150} />
          </Col>

          <Col md={3} className="mb-md-0 mb-3  p-3">
            <h3 className="text-uppercase text-center text-dark fs-2 fw-medium">fitur</h3>
            <ul className="mt-4">
              <li className="mt-2 ">
                <Link className="text-decoration-none text-dark fw-medium fs-4" to="/articles">
                  Artikel
                </Link>
              </li>
              <li className="mt-2 ">
                <Link className="text-decoration-none text-dark fw-medium fs-4" to="/kategori">
                  Kategori
                </Link>
              </li>
              <li className="mt-2 ">
                <Link className="text-decoration-none text-dark fw-medium fs-4" to="/pengaduan">
                  Pengaduan
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={4} className="mb-md-0 mb-3 p-3">
            <h3 className="text-uppercase fs-2 fw-medium text-dark text-center">ikuti kami</h3>
            <div className="mt-5  d-flex justify-content-center align-items-center gap-5 p-3">
              <Link onClick={() => handleLinkClick("https://twitter.com/skilvul")}>
                <BsTwitter size={40} color="black" />
              </Link>
              <Link onClick={() => handleLinkClick("https://www.facebook.com/skilvul")}>
                <BsFacebook size={40} color="black" />
              </Link>
              <Link onClick={() => handleLinkClick("https://www.instagram.com/skilvul/")}>
                <BsInstagram size={40} color="black" />
              </Link>
              <Link onClick={() => handleLinkClick("https://www.youtube.com/skilvul")}>
                <BsYoutube size={40} color="black" />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="footer text-center py-3 bg-custom fw-semibold">
        <span>Copyright © 2023. Tracle</span>
      </div>
    </footer>
  );
};

export default Footbar;
