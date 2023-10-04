import 'bootstrap/dist/css/bootstrap.min.css';

function Card2({img, name}){
    return(
      <>
        <div className='col-sm-4 mb-5 text-center'>
          <div>
            <img src={img} className='rounded-circle' width={100} height={100} />
              <h6 className='mt-3'>{name}</h6>
          </div>
        </div>
      </>
    )
}

export default Card2