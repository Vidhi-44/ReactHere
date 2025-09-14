import resList from "../utils/Data.json";
import RestaurantCard from "./RestaurauntCard";
import { useState } from "react";

const Body = ()=>{
const [list, setList] = useState(resList);
  return(
    <div className="body">
    <div className="filter">
      <button className="filter-btn" 
      onClick={()=>{ const filteredList = resList.filter(
              (res) => res.info.avgRating > 4
            )
            setList(filteredList)}}>Top rated Restaurant</button>
    </div>
    <div className="res-container">
     {list.map((restaurant)=>(
      <RestaurantCard key={restaurant.info.id} {...restaurant.info}/>
     ))}
    </div>
    </div>
    

  )
}

export default Body;