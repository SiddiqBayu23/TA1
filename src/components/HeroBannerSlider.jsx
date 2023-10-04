import { useContext } from "react";
import { Carousel } from "react-bootstrap";
import { Context } from "../context/BannerContext";

function HeroBannerSlider() {
  const { banner } = useContext(Context);

  return (
    <>
      <Carousel>
        {banner.map((item) => (
          <Carousel.Item key={item.id} interval={1000}>
            <img className="d-block w-100" src={item.gambar} alt="Slide" height={500} />
            <Carousel.Caption
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "white",
                padding: "10px",
                width: "100vw",
                height: "500px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3 style={{ margin: "0" }}>{item.caption1}</h3>
              <p style={{ margin: "0" }}>{item.caption2}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default HeroBannerSlider;