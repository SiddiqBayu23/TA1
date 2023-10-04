import { useContext, useState } from "react";
import { Container, Navbar, NavDropdown, Nav, Button, Image } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function NavComponent() {
  const { isLoggedIn, logout, currentUser } = useContext(AuthContext);
  const [activeLink, setActiveLink] = useState("");
  const navigate = useNavigate();

  console.log(currentUser);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logout();
    setActiveLink("/");
    navigate("/");
  };

  const handleNavLinkClick = (to) => {
    setActiveLink(to);
  };

  const renderNavLinks = () => {
    const navLinks = [
      { to: "/", text: "Beranda" },
      { to: "/kategori", text: "Kategori" },
      { to: "/articles", text: "Artikel" },
    ];

    if (isLoggedIn && currentUser?.role === "admin") {
      navLinks.push({ to: "/data-pengaduan", text: "Data Pengaduan", disabled: !isLoggedIn });
    }

    if (isLoggedIn && currentUser?.role === "user") {
      navLinks.push({ to: "/pengaduan", text: "Pengaduan", disabled: !isLoggedIn });
    }

    return navLinks.map((link) => (
      <Nav.Link key={link.to} as={NavLink} to={link.to} active={activeLink === link.to} disabled={link.disabled} onClick={() => handleNavLinkClick(link.to)}>
        {link.text}
      </Nav.Link>
    ));
  };

  return (
    <Navbar sticky="top" className="bg-custom " expand="md" variant="dark">
      <Container>
        <Navbar.Brand className="d-flex align-items-center" as={NavLink} to="/">
          <Image src="https://i.ibb.co/gwHhDPb/11zon-cropped-1.png" width={50} className="me-2" />
          <h1 className="mb-0">Tracle.</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fs-5">
            {renderNavLinks()}
            {isLoggedIn && (
              <NavDropdown title="Profile" id="basic-nav-dropdown">
                <NavDropdown.Item className="text-center ">{currentUser.role === "admin" ? "ADMIN" : "USER"}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="text-center" onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
            {!isLoggedIn && (
              <Button className="ms-3" onClick={handleLogin} variant="danger">
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComponent;
