import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='nav'>
      <Link to='/'>
        <div>Temperature</div>
      </Link>
      <Link to='/Humidity'>
        <div>Humidity</div>
      </Link>
    </div>
  );
}

export default NavBar;