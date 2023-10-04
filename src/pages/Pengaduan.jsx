import { Container } from "react-bootstrap";
import FormKeluhan from "../components/FormKeluhan";
import { Helmet } from 'react-helmet';

function Pengaduan() {

  
  return (
    <>
      <Helmet><title>Pengaduan | TRACLE</title></Helmet>
      <Container className="my-3">
        <FormKeluhan />
      </Container>
    </>
  );
}

export default Pengaduan;
