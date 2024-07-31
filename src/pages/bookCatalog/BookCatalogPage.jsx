import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const BookCatalogPage = () => {
  const [book, setbooks] = useState([]);

  const URL = `http://localhost:3000/api/books`;
  const Token = localStorage.getItem("token");
  var obj = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${Token}`, // notice the Bearer before your token
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(URL, obj);
        const data = result.data;
        console.log(data);
        setbooks(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center bg-gray-100 flex-col">
      <h1 className="text-3xl font-bold text-left mb-8">Book Catalogs</h1>
      <nav className="mb-8">
        <Link to="" className="p-4 bg-cyan-300 rounded-lg">
          Create
        </Link>
      </nav>
      <table className="border-seperate text-center rounded-lg border-spacing-6 border-4 border-gray-400 ...">
        <thead>
          <tr className="border-b-2 border-gray-600">
            <th className="py-4">Action</th>
            <th>ISBN</th>
            <th>Title</th>
            <th>Authors</th>
            <th>Publisher</th>
            <th>Genre</th>
            <th>Shelf Location</th>
          </tr>
        </thead>
        <tbody>
          {book.map((books) => (
            <tr className="border-b-2 border-gray-300">
              <td className="py-4">
                <div className="py-3 ml-2 bg-cyan-300 rounded-lg">View</div>
              </td>
              <td>{books.isbn}</td>
              <td>{books.title}</td>
              <td>{books.authors}</td>
              <td>{books.publisher}</td>
              <td>{books.genre}</td>
              <td>{books.shelf_location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookCatalogPage;
