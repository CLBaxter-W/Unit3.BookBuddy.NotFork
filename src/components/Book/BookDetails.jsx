import { useNavigate } from "react-router-dom";

export default function BookDetails({ book }) {
  const navigate = useNavigate();

  console.log("BookDetails");

  return (
    <div>
      <h1>The Book</h1>
      <p> {book.title}</p>
      <p> {book.author}</p>
      <p> {book.description}</p>
      {/*<p> {book.coverimage}</p> */}
      <img src={book.coverimage} alt={book.title} />
      <p> {book.available ? "Yes" : "No"}</p>
      <button
        type="button"
        className="btn"
        onClick={() => navigate("/Library")}
      >
        Back
      </button>
      {/* TODO Link to lost page*/}
      {/* <Link to="/*">Lost Page</Link>*/}
    </div>
  );
}
