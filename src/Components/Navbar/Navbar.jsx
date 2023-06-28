import './Navbar.css'
import image1 from "../../assets/img/pokemon-logo-png-1428.png";

const Navbar =() => {
    return(
        <div className='navbar'>
                <img src={image1} alt="logo" />
        </div>
    )
}

export default Navbar;