/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import UserDetails from "./UserDetails";
import { useGetUserQuery } from "./UserSlice.js";
import { useEffect, useState } from "react";

export default function User() {
  const [user, getUser] = useState([]);

  console.log("In User");

  const { data, isSuccess } = useGetUserQuery();

  useEffect(() => {
    if (isSuccess) {
      getUser(JSON.parse(data));
    }
  }, [isSuccess]);

  return (
    <div>
      <section className="userContainer">
        {isSuccess && <UserDetails key={user.id} userProfile={user} />}
      </section>
    </div>
  );
}
