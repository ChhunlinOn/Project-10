import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ViewBookIssueInformation() {
    const { id } = useParams();
    const [bookIssue, setBookIssue] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBookIssue = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/book_issues/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch the book issue information.");
                }
                const data = await response.json();
                setBookIssue(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBookIssue();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Book Issue Information</h1>
            {bookIssue && (
                <div>
                    <p><strong>ID:</strong> {bookIssue.id}</p>
                    <p><strong>Book Title:</strong> {bookIssue.bookTitle}</p>
                    <p><strong>Issued To:</strong> {bookIssue.issuedTo}</p>
                    <p><strong>Issue Date:</strong> {bookIssue.issueDate}</p>
                    <p><strong>Due Date:</strong> {bookIssue.dueDate}</p>
                </div>
            )}
        </div>
    );
}
