import RestaurantCard from "./RestaurantCard";

function Restaurants(props) {
    return (
        <div className="content">
            <h4 className="text-2xl font-bold">TRENDING RESTAURANTES</h4>
            {
                props.restaurants.map((rest, index) => {
                    return (
                        <RestaurantCard rest={rest} key={index}/>
                    )
                })
            }
        </div>
    );
}

export default Restaurants;