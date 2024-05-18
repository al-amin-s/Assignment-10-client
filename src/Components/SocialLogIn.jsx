import useAuth from "./Hooks/useAuth";


const SocialLogIn = () => {
    const {googleLogIn,gitHubLogIn}=useAuth();
    return (
        <div className="flex flex-col mt-[35px] gap-10 w-1/2">
            <div className="form-control w-full shadow-xl">
                <button 
                onClick={googleLogIn}
                className="btn bg-[#f1ba93] border-none ">Google</button>
            </div>
            <div className="form-control w-full shadow-xl">
                <button onClick={gitHubLogIn} className="btn bg-[#f1ba93] border-none">Git Hub</button>

            </div>
        </div>
    );
};

export default SocialLogIn;