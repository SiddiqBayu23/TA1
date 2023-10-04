import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Helmet } from 'react-helmet';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password tidak sama");
      return;
    }

    const success = await register(email, password);

    if (success) {
      alert("Berhasil register");
      navigate("/login");
      return;
    }
  };

  return (
    <>
      <Helmet><title>Register | TRACLE</title></Helmet>
      <Container fluid className="d-flex flex-column align-items-center justify-content-center height bg-custom3">
        <div className="d-flex align-items-center justify-content-center gap-2 mb-4">
          <img src="https://i.ibb.co/gwHhDPb/11zon-cropped-1.png" className="shadow rounded-circle" width={70} />
          <h2 className="mb-3 text-center fw-bold" style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)" }}>
            REGISTER
          </h2>
        </div>
        <div className="register rounded shadow-lg p-4 border border-black">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Masukkan Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-2" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Masukkan Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-2" controlId="confirmpassword">
              <Form.Label>Konfirmasi Password</Form.Label>
              <Form.Control type="password" placeholder="Masukkan Kofirmasi Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </Form.Group>
            <Button className="btn-primary mt-2 w-100" type="submit">
              Register
            </Button>
            <span className="d-block mt-2 text-center">
              Sudah punya akun? <span></span>
              <Link to="/login" className="text-decoration-none">
                Login
              </Link>
            </span>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default Register;
