

const CategoryCard = ({category}) => {
    console.log(category)
    const {artist,dimensions,image,sub_category,
        title,year_created} = category;
    return (
        <div>
            <div className="card mx-auto w-96 bg-[#a784f3] shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="text-[#3d1d83] card-body  text-left">
                    <h2 className="card-title">{sub_category}</h2>
                    <p>{title}</p>
                    <h1><span className="text-lg font-bold">Dimensions:</span> {dimensions}</h1>
                    <h1><span className="text-lg font-bold">Artist:</span> {artist}</h1>
                    <h1><span className="text-lg font-bold">Created Year:</span> {year_created}</h1>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;






