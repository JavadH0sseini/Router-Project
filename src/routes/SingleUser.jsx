import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function SingleUser() {
  const params = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${params.userId}`)
      .then((respons) => respons.json())
      .then((json) => setUser(json.data));
  }, []);
  console.log(user);

  // console.log(params);
  return (
    <div className="flex flex-col h-screen justify-center gap-6">
      <div
        className="font-bold text-3xl flex flex-col gap-5 justify-between items-center"
      >
        <span>
          {user.first_name} {user.last_name}
        </span>
        <img
          src={`https://reqres.in/img/faces/${user.id}-image.jpg`}
          alt="user image"
          className="rounded-full w-60 shadow-2xl"
        />
        <p className="font-thin">{user.email}</p>
      </div>
      <div className="flex justify-center p-4">
        <Link
          className="font-bold text-3xl bg-purple-600 text-white p-3 rounded"
          to="/users"
        >
          Back to All Users
        </Link>
      </div>
    </div>
  );
}
