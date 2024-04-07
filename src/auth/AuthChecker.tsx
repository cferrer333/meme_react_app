import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

interface Props {
    children: React.ReactNode;
}

const AuthChecker = ({ children }: Props) => {
    const navigate = useNavigate();
    const { isAuthenticated, isLoading, loginWithPopup } = useAuth0();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            loginWithPopup();
        }
    }, [isLoading, isAuthenticated, loginWithPopup]);

    useEffect(() => {
        if (!isLoading && isAuthenticated) {
            navigate('/Dashboard');
        }
    }, [isLoading, isAuthenticated, navigate]);

    return (
        <>{children}</>
    );
};

export default AuthChecker;