import axios from "axios";
import React, { useEffect, useState } from 'react';
const CreateListAccount = () => {
    const [users, setUsers] = useState([]);
    const token = localStorage.getItem('token')
    const  baseURL= "http://localhost:3000/api/user_accounts";
    useEffect(() => {
        const fethAccount = async () => {
            try {
                const response = await fetch(baseURL,{
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                setUsers(data);
                console.log(data);
            } catch (error) {
                console.log("Error fething user account:", error);
            }
        };
        fethAccount();
    }, []);
    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-2xl font-bold mb-4'>User Account</h1>
            <button className='mb-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-blue-700'>Create</button>
            <table className='border-slate-800 min-w-full bg-white border border-gray-200'>
                <thead>
                    <tr>
                        <th className='border-current py-2 px-4 border-b text-left'>Action</th>
                        <th className='border-current py-2 px-4 border-b text-left'>Username</th>
                        <th className='border-current py-2 px-4 border-b text-left'>Email</th>
                        <th className='border-current py-2 px-4 border-b text-left'>Role</th>
                        <th className='border-current py-2 px-4 border-b text-left'>Is Active</th>
                        <th className='border-current py-2 px-4 border-b text-left'>Is Activated</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index} className='hover:bg-gray-100'>
                            <td className='border-current py-2 px-4 border-b'>
                                <button className='px-2 py-1 bg-indigo-500 text-white rounded hover:bg-green-500'>View</button>
                            </td>
                            <td className='border-current py-2 px-4 border-b'>{user.username}</td>
                            <td className='border-current py-2 px-4 border-b'>{user.email}</td>
                            <td className='border-current py-2 px-4 border-b'>{user.user_role.user_role_name}</td>
                            <td className='border-current py-2 px-4 border-b'>{user.is_active ? 'Yes' : 'No'}</td>
                            <td className='border-current py-2 px-4 border-b'>{user.is_activated ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CreateListAccount;