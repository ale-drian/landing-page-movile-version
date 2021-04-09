import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import RaitingStarts from './Raiting';

function RestaurantCard(props) {
    return (
        <article className="flex space-x-4 card-restaurant my-4">
            <img src={props.rest.image} alt="" className="flex-none w-18 h-18 object-cover bg-gray-100" width="144" height="144" />
            <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
                <h2 className="text-2xl font-bold text-black mb-0.5">
                    {props.rest.name}
                </h2>
                <div className="flex flex-wrap text-sm font-medium whitespace-pre">
                    <div className="flex-none w-full mt-0.5 font-normal">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="color-gray"/>&nbsp;
                        <p className="inline color-gray" >{props.rest.location}</p>
                        <RaitingStarts rating={props.rest.rating}/>
                    </div>
                </div>
                <div>
                    <p>${props.rest.cost_per_person}/ <span className="color-gray">Per Person</span></p>
                </div>
            </div>
        </article>
    )
}

export default RestaurantCard;
