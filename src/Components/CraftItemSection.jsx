import { useLoaderData } from "react-router-dom";
import CraftItemsCart from "./CraftItemsCart";





const CraftItemSection = () => {
    // const arts=useLoaderData();
    // console.log(arts);
    
    return (
        <div className="border-b my-20">
            <div className="roboto-bold text-6xl font-bold text-center  text-[#000000]">Craft Items</div>
            <p className=" text-center max-w-5xl mx-auto text-xl pt-10 text-[#595959]">Welcome to our Craft Items section, where creativity knows no bounds! Discover a treasure trove of handmade wonders crafted with passion and skill by talented artisans from around the world. From intricately woven textiles to delicately sculpted ceramics, each piece tells a unique story and reflects the artisan dedication to their craft.</p>

            {/* <div className="grid md:grid-cols-3 gap-5">
            {
                arts?.slice(0, 6).map(art=><CraftItemsCart key={art._id}art={art}></CraftItemsCart>)
            }
            </div> */}
        </div>
    );
};

export default CraftItemSection;