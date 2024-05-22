import { useLoaderData } from "react-router-dom";
import AllCraftCard from "./AllCraftCard";

const AllCraft = () => {
    const allCrafts = useLoaderData();
    console.log(allCrafts)
    return (
        <div>
            <div className="my-20">
                <div className="roboto-bold text-6xl font-bold text-center  text-[#000000]">All Category</div>
                <p className=" text-center max-w-5xl mx-auto text-xl pt-10 text-[#595959]">Welcome to our Craft Items section, where creativity knows no bounds! Discover a treasure trove of handmade wonders crafted with passion and skill by talented artisans from around the world. From intricately woven textiles to delicately sculpted ceramics, each piece tells a unique story and reflects the artisan dedication to their craft.</p>
            </div>
            
            
            <div>
                {
                    allCrafts.map(allCraft => <AllCraftCard key={allCraft._id} allCraft={allCraft}></AllCraftCard>)
                }
            </div>
        </div>
    );
};

export default AllCraft;