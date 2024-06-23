
// import { Link } from "react-router-dom";

// import { useForm } from "react-hook-form";

// import useAuth from "./Hooks/useAuth";



// const Registration = () => {

//     const {createUser}=useAuth();
//     // console.log(createUser)

    

//     const {register,handleSubmit,formState: { errors },} = useForm();
//     const onSubmit =data=>{
//         const {email,password}=data;
//         createUser(email,password)
//         .then(result=>{
//             console.log(result)
//         })
//         .catch(error=>{
//             console.error(error)
//         })
//     }
//     return (
//         <div className="mt-20">
//             <div className="card shrink-0 w-full max-w-5xl shadow-2xl bg-[#ffe3e3] mx-auto">
//                 <div className="mx-auto text-center pt-7">
//                     <h1 className="text-5xl font-bold text-[#ea8f8f]">Register</h1>
//                     <p className="text-xl mt-5 text-[#e3afaf]">Join Our Creative Family! Sign Up to Unleash Your <br /> Artistic Potential</p>
//                 </div>
//                 <form onSubmit={handleSubmit(onSubmit)} className="card-body">

//                     <div className="flex gap-5">
//                         <div className="form-control w-1/2 shadow-xl">
//                             <label className="label">
//                                 <span className="label-text">Name</span>
//                             </label>
//                             <input type="text" placeholder="Name" className="input input-bordered  " 
//                             {...register("name",{required:true})}
//                             />
//                             {errors.name && <span className="bg-[#a64545] text-center p-2 rounded-lg shadow-2xl">Name is required</span>}
                            
//                         </div>
//                         <div className="form-control w-1/2 shadow-xl">
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input type="email" placeholder="Email" className="input input-bordered " 
//                             {...register("email",{required:true})}
//                             />
//                             {errors.email && <span className="bg-[#a64545] text-center p-2 rounded-lg shadow-2xl">Email is required</span>}
//                         </div>
//                     </div>
//                     <div className="flex gap-5">
//                         <div className="form-control w-1/2 shadow-xl">
//                             <label className="label">
//                                 <span className="label-text">Photo URL</span>
//                             </label>
//                             <input type="text" placeholder="Photo URL" className="input input-bordered  " 
//                             {...register("photo",{required:true})}
//                             />
//                             {errors.photo && <span className="bg-[#a64545] text-center p-2 rounded-lg shadow-2xl">Photo URL is required</span>}
//                         </div>
//                         <div className="form-control w-1/2 shadow-xl">
//                             <label className="label">
//                                 <span className="label-text">Password</span>
//                             </label>
//                             <input type="password" placeholder="Password" className="input input-bordered " 
//                             {...register("password",{required:true})}
//                             />
//                             {errors.password && <span className="bg-[#a64545] text-center p-2 rounded-lg shadow-2xl">Password is required</span>}

//                         </div>
//                     </div>

//                     <div className="mx-auto text-center pt-7">
//                         <p className="text-xl">Already have a account ? go to <Link to="/login"><span className="text-[#f2adad]" >log in</span></Link></p>
//                     </div>

//                     <div className="form-control mt-6">
//                         <button className="btn bg-[#c78d8d] shadow-xl border-none">Register</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Registration;

















import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "./Hooks/useAuth";
import Swal from 'sweetalert2'

const Registration = () => {
    

    const { createUser } = useAuth();
    const { register, handleSubmit, formState: { errors }, setError } = useForm();

    const verifyPassword = (password) => {
        if (password.length < 6) {
            return { isValid: false, message: 'Password must be at least 6 characters long' };
        }
        if (!/[A-Z]/.test(password)) {
            return { isValid: false, message: 'Password must contain at least one uppercase letter' };
        }
        if (!/[a-z]/.test(password)) {
            return { isValid: false, message: 'Password must contain at least one lowercase letter' };
        }
        return { isValid: true, message: 'Password is valid' };
    };

    const onSubmit = data => {
        const { email, password } = data;
        const passwordValidation = verifyPassword(password);
        if (!passwordValidation.isValid) {
            setError("password", { type: "manual", message: passwordValidation.message });
            return;
        }
        createUser(email, password)
            .then(result => {
                console.log(result);
                // Redirect or show success message
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="mt-20">
            <div className="card shrink-0 w-full max-w-5xl shadow-2xl bg-[#ffe3e3] mx-auto">
                <div className="mx-auto text-center pt-7">
                    <h1 className="text-5xl font-bold text-[#ea8f8f]">Register</h1>
                    <p className="text-xl mt-5 text-[#e3afaf]">Join Our Creative Family! Sign Up to Unleash Your <br /> Artistic Potential</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="flex gap-5">
                        <div className="form-control w-1/2 shadow-xl">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered"
                                {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && (
                                <span className="bg-[#a64545] text-center p-2 rounded-lg shadow-2xl">
                                    {errors.name.message}
                                </span>
                            )}
                        </div>
                        <div className="form-control w-1/2 shadow-xl">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered"
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && (
                                <span className="bg-[#a64545] text-center p-2 rounded-lg shadow-2xl">
                                    {errors.email.message}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="form-control w-1/2 shadow-xl">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Photo URL"
                                className="input input-bordered"
                                {...register("photo", { required: "Photo URL is required" })}
                            />
                            {errors.photo && (
                                <span className="bg-[#a64545] text-center p-2 rounded-lg shadow-2xl">
                                    {errors.photo.message}
                                </span>
                            )}
                        </div>
                        <div className="form-control w-1/2 shadow-xl">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered"
                                {...register("password", { required: "Password is required" })}
                            />
                            {errors.password && (
                                // <span className="bg-[#a64545] text-center p-2 rounded-lg shadow-2xl">
                                //     {errors.password.message}
                                // </span>
                                Swal.fire({
                                    title: 'Error!',
                                    text: 'password Length must be at least 6 character and Must have an Uppercase and Lowercase letter',
                                    icon: 'error',
                                    confirmButtonText: 'Ok'
                                  })
                            )
                            }
                        </div>
                    </div>

                    <div className="mx-auto text-center pt-7">
                        <p className="text-xl">
                            Already have an account? Go to{" "}
                            <Link to="/login">
                                <span className="text-[#f2adad]">Log in</span>
                            </Link>
                        </p>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-[#c78d8d] shadow-xl border-none">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;

