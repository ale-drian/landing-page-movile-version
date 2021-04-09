import Categories from "./Categories";
import Restaurants from "./Restaurants";
import Search from "./Search";

function Content(props) {
    return (
        <div>
            <Categories categories={props.categories}/>
            <Search/>
            <Restaurants restaurants={props.restaurants}/>
        </div>
    );
}

export default Content;
