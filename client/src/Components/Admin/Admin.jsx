import React from "react";
import Navbar from "../Navbar/Navbar";
import style from "./Admin.module.css";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <>
      <Navbar />
      <h1 className="underline">DASHBOARD ADMIN</h1>
      <div className={style.cardconteiner}>
        <div ontouchstart="">
          <Link to="/admin/cars" className={style.btn}>
            <span>Cars</span>
          </Link>
          <Link to="/admin/user" className={style.btn}>
            <span>Users</span>
          </Link>
          <Link to="/admin/statistics" className={style.btn}>
            <span>Statistics</span>
          </Link>
        </div>
      </div>
    </>
  );
}
