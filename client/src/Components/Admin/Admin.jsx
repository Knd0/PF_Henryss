import React from "react";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import style from "./Admin.module.css";
import { Link } from "react-router-dom";
import Page404 from "../Page404/Page404";
import Loading from "../Loading/Loading";

export default function Admin() {
  const details = useSelector((state) => state.usersDetails);
  const admin = details[0]?.admin;
  if (admin) {
    return (
      <>
        <Navbar />
        <h2 className="underline">DASHBOARD ADMIN</h2>
        <div className={style.cardconteiner}>
          <div ontouchstart="">
            <Link to="/admin/cars" className={style.btn}>
              <span>Cars</span>
            </Link>
            <Link to="/admin/user" className={style.btn}>
              <span>Users</span>
            </Link>
            <Link to="/admin/reviews" className={style.btn}>
              <span>Reviews</span>
            </Link>
            <Link to="/admin/statistics" className={style.btn}>
              <span>Statistics</span>
            </Link>
          </div>
        </div>
        <img
          className={style.img}
          src="https://media.tenor.com/0u4Oyi32gQ0AAAAd/por-fin-soy-admin.gif"
          alt="admin"
        />
      </>
    );
  } else {
    return <Page404 />;
  }
}
