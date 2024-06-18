import { useEffect, useState } from "react";

import CategoryCard from "./CategoryCard";




const Category = () => {
// const category=useLoaderData();
// console.log(category)
const [caegorys,setCategory]=useState([])
useEffect(() => {
    fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCategory(data)
        })
},[])

console.log(caegorys)
    return (
        <div className="pb-4">


            <div className="my-20">
                <div className="roboto-bold text-6xl font-bold text-center  text-[#121111]">Category</div>
                <p className=" text-center max-w-5xl mx-auto text-xl pt-10 text-[#595959]">Welcome to our Craft Items section, where creativity knows no bounds! Discover a treasure trove of handmade wonders crafted with passion and skill by talented artisans from around the world. From intricately woven textiles to delicately sculpted ceramics, each piece tells a unique story and reflects the artisan dedication to their craft.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
                {
                    caegorys?.map(caegory=><CategoryCard key={caegory._id} category={caegory}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Category;