import { useNavigate } from "react-router-dom";

export default function BookDetails({ book }) {
  const navigate = useNavigate();

  return (
    <div className="books">

     

      <div className="book.title">
      <p1> {book.title}</p1>
      </div>
      <div className="book.author">
      <p2> {book.author}</p2>
      </div>
      <div className="book.description">
      <p3> {book.description}</p3>
      </div>

      {/* <h1>The Book</h1>
      <p1> {book.title}</p1>
      <p2> {book.author}</p2>
      <p3> {book.description}</p3> */}
      
      {/*<p> {book.coverimage}</p> */}

      <img src={book.coverimage} alt={book.title} className="img" />
      

      <p> Available: {book.available ? "Yes" : "No"}</p>
      <button
        type="submit"
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
