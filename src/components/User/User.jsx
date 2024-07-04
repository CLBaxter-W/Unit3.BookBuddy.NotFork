/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import UserDetails from "./UserDetails";
import { useGetUserQuery } from "./UserSlice.js";
import { useEffect } from "react";

export default function User() {
  const { data, isSuccess, refetch } = useGetUserQuery();

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess]);

  console.log(data, `data user`);

  return (
    <div>
      <section className="userContainer">
        {isSuccess && <UserDetails key={data.id} userProfile={data} />}
      </section>
    </div>
  );
}
