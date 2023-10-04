import { Helmet } from "react-helmet";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import Card1 from "../components/Card1";
import HeroBannerSlider from '../components/HeroBannerSlider';

function Kategori() {

  const[kat, setKat] = useState([
    {id:1, ktg:"Organik", image: "https://i.ibb.co/LJjsP1k/organik3-removebg-preview.png", link: "/kategori/organik"},
    {id:2, ktg:"Anorganik", image: "https://i.ibb.co/N7kh3wD/anorganik.png", link: "/kategori/anorganik"},
    {id:3, ktg:"B3", image: "https://i.ibb.co/vYm9NKs/radioaktif.png", link: "/kategori/b3"}
  ])

  return (
    <>
      <Helmet><title>Kategori | TRACLE</title></Helmet>
      <HeroBannerSlider/>

      {/* Kategori */}
      <Container fluid>
        <Container>
          <h2 className="text-center py-5">KATEGORI</h2>
          <div className='row my-4'>
            {kat.map((item, id) => (
              <Card1
                key={id} 
                ktg={item.ktg}
                image={item.image}
                link={item.link}
              />
            ))}
          </div>
        </Container>
        <div className="p-3"></div>
      </Container>

      {/* Fyi */}
      <Container fluid className='bg-light'>
        <Container>
          <h2 className="text-center py-5">FOR YOUR INFORMATION</h2>
          <Row className="align-items-center pb-5">
            <Col className="sm-4">
              <img src="https://i.ibb.co/PG4Pbp5/fyi.png" className="rounded-3" width="450px" height="250px"/>
            </Col>
            <Col className="sm-8">
              <h3><strong>Tahukah <span className="text-success">Kamu?</span></strong></h3>
              <p>Komposisi sampah di Indonesia berupa sampah organik (sisa makanan, kayu ranting daun) 
                sebesar 57%, sampah plastik sebesar 16%, sampah kertas 10%, serta lainnya (logam, kain teksil, 
                karet kulit, kaca) 17%.</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Kategori;