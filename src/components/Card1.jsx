import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom"

function Card1({ktg, image, link}){
  return(
    <>
      <div className='col-sm text-center'>
        <Card>
          <Card.Body className="bg-light">
            <NavLink to={link}>
              <img src={image} width="200px" height="200px" className="rounded-3 zoom" />
            </NavLink>
            <Card.Title className="mt-3">{ktg}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Card1