import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserLogout() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        const logout = async () => {
            try {
                await axios.get(
                    `${import.meta.env.VITE_BASE_URL}/users/logout`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
            } catch (error) {
                console.error('Logout failed', error);
            } finally {
                // Always clear token & redirect
                localStorage.removeItem('token');
                navigate('/login');
            }
        };

        logout();
    }, [navigate, token]);

    return <div>Logging out...</div>;
}

export default UserLogout;
