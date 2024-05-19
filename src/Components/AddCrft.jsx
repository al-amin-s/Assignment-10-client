import Swal from "sweetalert2";



const AddCrft = () => {
    const handleAdd = event => {
        event.preventDefault();
        const from = event.target;
        const itemName = from.itemName.value;
        const category = from.category.value;
        const description = from.description.value;
        const price = from.price.value;
        const rating = from.rating.value;
        const customization = from.customization.value;
        const processingTime = from.processingTime.value;
        const status = from.status.value;
        const email = from.email.value;
        const userName = from.userName.value;
        const imageUrl = from.imageUrl.value;

        const newArt = {
            itemName,
            category, description, price, rating, customization, processingTime, status, email, userName, imageUrl
        }
        console.log(newArt)

        fetch('http://localhost:5000/art/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newArt)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                console.log(data)
                if (data.insertedId
                ) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product added successfuly',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Product addition attemp faild!',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    })
                }
            })




    }




    return (
        <div className="mt-20">
            <div className="card shrink-0 w-full max-w-5xl shadow-2xl bg-[#ffe3e3] mx-auto">
                <div className="mx-auto text-center pt-7">
                    <h1 className="text-5xl font-bold text-[#ea8f8f]">Add Art & Craft Items</h1>
                    <p className="text-xl text-[#e3afaf]">Become a Part of Our Artistic Community by Adding <br /> Your Masterpiece to Our Collection</p>
                </div>
                <form onSubmit={handleAdd} className="card-body">

                    <div className="flex gap-5">
                        <div className="form-control w-1/2 shadow-xl">
                            <label className="label">
                                <span className="label-text">Item name</span>
                            </label>
                            <input type="text" placeholder="Item name" name="itemName" className="input input-bordered  " required />
                        </div>
                        <div className="form-control w-1/2 shadow-xl">
                            <label className="label">
                                <span className="label-text">Sub category name</span>
                            </label>
                            <input type="text" placeholder="Sub category name" name="category" className="input input-bordered " required />

                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="form-control w-1/2 shadow-xl">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <input type="text" placeholder="Short description" name="description" className="input input-bordered  " required />
                        </div>
                        <div className="form-control w-1/2 shadow-xl">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="Price" name="price" className="input input-bordered " required />

                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="form-control w-1/2 shadow-xl">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" placeholder="Rating" name="rating" className="input input-bordered  " required />
                        </div>
                        <div className="form-control w-1/2 shadow-xl">
                            <label className="label">
                                <span className="label-text">Customization</span>
                            </label>
                            <input type="text" placeholder="Customization" name="customization" className="input input-bordered " required />

                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="form-control w-1/2 shadow-xl">
                            <label className="label">
                                <span className="label-text">Processing time</span>
                            </label>
                            <input type="text" placeholder="Processing time" name="processingTime" className="input input-bordered  " required />
                        </div>
                        <div className="form-control w-1/2 shadow-xl">
                            <label className="label">
                                <span className="label-text">Stock status</span>
                            </label>
                            <input type="text" placeholder="Stock status" name="status" className="input input-bordered " required />

                        </div>
                    </div>
                    <div className="flex gap-5 ">
                        <div className="form-control w-1/2 shadow-xl">
                            <label className="label">
                                <span className="label-text">email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered  " required />
                        </div>
                        <div className="form-control w-1/2 shadow-xl">
                            <label className="label">
                                <span className="label-text">User name</span>
                            </label>
                            <input type="text" placeholder="User name" name="userName" className="input input-bordered " required />

                        </div>
                    </div>
                    <div className="form-control w-full shadow-xl">
                        <label className="label">
                            <span className="label-text">Image Url</span>
                        </label>
                        <input type="text" placeholder="Image Url" name="imageUrl" className="input input-bordered " required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#c78d8d] shadow-xl border-none">Add product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCrft;
