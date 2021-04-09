function CategoriesCard(props) {
    return (
        <div className="categorie-card">
            <img src={props.catg.image}
                target={props.catg.name} />
            <p className="text-center font-medium">{props.catg.name}</p>
        </div>
    );
}

export default CategoriesCard;
