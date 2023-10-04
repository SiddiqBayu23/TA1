import React, { useState } from "react";
import HeroBannerSlider from "../components/HeroBannerSlider";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

function Home() {
    const [showWasteManagement, setShowWasteManagement] = useState(false);
    const [showRenewableEnergy, setShowRenewableEnergy] = useState(false);
    const [showText, setShowText] = useState(false);
  
    const handleToggleWasteManagement = () => {
      setShowWasteManagement(!showWasteManagement);
      setShowRenewableEnergy(false);
      setShowText(false);
    };
  
    const handleToggleRenewableEnergy = () => {
      setShowWasteManagement(false);
      setShowRenewableEnergy(!showRenewableEnergy);
      setShowText(false);
    };
  
    const handleToggleText = () => {
      setShowWasteManagement(false);
      setShowRenewableEnergy(false);
      setShowText(!showText);
    };

  return (
    <>
      <Helmet><title>Beranda | TRACLE</title></Helmet>
      <div className="App">
        <HeroBannerSlider />

        {/* Tentang Kami */}
        <div className="body-tentangkami">
        <div className="container py-5">
          <div className="row py-5 align-items-center">
            <div className="col-lg-7">
              <h1 className="black">Tentang Kami</h1>
              <p
                className="py-4"
                style={{ fontWeight: 300, fontSize: "1.3rem" }}
              >
                Kami adalah pelindung bumi, dengan tindakan ramah lingkungan,
                kami jaga alam yang sehat dan lestari. Bersama-sama kita
                hijaukan bumi, dengan aksi kecil dan konsisten, kita jaga
                keberlangsungan hidup alam. Ayo jadikan go green sebagai gaya
                hidup, dengan tindakan sederhana, kita bisa memberikan dampak
                besar bagi bumi.
              </p>
            </div>
            <div className="col-lg-5 d-flex justify-content-center">
              <img
                src="https://i.ibb.co/gwHhDPb/11zon-cropped-1.png"
                className="mb-3"
                width="300px"
                height="300px"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

        {/* Kategori */}
        <div className="container">
        <h1 className="text-center my-5">KATEGORI</h1>
        <div className="row">

          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <Link to="/kategori/organik" className="text-decoration-none">
              <div className="card rounded-2">
                <img
                  className="card-img-top"
                  src="https://i.ibb.co/LJjsP1k/organik3-removebg-preview.png"
                  alt="Card image cap"
                  width="350px"
                  height="350px"
                />
                <div className="card-body">
                  <h4 className="text-center">Organik</h4>
                </div>
              </div>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-4">
            <Link to="/kategori/anorganik" className="text-decoration-none">
              <div className="card rounded-2">
                <img
                  className="card-img-top"
                  src="https://i.ibb.co/N7kh3wD/anorganik.png"
                  alt="Card image cap"
                  width="350px"
                  height="350px"
                />
                <div className="card-body">
                  <h4 className="text-center">Anorganik</h4>
                </div>
              </div>
            </Link>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <Link to="/kategori/b3" className="text-decoration-none">
              <div className="card rounded-2">
                <img
                  className="card-img-top"
                  src="https://i.ibb.co/vYm9NKs/radioaktif.png"
                  alt="Card image cap"
                  width="350px"
                  height="350px"
                />
                <div className="card-body">
                  <h4 className="text-center">B3</h4>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

        {/* Fokus Project */}
        <section className="container-fluid mt-5 fp pb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 txtfp1">
              <h1 className="fw-bold text">
                Fokus, Project
                <br />
                Campaign
              </h1>
            </div>
            <div className="col-md-6 col-sm-12 txtfp2">
              <p className="fw-medium fs-4 txt">
                Kami adalah generasi penerus, dengan aksi go green, kami hadir
                untuk menjaga bumi agar tetap lestari. Setiap langkah kecil,
                menuju go green, adalah kontribusi besar bagi bumi yang kita
                cintai.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row fokus">
            <div className="col-sm-4 text-center mb-3">
              <div
                className="card h-100"
                onClick={handleToggleWasteManagement}
              >
                <div className="card-body bg-warna1 py-3 ffg1">
                  <img
                    src="https://i.ibb.co/p1GnZgQ/recycle.png"
                    className="mb-3"
                    width="73px"
                    height="73px"
                    alt=""
                  />
                  <h3>Pengelola limbah</h3>
                </div>
              </div>
            </div>
            <div className="col-sm-4 text-center mb-3">
              <div
                className="card h-100"
                onClick={handleToggleRenewableEnergy}
              >
                <div className="card-body bg-warna4 py-3 ffg2">
                  <img
                    src="https://i.ibb.co/ZXF5xct/energy.png "
                    className="mb-3"
                    width="70px"
                    height="70px"
                    alt=""
                  />
                  <h3>Energi Terbarukan</h3>
                </div>
              </div>
            </div>
            <div className="col-sm-4 text-center mb-3">
              <div className="card h-100" onClick={handleToggleText}>
                <div className="card-body bg-warna3 py-3 ffg3">
                  <img
                    src="https://i.ibb.co/6B7tByN/education.png "
                    className="mb-3"
                    width="70px"
                    height="70px"
                    alt=""
                  />
                  <h3>Edukasi & sosialisasi</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showWasteManagement && (
          <section className="container-fluid mt-4">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="card dc1">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <img
                            src="https://i.ibb.co/v3gDWrZ/Whats-App-Image-2023-06-14-at-16-45-52.jpg"
                            alt="Gambar"
                            className="img-fluid"
                            style={{ width: '150px', height: '150px' }}
                          />
                        </div>
                        <div className="col-md-6">
                          <h4 className="mb-3 text-bold">Pengolahan limbah</h4>
                          <p className="mt-4">
                            Projek ini bertujuan untuk mengurangi jumlah limbah yang dihasilkan dan
                            memastikan bahwa limbah yang dihasilkan diolah dengan benar, sehingga tidak
                            mencemari lingkungan.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {showRenewableEnergy && (
          <section className="container-fluid mt-4">
            <div className="container ">
              <div className="row">
                <div className="col">
                  <div className="card dc2">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <img
                            src="https://i.ibb.co/T1prhKG/Whats-App-Image-2023-06-14-at-16-45-15.jpg"
                            alt="Gambar"
                            className="img-fluid"
                            style={{ width: '150px', height: '150px' }}
                          />
                        </div>
                        <div className="col-md-6">
                          <h4 className="mb-3">Energi terbarukan</h4>
                          <p className="mt-3">
                            Projek ini bertujuan untuk meningkatkan penggunaan sumber energi terbarukan
                            seperti tenaga surya, tenaga angin, dan hidroelektrik, yang lebih ramah lingkungan
                            daripada sumber energi fosil.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {showText && (
          <section className="container-fluid mt-4">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="card dc3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <img
                            src="https://i.ibb.co/0K70X0C/Whats-App-Image-2023-06-14-at-16-44-19.jpg"
                            alt="Gambar"
                            className="img-fluid"
                            style={{ width: '150px', height: '150px' }}
                          />
                        </div>
                        <div className="col-md-6">
                          <h4 className="mb-3">Edukasi & sosialisasi</h4>
                          <p className="mt-3">
                            Projek ini bertujuan untuk meningkatkan kesadaran masyarakat tentang pentingnya
                            menjaga lingkungan dan cara-cara yang dapat dilakukan untuk melakukannya.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </section>

        {/* Fun Fact */}
        <section className="container-fluid project">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 rounded-4 textff">
              <h1 className="fw-bold text">
                Fun<span> Fact</span>
                <br />
                <img
                  src="https://i.ibb.co/93zFQRg/thinkingremovebgpreview-1-2x.png"
                  width="80px"
                  height="80px"
                  alt=""
                  
                />
                Guys!!
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 fs-5 fakta textff1">
              <p>
                Ternyata fakta menarik tentang sampah kertas dan tissue
                membutuhkan sumber daya alam berupa 27.000 batang kayu.
                Pemakaian yang tinggi akan produk yang terbuat dari kayu ini,
                ternyata sulit untuk dilakukan daur ulang. Sehingga tidak heran
                sampah kertas dan tissue menumpuk bersama sampah plastik. Hal
                ini akan membuat lingkungan menjadi rusak. Selain sedikitnya
                pohon di bumi, juga dapat menyebabkan pencemaran lingkungan dan
                berbagai dampak lainnya seperti air sungai meluap dan
                menyebabkan banjir.
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

export default Home;
