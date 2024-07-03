/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import UserDetails from "./UserDetails";
import { useGetUserQuery } from "./UserSlice.js";
import { useEffect, useState } from "react";

export default function User() {
  const [user, setUser] = useState([]);

  const { data, isSuccess, refetch } = useGetUserQuery();

  useEffect(() => {
    if (isSuccess) {
      setUser(JSON.parse(data));

      //     // TODO - when should refetch run
      //     refetch();
    }
  }, [isSuccess]);

  console.log(data, `data end user`);
  console.log(user, `user`);

  return (
    <div>
      <section className="userContainer">
        {isSuccess && <UserDetails key={user.id} userProfile={user} />}
      </section>
    </div>
  );
}
