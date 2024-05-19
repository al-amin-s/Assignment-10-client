
import { useLoaderData } from "react-router-dom";
import CraftItemSection from "./CraftItemSection";
import Slider from "./Slider";
import CraftItemsCart from "./CraftItemsCart";
import Frames from "./Frames";

const Home = () => {
    const arts=useLoaderData()
    console.log(arts)
    return (
        <div className=" ">
            <Slider></Slider>
            <CraftItemSection>
             </CraftItemSection>
            <div className="grid md:grid-cols-3 gap-5">
            {
                arts.map(art=><CraftItemsCart
                key={art._id}
                art={art}
                >

                </CraftItemsCart>)
            }
            </div>
            <Frames></Frames>
        </div>
    );
};

export default Home;