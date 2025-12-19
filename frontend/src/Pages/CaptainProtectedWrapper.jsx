import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../Context/CaptainContext';
import { DotLoader } from 'react-spinners';

function CaptainProtectedWrapper({ children }) {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const { setCaptain } = useContext(CaptainDataContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!token) {
            navigate('/captain-login');
            return;
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                if (response.status === 200) {
                    setCaptain(response.data);
                    setIsLoading(false);
                }
            })
            .catch(err => {
                console.error(err);
                localStorage.removeItem('token');
                navigate('/captain-login');
            });

    }, [token, navigate, setCaptain]);

    if (isLoading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <DotLoader
                    color={'#36D8B7'}
                    loading={true}
                />
            </div>
        )
    }

    return <>{children}</>;
}

export default CaptainProtectedWrapper;
