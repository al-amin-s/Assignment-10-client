
import { useLoaderData } from "react-router-dom";
import CraftItemSection from "./CraftItemSection";
import Slider from "./Slider";
import CraftItemsCart from "./CraftItemsCart";
import Frames from "./Frames";
import Category from "./Category";
import About from "./About";
import Footer from "./Footer";

const Home = () => {
    const arts=useLoaderData()
    console.log(arts)
    return (
        <div className=" ">
            <Slider></Slider>
            <div className="">
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
            </div></div>
            <Category></Category>
            <Frames></Frames>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;