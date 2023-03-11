import React from "react";
import style from "./Payments.module.css";

const act = "create-checkout-session";
export default function Payment() {
  return (
    <>
      <section className={style.section}>
        <div className={style.product}>
          <img
            className={style.img}
            src="https://scontent.fsty3-1.fna.fbcdn.net/v/t39.30808-6/243193457_102298218891167_834442695997563719_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=FJMvcwdagkwAX_CK707&_nc_ht=scontent.fsty3-1.fna&oh=00_AfC7iKXvNLcb2k7mwf7DnmdskCX7KNtC5llJsxh0vOnayA&oe=64111028"
            alt="The cover of Stubborn Attachments"
          />
          <div className={style.description}>
            <h3 className={style.h3}>Car Post</h3>
            <h5 className={style.h5}>$1.00</h5>
          </div>
        </div>
        <form action='http://localhost:3001/createcheckoutsession' method="POST">
          <button className={style.button} type="submit">
            Checkout
          </button>
        </form>
      </section>
    </>
  );
};
