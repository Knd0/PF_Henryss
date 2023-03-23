import React from "react";
import { useState, useEffect } from "react";
import styles from "./Admin.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { updateUser } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { useParams } from "react-router";
import { Link, useNavigate} from "react-router-dom";
import Page404 from "../Page404/Page404";

function AdminEditUser() {
  const details = useSelector((state) => state.usersDetails);
  const admin = details[0]?.admin;
  let id = useParams();
  let value = id["id"];
  const usersDetails = useSelector((state) => state.usersDetails);
  const userId = usersDetails.length > 0 ? usersDetails[0].userId : null;
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  
  /*  const elemento = reviews.filter((r)=>userId===(r.userId.toString()))*/

  const valor = value.toString();

  let user = users?.filter((u) => {
    if (u?.userId === valor?.toString()) {
      return u;
    }
  });

  const [input, setInput] = useState({
    name: user[0].name,
    nickname: user[0].nickname,
    email: user[0].email,
  });

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    swal({
      title: "Are you sure?",
      text: "This user will be deleted.",
      icon: "warning",
      buttons: ["Cancel", "Accept"],
    }).then((value) => {
      if (value) {
        dispatch(updateUser(userId, input));
        swal({
          title: "Succes",
          text: "This user has been deleted.",
          icon: "success",
          button: "Ok",
        }).then((info) => {
          if (info) {
            navigate("/admin/user");
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
  };
  if (admin == true && admin?.length !== 0) {
    return (
      <>
        <Navbar />
        <div className={styles.cardconteiner}>
          <Link to="/admin/user" className={styles.btn}>
            <span>Back</span>
          </Link>
        </div>

        <div className="w-4/12 mx-auto bg-stone-200 rounded-lg">
          <form onSubmit={(e) => handleSubmit(e)}>
            <h4 className="text-left p-10 text-blue-500">Edit user form:</h4>
            <div className="mb-10">
              <h5 className="text-left pl-10 mb-1">Name:</h5>
              <input
                onChange={(e) => handleChange(e)}
                value={input.nickname}
                type="text"
                name="nickname"
                className="block p-0 w-9/12 text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ml-10"
              />
            </div>

            <div className="mb-10">
              <h5 className="text-left pl-10 mb-1">Nickname:</h5>
              <input
                onChange={(e) => handleChange(e)}
                value={input.name}
                type="text"
                name="name"
                className="block p-0 w-9/12 text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ml-10"
              />
            </div>

            <div className="mb-10">
              <h5 className="text-left pl-10 mb-1">Email:</h5>
              <input
                onChange={(e) => handleChange(e)}
                value={input.email}
                type="text"
                name="email"
                className="block p-0 w-9/12 text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ml-10"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 mb-4"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </>
    );
  } else {
    return (<Page404 />);
  }
}

export default AdminEditUser;
