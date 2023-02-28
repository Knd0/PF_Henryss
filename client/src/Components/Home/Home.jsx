import React from 'react'
import {Link} from "react-router-dom"
import Card from "../Card/Card"
import styles from "../css/Home.module.css"


export default function Home () {
    
	var cars =  [{
        "id": 1,
        "make": "Honda",
        "model": "Civic",
        "year": 2014,
        "price": 22000,
        "img": "https://s.aolcdn.com/os/ab/_cms/2022/11/14104754/2023-Honda-Civic-Type-R-Sonoma-action-front-three-quarter.jpg",
        "features": {
            "engine": "2.0L 4 cilindros",
            "power": "158 hp",
            "transmission": "CVT",
            "drive": "front-wheel drive",
            "capacity": "5 passengers"
        }
    },
    {
        "id": 2,
        "make": "Ford",
        "model": "Mustang",
        "year": 2006,
        "price": 35000,
        "img": "https://imgd.aeplcdn.com/664x374/cw/ec/23766/Ford-Mustang-Exterior-126883.jpg?wm=0&q=75",
        "features": {
            "engine": "2.3L 4 cilindros turbo",
            "power": "310 hp",
            "transmissión": "automatic",
            "drive": "rear",
            "capacity": "4 passengers"
        }
    },{
        "id": 3,
        "make": "Chevrolet",
        "model": "Corvette",
        "year": 2010,
        "price": 62000,
        "img": "https://cdn.carbuzz.com/gallery-images/840x560/1023000/700/1023747.jpg",
        "features": {
            "engine": "6.2L V8",
            "power": "490 hp",
            "transmission": "Automatic",
            "drive": "rear",
            "capacity": "2 passengers"
        }
    },
    {
        "id": 4,
        "make": "Tesla",
        "model": "Model S",
        "year": 2012,
        "price": 80000,
        "img": "https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/2682/",
        "features": {
            "engine": "Eléctrico",
            "power": "670 hp",
            "transmission": "Automatic",
            "drive": "all-wheel",
            "capacity": "5 passengers"
        }
    },
    {
        "id": 5,
        "make": "Toyota",
        "modelo": "RAV4",
        "año": 2004,
        "precio": 26000,
        "img": "https://www.mitsuiautomotriz.com/uploads/images/07e87-rav4-colores7.png",
        "features": {
            "engine": "2.5L 4 cilindros",
            "power": "203 hp",
            "transmission": "Automatic",
            "drive": "all-wheel",
            "capacity": "5 passengers"
        }
    },
    {
        "id": 6,
        "make": "Toyota",
        "model": "Corolla",
        "year": 2014,
        "price": 25000,
        "img": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220923074240_Corolla%20Flex%20Fuel.jpg&w=700&q=90&c=1",
        "features": {
            "engine": "1.8L 4 cilindros",
            "power": "139 hp",
            "transmission": "CVT",
            "drive": "front-wheel",
            "capacity": "5 passengers"
        }
    },
    {
        "id": 7,
        "make": "Jeep",
        "model": "Wrangler",
        "year": 2022,
        "price": 30000,
        "img": "https://cars.usnews.com/static/images/Auto/izmo/i159614897/2022_jeep_wrangler_angularfront.jpg",
        "features": {
            "engine": "3.6L V6",
            "power": "285 hp",
            "transmission": "automatic",
            "drive": "all-wheel",
            "capacity": "4 passengers"
        }
    },
    {
        "id": 8,
        "make": "Ford",
        "model": "F-150",
        "year": 2022,
        "price": 35000,
        "img": "https://upload.wikimedia.org/wikipedia/commons/f/f0/2018_Ford_F-150_XLT_Crew_Cab%2C_front_11.10.19.jpg",
        "features": {
            "engine": "3.3L V6",
            "power": "290 hp",
            "transmission": "automatic",
            "drive": "rear",
            "capacity": "6 passengers"
        }
    },
    {
        "id": 9,
        "make": "Toyota",
        "model": "Prius",
        "year": 2022,
        "price": 25000,
        "img": "https://www.toyotapanamericana.com/uploads/vehiculos/nuevos/colores/color_28-04-2017_Prius_4.jpg",
        "features": {
            "engine": "1.8L 4-cylinder + electric",
            "power": "121 hp",
            "transmission": "CVT",
            "drive": "front-wheel drive",
            "capacity": "5 passengers"
        }
    },
    {
        "id": 10,
        "brand": "Nissan",
        "model": "GT-R",
        "year": 2021,
        "price": 130000,
        "img": "https://siempreauto.com/wp-content/uploads/sites/9/2022/06/210914-01_054-source-e1654493832406.jpg?w=4096",
        "features": {
            "engine": "3.8L V6",
            "power": "565 hp",
            "transmission": "automatic",
            "drive": "all-wheel",
            "capacity": "4 passengers"
        }
    },
    ]
    return (
        <div className={styles.cards} >
        {
            cars.length?cars.map(e => {
                return (
                    <div>
                        <Link  className={styles.linkstyle}  to={`cars/${e.id}`}>
                            <Card
                            id={e.id}
                               make={e.make} 
                               img={e.img} 
                               model={e.model}
                               year={e.year}
                               price={e.price}
                                />
                        </Link>
                    </div>
                )
            }) :<div>
            <h3>Loading...</h3>
          
          </div>
        }
        </div>   
    )
}

    
    
