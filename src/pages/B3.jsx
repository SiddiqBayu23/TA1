import { useState } from "react"
import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Banner from "../components/Banner"
import Card2 from '../components/Card2';

function B3(){

  const[banner, setBanner] = useState({
    gambar: "https://i.ibb.co/vYm9NKs/radioaktif.png", 
    judul: "Sampah B3 (Bahan Berbahaya dan Beracun", 
    deskripsi: "Bahan Berbahaya dan Beracun atau sering disingkat dengan B3 adalah zat, energi, dan/atau komponen lain yang karena sifat, konsentrasi dan/atau jumlahnya baik secara langsung maupun tidak langsung dapat mencemarkan dan/atau merusak lingkungan hidup, membahayakan lingkungan hidup, kesehatan serta kelangsungan hidup manusia dan makhluk hidup lain.",
  })

  const[b3, setB3] = useState([
    {id:1, name:"Baterai", img: "https://i.ibb.co/bJVh0RK/alur.jpg"},
    {id:2, name:"Sampah Elektronik", img: "https://i.ibb.co/FBJ3wQP/elektronik.png"},
    {id:3, name:"Sampah Kosmetik", img: "https://i.ibb.co/hLLyGNk/kosmetik.png"},
    {id:4, name:"Lampu", img: "https://i.ibb.co/zX93Lq5/lampu.png"},
    {id:5, name:"Sampah Medis", img: "https://i.ibb.co/nLGNs1N/medis.png"},
    {id:6, name:"Obat Kadaluarsa", img: "https://i.ibb.co/6vYPr3h/obat.png"}
  ])
  
  return(
    <>
      <Helmet><title>B3 | TRACLE</title></Helmet>
      <Banner
        gbr={banner.gambar}
        kategori={banner.judul}
        desc={banner.deskripsi}
      />

      {/* Contoh Sampah */}
      <Container fluid>
        <Container className='p-4'>
          <h2 className="text-center my-5">CONTOH</h2>
          <div className='row my-4'>
          {b3.map((item, id) => (
                <Card2
                    key={id}
                    img={item.img}
                    name={item.name}
            />
            ))}
          </div>
        </Container>
      </Container>

      {/* Daur Ulang */}
      <Container fluid className='bg-light'>
        <Container>
          <h2 className="text-center py-5">ALUR PENGELOLAAN SAMPAH B3</h2>
            <div >
              <p>Limbah B3 dihasilkan oleh penghasil limbah, seperti rumah sakit, puskesmas, dan fasilitas layanan kesehatan (fasyankes) lainnya. Limbah B3 harus dipilah agar tidak tercampur dengan sampah/limbah domestik.
                  Jika tercampur, maka sampah/limbah domestik yang telah terkontaminasi B3 harus dikategorikan sebagai limbah B3.
                  Setelah dipilah, limbah B3 akan ditempatkan di TPS (tempat penyimpanan sementara) limbah B3 milik penghasil limbah. TPS ini wajib memenuhi persyaratan teknis dan mendapatkan persetujuan lingkungan.</p>
              <Container className="text-center">
                <img src="https://i.ibb.co/bJVh0RK/alur.jpg" alt="" className="img-fluid rounded-3 mt-3" width="1000px" height="950px"/>
              </Container>
            </div>
          <div className='p-4'></div>
        </Container>
      </Container>

    </>
  )
}
export default B3