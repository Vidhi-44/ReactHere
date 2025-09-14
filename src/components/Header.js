import {LOGO_URL} from "../utils/constants.js"

const Header = () => {
  return (
    <div className="header">
      <div className="img-logo">
        <img className="logo" alt="img" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Home
          </li>
           <li>
            About US
          </li> <li>
            Contact Us
          </li>
           <li>
             Cart
            <img  className="cart-icon" src="https://i.pinimg.com/736x/51/5f/c5/515fc584baa97d0aae930bc6161a864f.jpg"/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;