import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";

const MemberInfo = () => {
  const [information, setInformation] = useState();
  const { memberID } = useParams();
  const navigate = useNavigate();
  const url = `https://wmad-library-backend-six.vercel.app/api/members/${memberID}`;
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setInformation(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchInfo();
  }, [memberID, url, token]);
  if (!information) {
    return <div>Loading</div>;
  }
  if (information.is_active == true) {
    return (information.is_active = "Active");
  } else if (information.is_active == !true) {
    return (information.is_active = "InActive");
  }
  return (
    <div className="bg-gray-150 min-h-screen">
      <h1 className="text-3xl font-bold">Member information</h1>
      <div className="flex gap-5 mb-4">
        <Button name="Back" bgColor="bg-gray-600"/>
        <Button name="Update" bgColor="bg-blue-600"/>
        <button
          onClick={(e) => {
            const deleteInfo = async () => {
              try {
                const response = await fetch(url, {
                  method: "DELETE",
                  headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`,
                  },
                });
                navigate("/member");
                const data = response.json();
                console.log(data);
              } catch (error) {
                console.error(error);
              }
            };
            deleteInfo();
          }}
          className="text-1xl font-bold bg-red-600 rounded-md mt-8 py-3 px-5 text-white"
        >
          Delete
        </button>
      </div>

      <table class="w-full mt-2">
        <tr className="border-1 border border-slate-300">
          <th className="flex justify-content-start p-5">Member Code</th>
          <td> {information.member_code}</td>
        </tr>
        <tr className="border-1 border border-slate-300">
          <th className="flex justify-content-start p-5">Full name</th>
          <td> {information.fullname}</td>
        </tr>
        <tr className="border-1 border border-slate-300">
          <th className="flex justify-content-start p-5">Date of Birth</th>
          <td>{information.date_of_birth}</td>
        </tr>
        <tr className="border-1 border border-slate-300">
          <th className="flex justify-content-start p-5">Email</th>
          <td>{information.address}</td>
        </tr>
        <tr className="border-1 border border-slate-300">
          <th className="flex justify-content-start p-5">Phone</th>
          <td>{information.phone_number}</td>
        </tr>
        <tr className="border-1 border border-slate-300">
          <th className="flex justify-content-start p-5">Address</th>
          <td>{information.email}</td>
        </tr>
        <tr className="border-1 border border-slate-300">
          <th className="flex justify-content-start p-5">Start Date</th>
          <td>{information.start_date}</td>
        </tr>
        <tr className="border-1 border border-slate-300">
          <th className="flex justify-content-start p-5">Expiry Date</th>
          <td>{information.expiry_date}</td>
        </tr>
        <tr className="border-1 border border-slate-300">
          <th className="flex justify-content-start p-5">Status</th>
          <td className="text-blue-700">{information.is_active}</td>
        </tr>
      </table>
    </div>
  );
};
export default MemberInfo;
