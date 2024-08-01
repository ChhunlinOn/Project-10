import LisBookIssue from "../../components/BookIssue";
const BookIssuePage = () => {
  return (
    <div className="min-h-screen  bg-gray-150 ">
      <h1 className="text-3xl font-bold">Member</h1>
      <button className="text-1xl font-bold bg-blue-400 rounded-md mt-8 w-20 h-8 ">Create</button>
      <LisBookIssue></LisBookIssue>
    </div>

  );

};

export default BookIssuePage;
