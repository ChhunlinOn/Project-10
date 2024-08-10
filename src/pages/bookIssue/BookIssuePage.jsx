import BookIssueTable from "../../components/BookIssue";
import { Link } from 'react-router-dom';

const BookIssuePage = () => {
  return (
    <div className="min-h-screen  bg-gray-150 ">
      <h1 className="text-3xl font-bold">Book Issue</h1>
      <Link to={"/CreateNewBookIssue"}>
      <button className="text-1xl font-bold bg-blue-400 rounded-md mt-8 w-20 h-8 ">Create</button>

      </Link>

      <BookIssueTable></BookIssueTable>
    </div>

  );

};

export default BookIssuePage;
