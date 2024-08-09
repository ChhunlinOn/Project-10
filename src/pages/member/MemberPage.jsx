import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MemberPage = () => {
  const [members, setMembers] = useState([]);
  const url = "http://localhost:3000/api/members";
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setMembers(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMembers();
  }, []);
  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold ">Member</h1>
      <button className="text-1xl font-bold bg-blue-400 rounded-md mt-8 p-4 text-white mb-2 px5 py-3">
        Create
      </button>
      <div className="border-2 border-slate-300 overflow-hidden rounded-xl mt-2">
        <table class="border-collapse border w-full text-center">
          <thead>
            <tr>
              <th className="p-3 bg-gray-300">Action</th>
              <th className="p-3 bg-gray-300">Member Code</th>
              <th className="p-3 bg-gray-300">Fullname</th>
              <th className="p-3 bg-gray-300">Phone</th>
              <th className="p-3 bg-gray-300">Address</th>
              <th className="p-3 bg-gray-300">Start Date</th>
              <th className="p-3 bg-gray-300">Expiry Date</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td className="p-5 border-b-2 border-slate-300">
                  <nav>
                    <Link
                      className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-900"
                      to={`/member/${member.id}`}
                    >
                      View
                    </Link>
                  </nav>
                </td>
                <td className="border-b-2 border-slate-300">
                  {member.member_code}
                </td>
                <td className="border-b-2 border-slate-300">
                  {member.fullname}
                </td>
                <td className="border-b-2 border-slate-300">
                  {member.phone_number}
                </td>
                <td className="border-b-2 border-slate-300">
                  {member.address}
                </td>
                <td className="border-b-2 border-slate-300">
                  {member.start_date}
                </td>
                <td className="border-b-2 border-slate-300">
                  {member.expiry_date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MemberPage;
