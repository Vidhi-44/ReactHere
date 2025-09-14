import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css"
import resList from "./src/Data.json";

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

const RestaurantCard = ({ name, cuisines, avgRating, sla, cloudinaryImageId }) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-img"
        alt={name}
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

const Body = ()=>{
  return(
    <div className="body">
    <div className="search-bar">Search</div>
    <div className="res-container">
     {resList.map((restaurant)=>(
      <RestaurantCard key={restaurant.info.id} {...restaurant.info}/>
     ))}
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
