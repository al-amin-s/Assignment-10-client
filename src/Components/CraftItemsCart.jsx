import { Link } from "react-router-dom";


const CraftItemsCart = ({ art }) => {
    const { _id, itemName, category, description, price, rating, customization, processingTime, status, email, userName, imageUrl } = art;
    console.log(_id, itemName)
    return (
        <div className=" ">
            <div className="card card-compact w-full mx-auto p-3 ">
                <figure className="rounded-full"><img src={imageUrl} alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="roboto-medium text-4xl font-semibold">{itemName}</h2>
                    <div className=" flex">
                        <p ><span className="text-xl roboto-medium">Category:</span><span className="text-lg roboto-regular"> {category}</span></p>
                        <p><span className="text-xl roboto-medium">Price:</span><span className="text-lg roboto-regular"> {price}</span></p>
                    <p><span className="text-xl roboto-medium">Rating:</span><span className="text-lg roboto-regular"> {rating}</span></p>

                    </div>
                    <p><span className="text-xl roboto-medium">Status:</span><span className="text-lg roboto-regular"> {status}</span></p>
                    <div className="card-actions justify-center">
                        <Link to={`/art/${_id}`}><button className="btn bg-[#37606f]">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CraftItemsCart;