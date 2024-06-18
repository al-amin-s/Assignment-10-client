import { Link } from "react-router-dom";
import useAuth from "./Hooks/useAuth";


const AllCraftCard = ({ allCraft }) => {
    const { user } = useAuth()

    console.log(user)
    const { itemName, _id, category, description, price, rating, customization, processingTime, status, email, userName, imageUrl } = allCraft;
    return (
        <tr>
        
        <td>{itemName}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td className="flex gap-4">
        <Link to={`/art/${_id}`}><button className="btn ">View Details</button></Link>
            
        </td>
    </tr>
    );
};

export default AllCraftCard;