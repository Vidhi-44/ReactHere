import { useState } from "react";
import {LOGO_URL} from "../utils/constants.js"
import { Link } from "react-router-dom";

const Header = () => {
  const [ btnNAme, setbtnNAme] = useState("Login")

  return (
    <div className="header">
      <div className="img-logo">
        <img className="logo" alt="img" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
           <li>
           <Link to={"/about"}> About US</Link>
          </li> <li>
           <Link to={"/contact"}> Contact Us</Link>
          </li>
           <li>
             Cart
            <img  className="cart-icon" src="https://i.pinimg.com/736x/51/5f/c5/515fc584baa97d0aae930bc6161a864f.jpg"/>
          </li>
          <button className="login" onClick={()=>{ btnNAme == "Login" ? setbtnNAme("LogOut") : setbtnNAme("Login") }}>{btnNAme}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;