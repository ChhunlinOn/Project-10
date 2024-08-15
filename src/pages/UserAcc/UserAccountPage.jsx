import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserAccountPage = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate(); 
  const token = localStorage.getItem('token');
  const URL = `https://wmad-library-backend-six.vercel.app/api/user_accounts/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL, {
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [URL, token]);

  if (!user) {
    return <div>Loading...</div>;
  }
  const Delete = async () => {
    const userConfirmed = window.confirm("Would you want to delete?");
    if (userConfirmed) {
      try {
        await axios.delete(`http://localhost:3000/api/user_accounts/${id}`, {
          headers: {
            'Content-Type': 'application/json;charset=utf-8', 
            Authorization: `Bearer ${token}`,
          },
        });
        navigate('/user-account'); 
      } catch (error) {
        console.error("Error deleting data:", error.message); 
      }
    }
  };
  return (
    <div className="bg-gray-150 min-h-screen">
      <h1 className="text-3xl font-bold">Account Information {id}</h1>
      <div className="flex gap-5">
        <Link
          to="/user-account"
          className="text-1xl font-bold bg-gray-400 rounded-md mt-8 px-7 text-white flex text-center justify-center items-center"
        >
          Back
        </Link>
        <button
          className="text-1xl font-bold bg-blue-400 rounded-md mt-8 px-5 text-white"
        >
          Update
        </button>
        <button
          className="text-1xl font-bold bg-red-400 rounded-md mt-8 py-4 px-5 text-white"
          onClick={Delete}
        >
          Delete
        </button>
      </div>
      <table className="border-collapse border w-full mt-2 text-center">
        <tr className="border-1 border border-slate-300 ">
          <th className="flex justify-content-start p-5">User Name</th>
          <td className="ml-2">{user.username}</td>
        </tr>
        <tr className="border-1 border border-slate-300 ">
          <th className="flex justify-content-start p-5">Email</th>
          <td>{user.email}</td>
        </tr>
        <tr className="border-1 border border-slate-300 ">
          <th className="flex justify-content-start p-5">Role</th>
          <td>{user.user_role.user_role_name}</td>
        </tr>
        <tr className="border-1 border border-slate-300 ">
          <th className="flex justify-content-start p-5">Is Active</th>
          <td>{user.is_active ? 'Yes' : 'No'}</td>
        </tr>
        <tr className="border-1 border border-slate-300 ">
          <th className="flex justify-content-start p-5">Is Activated?</th>
          <td>{user.is_activated ? 'Yes' : 'No'}</td>
        </tr>
      </table>
    </div>
  );
};

export default UserAccountPage;
