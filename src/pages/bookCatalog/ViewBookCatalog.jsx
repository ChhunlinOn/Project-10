import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function Columns(props) {
  return (
    <tr className="border-b-2 border-b-slate-300">
      <th key={props.name} className="p-5">{props.name}</th>
      <td className={props.textcolor}>{props.data}</td>
    </tr>
  );
}

function Viewbookcatalog() {
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  const [deleted, setDeleted] = useState(false); // State to track if the book is deleted

  const URL = `http://localhost:3000/api/books/${id}`;
  const Token = localStorage.getItem("token");
  const obj = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(URL, obj);
        setInfo(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!info) {
    return <div>Loading...</div>;
  }

  async function deleteBook() {
    try {
      const result = await axios.delete(URL, { headers: obj.headers });
      if (result.status === 200) {
        toast.success("Book deleted successfully!", {
          position: "top-center",
          autoClose: 5000,
        });
        setDeleted(true); // Hide columns by setting `deleted` to true
      }
    } catch (error) {
      toast.error("Failed to delete the book. Please try again.", {
        position: "top-center",
        autoClose: 5000,
      });
      console.error("Error deleting data:", error);
    }
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
        <button onClick={deleteBook} className="text-1xl font-bold bg-red-400 rounded-md mt-8 py-4 px-5 text-white">
          Delete
        </button>
      </div>

      {!deleted && (
        <table className="border-collapse border w-full mt-2 text-center">
          <thead>
            <Columns name="ISBN" data={info?.isbn} />
            <Columns name="Title" data={info?.title} />
            <Columns name="Authors" data={info?.authors} />
            <Columns name="Publisher" data={info?.publisher} />
            <Columns name="Publication Year" data={info?.publication_year} />
            <Columns name="Edition" data={info?.edition} />
            <Columns name="Genre" data={info?.genre} />
            <Columns name="Language" data={info?.language} />
            <Columns name="Number of Pages" data={info?.number_of_pages} textcolor="text-blue-400 font-bold" />
            <Columns name="Shelf Location" data={info?.shelf_location} />
            <Columns name="Description" data={info?.description} />
          </thead>
        </table>
      )}

      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
}

export default Viewbookcatalog;
