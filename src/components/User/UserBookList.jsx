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
          {bookList &&
            bookList.map((book) => {
              return <UserBookListRow key={book.id} newBook={book} />;
            })}
        </tbody>
      </table>
    </div>
  );
}
