
import React, { useState } from 'react';
const BookIssueForm = () => {
  const [isbn, setIsbn] = useState('');
  const [memberCode, setMemberCode] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const bookResponse = await fetch(`http://localhost:3000/api/books/isbn/${isbn}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const bookData = await bookResponse.json();
      const bookId = bookData?.id;

      const memberResponse = await fetch(`http://localhost:3000/api/members/code/${memberCode}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const memberData = await memberResponse.json();
      const memberId = memberData?.id;
      const user = JSON.parse( localStorage.getItem('user'));
      console.log(user);
      console.log(typeof user);

     
      const issueData = {
        member_id: memberId, 
        book_id: bookId, 
        issue_date: issueDate, 
        due_date: dueDate, 
        return_date: "02/02/2024", 
        status_id: 1, 
        processed_by_id: user.id
      }

      const response = await fetch('http://localhost:3000/api/book_issues', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(issueData),
      });

      if (response.ok) {
        alert('Book issue saved successfully!');
      } else {
        alert(' You are failed to save book issue.');
      }
    } catch (error) {
      console.log('Error:', error);
      alert('An error occurred while saving the book issue.');
    }
  };
  return (
    <div style={{ maxWidth: '400px' }}>
      <h2 className='text-3xl font-bold font-black'>New Book Issue</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1em' }} >
          <label htmlFor="isbn" style={{ display: 'block', marginBottom: '0.5em' }} className='font-black'>ISBN</label>
          <input
            id="isbn"
            type="text"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            placeholder="ISBN"
            style={{ width: '100%', padding: '0.5em', fontSize: '1em' }}
          />
        </div>
        <div style={{ marginBottom: '1em' }}>
          <label htmlFor="memberCode" style={{ display: 'block', marginBottom: '0.5em' }}>Member Code</label>
          <input
            id="memberCode"
            type="text"
            value={memberCode}
            onChange={(e) => setMemberCode(e.target.value)}
            placeholder="Member Code"
            style={{ width: '100%', padding: '0.5em', fontSize: '1em' }}

           
          />
        </div>
        <div style={{ marginBottom: '1em' }}>
          <label htmlFor="issueDate" style={{ display: 'block', marginBottom: '0.5em' }}>Issue Date</label>
          <input
            id="issueDate"
            type="date"
            value={issueDate}
            onChange={(e) => setIssueDate(e.target.value)}
            style={{ width: '100%', padding: '0.5em', fontSize: '1em' }}
          />
        </div>
        <div  style={{ marginBottom: '1em' }}>
          <label htmlFor="dueDate"  style={{ display: 'block', marginBottom: '0.5em' }} >Due Date</label>
          <input
            id="dueDate"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            style={{ width: '100%', padding: '0.5em', fontSize: '1em' }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button type="button" onClick={() => { setIsbn(''); setMemberCode(''); setIssueDate(''); setDueDate(''); }} style={{ padding: '0.5em 1em', backgroundColor: '#d1d1d1', border: 'none', fontSize: '1em' }}>
            Cancel
          </button>
          <button type="submit"  style={{ padding: '0.5em 1em', backgroundColor: '#007bff', color: '#fff', border: 'none', fontSize: '1em' }}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookIssueForm;
