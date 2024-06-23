
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './Hooks/useAuth';

const PrivateRout = ({children}) => {
    const {user,loading} = useAuth();
    const location=useLocation();
    // console.log(user)
    if(loading){
        return <div className='text-center align-middle'>
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }

    if(!user){
        return <Navigate to='/login' state={location?.pathname || '/home/'}></Navigate> 
        ;
    }
    if (user){
        return children;
    }
    // return <Navigate to="/login"></Navigate>
    

};

export default PrivateRout;