import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons'

function Search() {
    return (
        <div className="mb-20">
            <form className="bg-white border-green ">
                <FontAwesomeIcon icon={faSearch} className="color-green icon-search"/>
                <input placeholder="Search Food..." />
                <button className="btn btn-search">
                    <FontAwesomeIcon icon={faFilter} className="icon-filter"/>
                </button>
            </form>
        </div>
    );
}

export default Search;
