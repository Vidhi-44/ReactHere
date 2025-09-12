import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css"
/**
 * Header
 * -Logo
 * -Nav Items
 * Body
 * -Search Bar
 * --Restaurant container
 *   - Restaurant cards
 * Footer
 * -Copyright
 *  -Link
 *  -Adderss
 */

const Header = () => {
  return (
    <div className="header">
      <div className="img-logo">
        <img className="logo" alt="img" src="https://i.pinimg.com/736x/7c/22/ea/7c22eaf9f2d600fde2fef2a666e4bfb2.jpg" />
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

const ReastaurantCard = (props)=>{
  return (
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img
      className="res-img"
      alt="image"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3A396fokcR7Sh__1JeA9DELoijf1rYUAQnQ&s"/>
      <h3>{props.resName}</h3>
      <h4>{props.cusisine}</h4>
      <h4>4.5 stars</h4>
      <h4>40 mins</h4>

    </div>
  )
}

const Body = ()=>{
  return(
    <div className="body">
    <div className="search-bar">Search</div>
    <div className="res-container">
     
      <ReastaurantCard
      resName = "Tinku's Cafe"
      cusisine = "Nort Indian, South Indian, Russian"
      /> 
        <ReastaurantCard
      resName = "KFC"
      cusisine = "Burger, Non-veg"
      /> 
    </div>
    </div>
    

  )
}

const AppLayout = () => {
  return <div className="app">
    <Header/>
    <Body/>
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
