import './Navbar.css'
import image1 from "../../assets/img/pokemon-logo-png-1428.png";
import { UserContext } from '../../App';
import { useContext } from 'react';


const Navbar =() => {
    const valore = useContext(UserContext);
    return(
        <div className='navbar'>
                <img src={image1} alt="logo" />
                <div> {valore}</div>
        </div>
    )
}

export default Navbar;