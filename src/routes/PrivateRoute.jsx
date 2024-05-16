import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../firebase/AuthProvider';
import { Puff } from 'react-loader-spinner';
const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className="flex items-center justify-center my-[150px]">
            {/* <div className="md:w-28 md:h-28 w-12 h-12 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div> */}

            <Puff
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>

    }

    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;