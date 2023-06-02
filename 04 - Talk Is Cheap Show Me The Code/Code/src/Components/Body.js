import { useState } from "react";
import RestaurantCard from "../Components/RestaurantCard";
import { restaurantsList } from "../config";

function filterData (searchText, restaurants){
    const filterData = restaurants.filter((restaurant) => 
    restaurant.data.name.includes(searchText)
    );
    return filterData;
}

const Body = () => {
    const [restaurants, setRestaurants] = useState(restaurantsList);
    const [searchText, setSearchText] = useState("");

    function handleSearch(event) {
        setSearchText(event.target.value);
        const filteredData = filterData(event.target.value, restaurants);
    setRestaurants(filteredData);
  
      }

    //   function handleSubmit(event) {
    //     event.preventDefault();
    //     const filteredData = filterData(searchText, restaurants);
    //     setRestaurants(filteredData);
    //   }

  return (
    <>
      <div className="search-container">
        <form>
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={handleSearch}
        />
        
        <button 
        type="submit"
        className="search-btn"
            // onClick={() =>{
            //     //need to filter the data 
            //     const data = filterData(searchText, restaurants)
            //     //update the state - restrauants
            //     setRestaurants(data);
            // }}
            >
            Search
            </button>
            </form>
      </div>
      
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
