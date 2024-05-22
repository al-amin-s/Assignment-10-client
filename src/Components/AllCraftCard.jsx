import useAuth from "./Hooks/useAuth";


const AllCraftCard = ({ allCraft }) => {
    const { user } = useAuth()

    console.log(user)
    const { itemName, category, description, price, rating, customization, processingTime, status, email, userName, imageUrl } = allCraft;
    return (
        <div>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    {/* <thead>
      <tr>
        <th>
          
          
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead> */}
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>

                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={imageUrl} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{itemName}</div>

                                    </div>
                                </div>
                            </td>
                            <td>

                                <p>{category}</p>
                            </td>
                            <td>{price}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>

                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default AllCraftCard;