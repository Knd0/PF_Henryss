import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allUsers, UserDelete } from "../../Redux/actions";
import Navbar from "../Navbar/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./Admin.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { searchUserAdmin } from "../../Redux/actions";
import swal from "sweetalert";
import Page404 from "../Page404/Page404";

export default function AdminUsers() {
  
  const [input, setInput] = useState("");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const details = useSelector((state) => state.usersDetails);
  const admin = details[0]?.admin;
  useEffect(() => {
    dispatch(allUsers());
  }, [dispatch]);

  function handleDelete(userId) {
    swal({
      title: "Are you sure?",
      text: "This user will be deleted.",
      icon: "warning",
      buttons: ["Cancel", "Accept"],
    }).then((value) => {
      if (value) {
        dispatch(UserDelete(userId));
        swal({
          title: "Succes",
          text: "This user has been deleted.",
          icon: "success",
          button: "Ok",
        }).then((info) => {
          if (info) {
            window.location.reload();
          }
        });
      } else {
        swal({
          title: "This action has been canceled.",
          icon: "error",
          button: "Ok",
        });
      }
    });
  }

  function handleChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchUserAdmin(input));
  }

  if (admin?.length !== 0) {
    return (
      <>
        <Navbar />
        <h2 className="underline">ADMIN USERS</h2>
        <div className={style.cardconteiner}>
          <Link to="/admin" className={style.btn}>
            <span>Back</span>
          </Link>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="relative content-center items-center justify-between pb-4 bg-white dark:bg-gray-900">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 mt-2 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <form onSubmit={(e) => handleSubmit(e)}>
                <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  id="table-search-users"
                  className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for users"
                />
                <button type="submit">✔</button>
              </form>
            </div>
          </div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Connection
                </th>
                <th scope="col" className="px-6 py-3">
                  Publications
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            {users.length ? (
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.userId}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="w-10 h-10 rounded-full"
                        src={user.picture}
                        alt="Jese image"
                      />
                      <div className="pl-3">
                        <div className="text-base font-semibold">
                          {user.nickname}
                        </div>
                        <div className="font-normal text-gray-500">
                          {user.nickname}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">
                      <div className="flex items-center">{user.userId}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">{user.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                        {user.updatedAt && user.updatedAt.slice(0, 10)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        {user.publications && user.publications.length}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Link to={`/admin/user/${user.userId}`}>
                        <a
                          href="#"
                          className="grid font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit user
                        </a>
                      </Link>
                      <a
                        onClick={() => handleDelete(user.userId)}
                        className="grid font-medium text-red-600 dark:text-red-500 hover:underline hover:cursor-pointer"
                      >
                        Delete user
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <h1>No Users Registered</h1>
            )}
          </table>
        </div>
      </>
    );
  } else {
    return <Page404 />;
  }
}
