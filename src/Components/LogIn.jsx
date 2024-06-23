
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import useAuth from "./Hooks/useAuth";
import SocialLogIn from "./SocialLogIn";

const LogIn = () => {
    const { signInUser } = useAuth();
    



    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = data => {
        const { email, password } = data;
        signInUser(email, password)
            .then(result => {
                console.log(result)
                
               if (result){
                Swal.fire({
                    title: 'Error!',
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  })
               }
            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div className="mt-20">
            <div className="card shrink-0 w-full max-w-5xl shadow-2xl bg-[#ffe3e3] mx-auto p-5">
                <div className="mx-auto text-center pt-7">
                    <h1 className="text-5xl font-bold text-[#ea8f8f]">Log In</h1>
                    <p className="text-xl mt-5 text-[#e3afaf]">Join Our Creative Family! Sign Up to Unleash Your <br /> Artistic Potential</p>
                </div>


                <div className=" md:flex  gap-10 justify-center items-center ">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">




                        <div className=" w-full">
                            <div className="form-control w-full shadow-xl">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered  "
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className="bg-[#a64545] text-center p-2 rounded-lg shadow-2xl">Email is required</span>}

                            </div>
                            <div className="form-control w-full shadow-xl">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" className="input input-bordered "
                                    {...register("password", { required: true })}
                                />
                                {errors.password && <span className="bg-[#a64545] text-center p-2 rounded-lg shadow-2xl">Password is required</span>}


                            </div>
                        </div>
                        <div className="form-control mt-6">
                        <button  className="btn bg-[#c78d8d] shadow-xl border-none "><input type="submit" /></button>
                </div>
                    </form>
                    
                    <SocialLogIn></SocialLogIn>
                    






                </div>




                <div className="mx-auto text-center pt-7">
                    <p className="text-xl">New here? go to <Link to="/registration"><span className="text-[#f2adad]" >Register</span></Link></p>
                </div>

                <div className="form-control mt-6">
                </div>

            </div>
        </div >
    );
};

export default LogIn;














// import { Link, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import useAuth from "./Hooks/useAuth";
// import SocialLogIn from "./SocialLogIn";

// const LogIn = () => {
//     const { signInUser } = useAuth();
//     const { register, handleSubmit, formState: { errors }, setError } = useForm();
//     const navigate = useNavigate();

//     const verifyPassword = (password) => {
//         if (password.length < 6) {
//             return { isValid: false, message: 'Password must be at least 6 characters long' };
//         }
//         if (!/[A-Z]/.test(password)) {
//             return { isValid: false, message: 'Password must contain at least one uppercase letter' };
//         }
//         if (!/[a-z]/.test(password)) {
//             return { isValid: false, message: 'Password must contain at least one lowercase letter' };
//         }
//         return { isValid: true, message: 'Password is valid' };
//     };

//     const onSubmit = data => {
//         const { email, password } = data;
//         const passwordValidation = verifyPassword(password);
//         if (!passwordValidation.isValid) {
//             setError("password", { type: "manual", message: passwordValidation.message });
//             return;
//         }
//         signInUser(email, password)
//             .then(result => {
//                 console.log(result);
//                 // navigate to the desired page after login
//                 navigate("/"); // Change the route as per your application flow
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     };

//     return (
//         <div className="mt-20">
//             <div className="card shrink-0 w-full max-w-5xl shadow-2xl bg-[#ffe3e3] mx-auto p-5">
//                 <div className="mx-auto text-center pt-7">
//                     <h1 className="text-5xl font-bold text-[#ea8f8f]">Log In</h1>
//                     <p className="text-xl mt-5 text-[#e3afaf]">Join Our Creative Family! Sign Up to Unleash Your <br /> Artistic Potential</p>
//                 </div>

//                 <div className="md:flex gap-10 justify-center items-center">
//                     <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//                         <div className="w-full">
//                             <div className="form-control w-full shadow-xl">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input
//                                     type="email"
//                                     placeholder="Email"
//                                     className="input input-bordered"
//                                     {...register("email", { required: "Email is required" })}
//                                 />
//                                 {errors.email && (
//                                     <span className="bg-[#a64545] text-center p-2 rounded-lg shadow-2xl">
//                                         {errors.email.message}
//                                     </span>
//                                 )}
//                             </div>
//                             <div className="form-control w-full shadow-xl">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <input
//                                     type="password"
//                                     placeholder="Password"
//                                     className="input input-bordered"
//                                     {...register("password", { required: "Password is required" })}
//                                 />
//                                 {errors.password && (
//                                     <span className="bg-[#a64545] text-center p-2 rounded-lg shadow-2xl">
//                                         {errors.password.message}
//                                     </span>
//                                 )}
//                             </div>
//                         </div>
//                         <div className="form-control mt-6">
//                             <button className="btn bg-[#c78d8d] shadow-xl border-none">
//                                 <input type="submit" />
//                             </button>
//                         </div>
//                     </form>
//                     <SocialLogIn />
//                 </div>

//                 <div className="mx-auto text-center pt-7">
//                     <p className="text-xl">
//                         New here? go to{" "}
//                         <Link to="/registration">
//                             <span className="text-[#f2adad]">Register</span>
//                         </Link>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LogIn;
