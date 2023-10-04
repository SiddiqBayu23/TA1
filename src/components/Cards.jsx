import { useState } from "react";
import { Card, Button, Modal, ListGroup } from "react-bootstrap";

function Cards({ city, data }) {
  const [selectedCity, setSelectedCity] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const filteredData = selectedCity ? data.filter((item) => item.kota === selectedCity) : data;

  const handleDetailsClick = (city) => {
    setSelectedCity(city);
    setShowModal(true);
  };

  return (
    <>
      <Card className="mb-3">
        <Card.Header className="text-center fs-5 fw-medium">{city}</Card.Header>
        <Card.Footer className="d-flex justify-content-center">
          <Button variant="primary" onClick={() => handleDetailsClick(city)}>
            Details
          </Button>
        </Card.Footer>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Data Pengaduan - {selectedCity}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            {filteredData.map((item) => (
              <ListGroup.Item key={item.id}>
                <strong>Nama :</strong> {item.nama}
                <br />
                <strong>Alamat :</strong> {item.alamat}
                <br />
                <strong>Keluhan :</strong> {item.keluhan}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Cards;
