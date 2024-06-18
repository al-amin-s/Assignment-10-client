import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";




const CraftItemsCardDetails = () => {
    const details = useLoaderData();
    console.log(details)

    return (
        <div>
            <div className="card lg:card-side mt-20 shadow-xl">
                <figure
                 className="lg:w-3/5"
                 ><img className="" src={details?.imageUrl
                } alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{details?.itemName
                    }</h2>
                    <p>{details?.description
                    }</p>
                    <h2><span className="text-xl font-bold">Status: </span>{details?.status}</h2>
                    <h2><span className="text-xl font-bold">Rating: </span>{details?.rating}</h2>
                    <h2><span className="text-xl font-bold">Processing Time:</span> {details?.processingTime}</h2>
                    <h2><span className="text-xl font-bold">Price:</span> {details?.price}</h2>
                    <h2><span className="text-xl font-bold">Author: </span>{details?.userName}</h2>

                </div>
            </div>
        </div>
        


    );
};

export default CraftItemsCardDetails;