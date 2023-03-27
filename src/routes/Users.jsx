import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((respons) => respons.json())
      .then((json) => setUsers(json.data));
  }, []);

  return (
    <div>
      <h1 className="font-bold text-4xl text-center my-10">All Users Are Here</h1>
      <div className="font-bold text-3xl">
        <ul className="grid grid-cols-12">
          {users.map((user, index) => {
            return (
              <li key={`user ${index}`} className="shadow-md p-8 col-span-12 sm:col-span-6 lg:col-span-4 flex flex-col gap-5 justify-between items-center m-2 rounded">
                <span>{user.first_name} {user.last_name}</span>
                <img src={`https://reqres.in/img/faces/${user.id}-image.jpg`} alt="user image" className="rounded-full w-60"/>
                <Link
                  className="bg-yellow-400 py-3 w-3/4 text-center text-white rounded-2xl"
                  to={`/users/${user.id}`}
                >
                  See more!
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex justify-center p-4">
        <Link
          className="font-bold text-3xl bg-purple-600 text-white p-3 mt-4 rounded"
          to="/"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
