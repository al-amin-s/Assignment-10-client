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
            <h1>my craft</h1>
            <div className="grid md:grid-cols-3">
                {
                    item?.map(myCraft => <MyCraftCard key={myCraft._id} myCraft={myCraft}>hello</MyCraftCard>)

                }
            </div>
        </div>
    );
};

export default MyCraft;