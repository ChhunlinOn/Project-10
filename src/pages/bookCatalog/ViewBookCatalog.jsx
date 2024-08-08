import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Viewbookcatalog() {
  const { id } = useParams();
  const [info, setInfo] = useState(null);

  const URL = `http://localhost:3000/api/books/${id}`;
  const Token = localStorage.getItem("token");
  const obj = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${Token}`, // Bearer token
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(URL, obj);
        const data = result.data;
        setInfo(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]); // Include `id` in the dependency array

  if (!info) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-150 min-h-screen">
      <h1 className="text-3xl font-bold">Book Information {id}</h1>
      <div className="flex gap-5">
        <Link to="/book-catalog" className="text-center flex justify-center items-center text-1xl font-bold bg-gray-400 rounded-md mt-8 px-7 text-white">
          Back
        </Link>
        <button className="text-1xl font-bold bg-blue-400 rounded-md mt-8 px-5 text-white">
          Update
        </button>
        <button  className="text-1xl font-bold bg-red-400 rounded-md mt-8 py-4 px-5 text-white">
          Delete
        </button>
      </div>

      <table className="border-collapse border w-full mt-2 text-center">
        <thead className="">

            <tr className="border-b-2 border-b-slate-300">
            <th className="p-5">ISBN</th>
            <td>{info.isbn}</td>
            </tr>
            <tr className="border-b-2 border-b-slate-300 ">
            <th className="p-5">Title</th>
            <td>{info.title}</td>
            </tr>
            <tr className="border-b-2 border-b-slate-300 ">
            <th className="p-5">Authors</th>
            <td>{info.authors}</td>
            </tr>
            <tr className="border-b-2 border-b-slate-300 ">
            <th className="p-5">Publisher</th>
            <td>{info.publisher}</td>
            </tr>
            <tr className="border-b-2 border-b-slate-300 ">
            <th className="p-5">Publication Year</th>
            <td>{info.publication_year}</td>
            </tr>
            <tr className="border-b-2 border-b-slate-300 ">
            <th className="p-5">Edition</th>
            <td>{info.edition}</td>
            </tr>
            <tr className="border-b-2 border-b-slate-300 ">
            <th className="p-5">Genre</th>
            <td>{info.genre}</td>
            </tr>
            <tr className="border-b-2 border-b-slate-300 ">
            <th className="p-5">Language</th>
            <td>{info.language}</td>
            </tr>
            <tr className="border-b-2 border-b-slate-300 ">
            <th className="p-5">Number of Pages</th>
            <td className="text-blue-400 font-bold">{info.number_of_pages}</td>
            </tr>
            <tr className="border-b-2 border-b-slate-300 ">
            <th className="p-5">Shelf Location</th>
            <td>{info.shelf_location}</td>
            </tr>
            <tr className="border-b-2 border-b-slate-300 ">
            <th className="p-5">Description</th>
            <td>{info.description}</td>
            </tr>
          
        </thead>
      </table> 
    </div>
  );
}

export default Viewbookcatalog;
