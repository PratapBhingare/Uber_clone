import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DotLoader } from 'react-spinners';

function CaptainLogout() {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/captain-login');
            return;
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                if (response.status === 200) {
                    localStorage.removeItem('token');
                    navigate('/captain-login');
                }
            })
            .catch(err => {
                console.error(err);
                localStorage.removeItem('token');
                navigate('/captain-login');
            });

    }, [token, navigate]);

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex-col justify-center gap-1'>
                <DotLoader
                    color={'#36D8B7'}
                    loading={true}
                />
                <h4>Logging out...</h4>
            </div>
        </div>)
}

export default CaptainLogout;
