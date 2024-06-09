import useAuth from "./Hooks/useAuth";


const AllCraftCard = ({ allCraft }) => {
    const { user } = useAuth()

    console.log(user)
    const { itemName, category, description, price, rating, customization, processingTime, status, email, userName, imageUrl } = allCraft;
    return (
        <tr>
        
        <td>{itemName}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td className="flex gap-4">
            <button className="btn ">View Details</button>
            
        </td>
    </tr>
    );
};

export default AllCraftCard;