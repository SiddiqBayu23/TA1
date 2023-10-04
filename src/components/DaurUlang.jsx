import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';

function DaurUlang({eventKey, header, judul, desc, imgex}){
  return(
    <>
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header><h5>{header}</h5></Accordion.Header>
          <Accordion.Body>
            <p>{judul}</p>
            <p>{desc}</p>
            <div className='text-center p-2'>
              <img src={imgex} className="rounded-3" alt="" width="350px" height="250px" />
            </div>
          </Accordion.Body>
      </Accordion.Item>
    </>
  )
}

export default DaurUlang