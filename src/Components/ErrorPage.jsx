import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="bg-[#ffe3e3] min-h-screen  p-8 ">
            <div className=" card w-2/5 bg-[#f9f7f7]  glass m-auto p-2">
                <figure className="shadow-2xl"><img  src="https://i.ibb.co/DwcQRDs/3d-render-cross-mark-isolated-icon-error-x-symbol.jpg" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="text-6xl text-center">Error</h2>
                    <p className="text-center">You make a mistake</p>
                    <div className="card-actions justify-center">
                        <Link to="/home"><button className="btn bg-[#ec6464] text-white ">Go to home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;