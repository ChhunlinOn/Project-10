import Table from "../../components/Table";
import React, { useState, useEffect } from "react";

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
      } catch (error) {
        console.error(error);
      }
    };
    fetchMembers();
  }, []);
  return (
    <div className="bg-gray-150">
      <h1 className="text-3xl font-bold">Member</h1>
      <button className="text-1xl font-bold bg-blue-400 rounded-md mt-8 w-20 h-8 text-white">
        Create
      </button>

      <table class="border-collapse border w-full mt-2 text-center">
        <thead>
          <tr>
            <th className="p-3 border border-slate-300">Action</th>
            <th className="p-3 border border-slate-300">Member Code</th>
            <th className="p-3 border border-slate-300">Fullname</th>
            <th className="p-3 border border-slate-300">Phone</th>
            <th className="p-3 border border-slate-300">Address</th>
            <th className="p-3 border border-slate-300">Start Date</th>
            <th className="p-3 border border-slate-300">Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td className="p-3 border border-slate-300">view</td>
              <td className="p-3 border border-slate-00">
                {member.member_code}
              </td>
              <td className="p-3 border border-slate-300">{member.fullname}</td>
              <td className="p-3 border border-slate-300">
                {member.phone_number}
              </td>
              <td className="p-3 border border-slate-300">{member.address}</td>
              <td className="p-3 border border-slate-30>">
                {member.start_date}
              </td>
              <td className="p-3 border border-slate-300">
                {member.expiry_date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberPage;
