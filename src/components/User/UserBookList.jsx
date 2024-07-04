import UserBookListRow from "./UserBookListRow";

export default function UserBookList({ bookList }) {
  //  const [bookList, setBookList] = useState([]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="3"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Title</td>
            <td>Author</td>
            <td>CheckIn</td>
          </tr>
          {bookList && bookList.length > 0 ? (
            bookList.map((book) => {
              return <UserBookListRow key={book.id} newBook={book} />;
            })
          ) : (
            <tr>
              <td colSpan="3">No Books Currently Reserved</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
