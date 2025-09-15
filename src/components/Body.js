import RestaurantCard from "./RestaurauntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([])
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7169967&lng=75.86830739999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const parsedData = await data.json();
    setList(
      parsedData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
       setFilteredList(
      parsedData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return list.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-box">
          <input
            className="serach"
            type="text"
            placeholder="search your fav..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestaurant = list.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.info.avgRating > 4
            );
            setList(filteredList);
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((restaurant) => (
         <Link key={restaurant.info.id} to={"/restaurants/:" + restaurant.info.id}><RestaurantCard  {...restaurant.info} /></Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
