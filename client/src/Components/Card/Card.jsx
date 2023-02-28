import React from "react";
import styles from"../css/Card.module.css"
const Card = (props)=>{
    return(
        <div className={styles.card}>
            <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <img className={styles.imagen} src={props.img} alt="" />
        <h4>Brand: {props.make}</h4>
        <h3>Model: {props.model}</h3>
         <p>Year: {props.year}</p>
         <p>$ <span>{props.price}</span></p>
        <a className={styles.enlace} href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Card