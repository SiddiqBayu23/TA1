import Container from 'react-bootstrap/Container';

function Banner({gbr, kategori, desc}) {
  return (
    <Container fluid className='gradient1'>
      <Container>
        <div className="row align-items-center">
          <div className="col-sm-4 my-5">
            <img src={gbr} className="rounded-3" alt="" width="300px" height="300px"/>
          </div>
          <div className="col-sm-8 my-4">
            <h2><strong>{kategori}</strong></h2>
              {desc}
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Banner