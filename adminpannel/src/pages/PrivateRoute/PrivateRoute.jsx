import { Navigate } from 'react-router-dom';
import { isAdminLoggedIn } from '../../utils/auth';

const PrivateRoute = ({ children }) => {
    const isLoggedIn = isAdminLoggedIn();

    if (!isLoggedIn) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default PrivateRoute;
