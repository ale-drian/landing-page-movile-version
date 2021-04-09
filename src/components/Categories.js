import CategoriesCard from "./CategoriesCard";

function Categories(props) {
    return (
        <div className="grid grid-cols-3 gap-4 mb-16">
            {
            props.categories.map((catg, index)=>{
                return(
                    < CategoriesCard catg={catg} key={index}/>
                );
            })
            }
        </div>
    );
}

export default Categories;
