import { useEffect, useState } from "react";
import useAuth from "./Hooks/useAuth";
import MyCraftCard from "./MyCraftCard";


const MyCraft = () => {
    const { user } = useAuth() || {};
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/art/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItem(data)
            })
    }, [user])
    return (
        <div>
            
            <div className="grid md:grid-cols-3">
                {
                    item?.map(myCraft => <MyCraftCard key={myCraft._id} myCraft={myCraft}>hello</MyCraftCard>)

                }
            </div>
        </div>
    );
};

export default MyCraft;



// import { useEffect, useState } from "react";
// import useAuth from "./Hooks/useAuth";
// import MyCraftCard from "./MyCraftCard";

// const MyCraft = () => {
//     const { user } = useAuth() || {};
//     const [item, setItem] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         if (user?.email) {
//             fetch(`http://localhost:5000/art/${user.email}`)
//                 .then(res => {
//                     if (!res.ok) {
//                         throw new Error('Network response was not ok');
//                     }
//                     return res.json();
//                 })
//                 .then(data => {
//                     setItem(data);
//                 })
//                 .catch(error => {
//                     setError(error.message);
//                     console.error('There was a problem with the fetch operation:', error);
//                 });
//         }
//     }, [user]);

//     if (!user) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div>
//             {error && <p className="error">{error}</p>}
//             <div className="grid md:grid-cols-3 gap-4">
//                 {item?.map(myCraft => (
//                     <MyCraftCard key={myCraft._id} myCraft={myCraft}>hello</MyCraftCard>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default MyCraft;
