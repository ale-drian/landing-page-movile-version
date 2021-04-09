import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import {faStar as faStarOutline} from '@fortawesome/free-regular-svg-icons'

function RaitingStarts(props) {
    let rating = props.rating
    let integerPart = Math.floor(rating)
    let decimalPart = rating - integerPart
    let contadorDecimal = 0

    return (
        <div>
            {[...Array(5)].map((e, i) => {
                if (i<integerPart){
                    return <FontAwesomeIcon className="color-green" key={i} icon={faStar}/>
                }else{
                    if (contadorDecimal == 0 && decimalPart != 0){
                        contadorDecimal++;
                        return <FontAwesomeIcon className="color-green" key={i} icon={faStarHalfAlt}/>
                    }else{
                        return <FontAwesomeIcon className="color-green" key={i} icon={faStarOutline}/>
                    }
                }
            })}
            <span>&nbsp;({props.rating})</span>
        </div>
    )
}

export default RaitingStarts;