import React from "react";
import styles from"../Card/Card.module.css"
const Card = (props)=>{
    return(
        <div className={styles.card}>
            <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <div className={styles.cardFlexContent}>
        <img className={styles.imagen} src={props.img} alt="" />
        </div>
       <div> <h4>Brand: {props.make}</h4></div>
       <div> <h3>Model: {props.model}</h3> </div>
       <div> <p>Year: {props.year}</p></div>
       <div>  <p>$ <span>{props.price}</span></p></div>
       <div> <a className={styles.enlace} href="#" class="btn btn-primary">Go somewhere</a></div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Card