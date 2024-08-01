import { useState, useEffect } from "react";
 
 const URL = `http://localhost:3000/api/book_issues`;
 const Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE0LCJpYXQiOjE3MjI0ODkzNjIsImV4cCI6MTcyMjUyNTM2Mn0.3AiizY1IL9cFrLo6PVuw4kL3XC1st6DxtXaX4kv_7Vg';


function LisBookIssue(){
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL, {
        headers: {
          'Authorization': `Bearer ${Token}`
        }
      });
      const result = await response.json();
      setBooks(result);
    console.log(result);
    };
    fetchData();
  }, []);  
    return(
        <table>
        <thead>
          <tr>
            <th className="p-3  border border-slate-300 ">Action</th>
            <th className="p-3  border border-slate-300 ">ISBN</th>
            <th className="p-3  border border-slate-300 ">Title</th>
            <th className="p-3  border border-slate-300 ">Member</th>
            <th className="p-3  border border-slate-300 ">Librarian</th>
            <th className="p-3  border border-slate-300 ">Issue Date</th>
            <th className="p-3  border border-slate-300 ">Due date</th>
            <th className="p-3  border border-slate-300 ">Return Date</th>
            <th className="p-3  border border-slate-300 ">State</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
             <tr key ={book.id} >
             <td className="p-3 border border-slate-300">View</td>
             <td className="p-3 border border-slate-300">{book.book.isbn}</td>
             <td className="p-3 border border-slate-300">{book.book.title}</td>
             <td className="p-3 border border-slate-300">{book.member.fullname}</td>
             <td className="p-3 border border-slate-300">{book.processed_by.username}</td>
             <td className="p-3 border border-slate-300">{book.issue_date}</td>
             <td className="p-3 border border-slate-300">{book.due_date}</td>
             <td className="p-3 border border-slate-300">{book.return_date}</td>
             <td className="p-3 border border-slate-300">{book.status_id}</td>
 
           </tr>
          ))}
      

        </tbody>
      </table>
    )
}
export default LisBookIssue;
