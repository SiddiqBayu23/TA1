import React from 'react';
import "../index.css";

const HotNews = () => {
    return (
        <section id="hot-news">
            <div className="container my-5">
                <div className="row text-center">
                    <div className="col my-5">
                        <h1>Hot News</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="fw-bold">Sampah Plastik di Teluk Jakarta</h1>
                        <p className="fs-4 text small">Berdasarkan penelitian yang dilakukan LIPI dengan melakukan monitoring sampah yang masuk dari 9 Sungai di Jakarta, Tanggerang dan Bekasi didapatkan.</p>
                        <div className="row">
                            <div className="col-md-4 my-3">
                                <p className="color1 fw-bold">41Ton</p>
                                <p className="fw-medium">Kantong plastik digunakan di Jakarta setiap harinya (DLH jakarta)</p>
                            </div>
                            <div className="col-md-4 my-3">
                                <p className="color2 fw-bold">59%</p>
                                <p className="fw-medium">Sampah Plastik, didominasi oleh Styrofoam</p>
                            </div>
                            <div className="col-md-4 my-3">
                                <p className="color3 fw-bold">8,32</p>
                                <p className="fw-medium">Ton/hari sampah masuk ke Teluk Jakarta</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="https://images.unsplash.com/photo-1565886728041-a239b6a3ec42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" className="rounded-4 img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HotNews;