
const AddCrft = () => {
    return (
        <div className="mt-20">
            <div className="card shrink-0 w-full max-w-5xl shadow-2xl bg-[#ffe3e3] mx-auto">
                <div className="mx-auto text-center pt-7">
                    <h1 className="text-5xl font-bold text-[#ea8f8f]">Add Art & Craft Items</h1>
                    <p className="text-xl text-[#e3afaf]">Become a Part of Our Artistic Community by Adding <br /> Your Masterpiece to Our Collection</p>
                </div>
                <form className="card-body">
                    
                    <div className="flex gap-5">
                        <div className="form-control w-1/2 shadow-xl">
                            <label className="label">
                                <span className="label-text">Item name</span>
                            </label>
                            <input type="text" placeholder="Item name" className="input input-bordered  " required />
                        </div>
                        <div className="form-control w-1/2 shadow-xl">
                            <label className="label">
                                <span className="label-text">Sub category name</span>
                            </label>
                            <input type="text" placeholder="Sub category name" className="input input-bordered " required />

                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="form-control w-1/2 shadow-xl">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <input type="text" placeholder="Short description" className="input input-bordered  " required />
                        </div>
                        <div className="form-control w-1/2 shadow-xl">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="Price" className="input input-bordered " required />

                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="form-control w-1/2 shadow-xl">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" placeholder="Rating" className="input input-bordered  " required />
                        </div>
                        <div className="form-control w-1/2 shadow-xl">
                            <label className="label">
                                <span className="label-text">Customization</span>
                            </label>
                            <input type="text" placeholder="Customization" className="input input-bordered " required />

                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="form-control w-1/2 shadow-xl">
                            <label className="label">
                                <span className="label-text">Processing time</span>
                            </label>
                            <input type="text" placeholder="Processing time" className="input input-bordered  " required />
                        </div>
                        <div className="form-control w-1/2 shadow-xl">
                            <label className="label">
                                <span className="label-text">Stock status</span>
                            </label>
                            <input type="text" placeholder="Stock status" className="input input-bordered " required />

                        </div>
                    </div>
                    <div className="flex gap-5 ">
                        <div className="form-control w-1/2 shadow-xl">
                            <label className="label">
                                <span className="label-text">email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered  " required />
                        </div>
                        <div className="form-control w-1/2 shadow-xl">
                            <label className="label">
                                <span className="label-text">User name</span>
                            </label>
                            <input type="text" placeholder="User name" className="input input-bordered " required />

                        </div>
                    </div>
                    <div className="form-control w-full shadow-xl">
                            <label className="label">
                                <span className="label-text">Image Url</span>
                            </label>
                            <input type="text" placeholder="Image Url" className="input input-bordered " required />

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
