import { useContext, useState } from "react";
import { Button, Container, Form, Image } from "react-bootstrap";
import gambar from "../assets/pengaduan.png";
import { ComplaintContext } from "../context/ComplaintContext";

function Coba() {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [kota, setKota] = useState("");
  const [keluhan, setKeluhan] = useState("");
  const { addData } = useContext(ComplaintContext);
  const dataKota = [
    { kota: "Jakarta Barat" },
    { kota: "Jakarta Timur" },
    { kota: "Jakarta Selatan" },
    { kota: "Jakarta Pusat" },
    { kota: "Jakarta Utara" },
    { kota: "Kep. Seribu" },
    { kota: "Bogor" },
    { kota: "Kab. Bogor" },
    { kota: "Depok" },
    { kota: "Tangerang" },
    { kota: "Tangerang Selatan" },
    { kota: "Kab. Tangerang" },
    { kota: "Bekasi" },
    { kota: "Kab. Bekasi" },
  ];

  const sortedDataKota = dataKota.sort((a, b) => a.kota.localeCompare(b.kota));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newData = {
      nama: nama,
      alamat: alamat,
      kota: kota,
      keluhan: keluhan,
    };

    addData(newData);

    setNama("");
    setAlamat("");
    setKota("");
    setKeluhan("");
  };

  return (
    <>
      <Container fluid className="d-flex align-items-center justify-content-center bg-white min-vh-100">
        <div className="pengaduan border border-black bg-transparent rounded shadow-lg p-4">
          <Form onSubmit={handleSubmit}>
            <h2 className="mb-3 text-center fw-bold text-uppercase">
              <Image src={gambar} width={50} alt="Logo" /> Pengaduan
            </h2>
            <Form.Group controlId="formNama">
              <Form.Label className="fw-medium fs-5 mt-3 mb-1 ">Nama</Form.Label>
              <Form.Control className="border-2 border-black" type="text" name="nama" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Masukkan Nama" required />
            </Form.Group>

            <Form.Group controlId="formAlamat">
              <Form.Label className="fw-medium fs-5 mt-3 mb-1 ">Alamat</Form.Label>
              <Form.Control className="border-2 border-black" type="text" name="alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} placeholder="Masukkan Alamat" required />
            </Form.Group>

            <Form.Group controlId="formKota">
              <Form.Label className="fw-medium fs-5 mt-3 mb-1 ">Kota</Form.Label>
              <Form.Control className="border-2 border-black" as="select" name="kota" value={kota} onChange={(e) => setKota(e.target.value)} required>
                <option value="">Pilih Kota</option>
                {sortedDataKota.map((item, index) => (
                  <option key={index} value={item.kota}>
                    {item.kota}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formKeluhan">
              <Form.Label className="fw-medium fs-5 mt-3 mb-1 ">Keluhan</Form.Label>
              <Form.Control className="border-2 border-black" as="textarea" name="keluhan" value={keluhan} onChange={(e) => setKeluhan(e.target.value)} placeholder="Masukkan Keluhan" rows={4} required />
            </Form.Group>
            <Button className="btn-success mt-3 w-100" type="submit">
              KIRIM
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default Coba;
