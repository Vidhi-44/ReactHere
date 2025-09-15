import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const[resInfo, setResInfo] = useState(null)

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async()=>{
        const data = await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7169967&lng=75.86830739999999&restaurantId=67386&catalog_qa=undefined&submitAction=ENTER")
        const response = await data.json()
        console.log(response)
       setResInfo(response)
    }

   if(resInfo == null) { return <Shimmer/> }
const itemCards =
  resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories;


console.log(itemCards);

  return (
    <div className="menu">
        <h1>
           {resInfo.data.cards[0].card.card.text}
        </h1>
         <h3>
        {resInfo.data.cards[2].card.card.info.cuisines.join(",")} :  {resInfo.data.cards[2].card.card.info.costForTwoMessage}
        </h3>
          
        <h2> Menu </h2>
            <ul>
                {itemCards.map((item)=><li key={item?.itemCards[0]?.card?.info?.id}>{item?.itemCards[0]?.card?.info?.name}</li>)}
                {/* <li>
                    {itemCards[0]?.itemCards[0]?.card?.info?.name}
                </li>
                   <li>
                    Coffee
                </li>
                   <li>
                    Burgers
                </li> */}

            </ul>
       
    </div>
  )
}

export default RestaurantMenu