import Spinner from 'react-bootstrap/Spinner';
import './loader.css'

const Loader = () => {
  return (
    <div className='loader'>
        <Spinner animation="grow" variant="primary"/>
    </div>
  )
}

export default Loader
