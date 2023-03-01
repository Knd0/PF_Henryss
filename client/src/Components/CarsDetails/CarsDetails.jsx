import React, { useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCarsDetail } from "../../Redux/actions";


export default function CarsDetail() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const carDetail = useSelector((state) => state.detail)
    useEffect(() => {
        dispatch(getCarsDetail(id))
    },[dispatch, id])

    // const carDetail = [{
    //         "id": 1,
    //         "brand": "Honda",
    //         "model": "Civic",
    //         "year": 2014,
    //         "price": 22000,
    //         "img": "https://s.aolcdn.com/os/ab/_cms/2022/11/14104754/2023-Honda-Civic-Type-R-Sonoma-action-front-three-quarter.jpg",
    //         "features": {
    //             "engine": "2.0L 4 cilindros",
    //             "power": "158 hp",
    //             "transmission": "CVT",
    //             "drive": "front-wheel drive",
    //             "capacity": "5 passengers"
    //         }
    //     },
    //     {
    //         "id": 2,
    //         "brand": "Ford",
    //         "model": "Mustang",
    //         "year": 2006,
    //         "price": 35000,
    //         "img": "https://imgd.aeplcdn.com/664x374/cw/ec/23766/Ford-Mustang-Exterior-126883.jpg?wm=0&q=75",
    //         "features": {
    //             "engine": "2.3L 4 cilindros turbo",
    //             "power": "310 hp",
    //             "transmissión": "automatic",
    //             "drive": "rear",
    //             "capacity": "4 passengers"
    //         }
    //     },
    //     {
    //         "id": 3,
    //         "brand": "Chevrolet",
    //         "model": "Corvette",
    //         "year": 2010,
    //         "price": 62000,
    //         "img": "https://cdn.carbuzz.com/gallery-images/840x560/1023000/700/1023747.jpg",
    //         "features": {
    //             "engine": "6.2L V8",
    //             "power": "490 hp",
    //             "transmission": "Automatic",
    //             "drive": "rear",
    //             "capacity": "2 passengers"
    //         }
    //     },
    //     {
    //         "id": 4,
    //         "brand": "Tesla",
    //         "model": "Model S",
    //         "year": 2012,
    //         "price": 80000,
    //         "img": "https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/2682/",
    //         "features": {
    //             "engine": "Eléctrico",
    //             "power": "670 hp",
    //             "transmission": "Automatic",
    //             "drive": "all-wheel",
    //             "capacity": "5 passengers"
    //         }
    //     },
    //     {
    //         "id": 5,
    //         "brand": "Toyota",
    //         "modelo": "RAV4",
    //         "año": 2004,
    //         "precio": 26000,
    //         "img": "https://www.mitsuiautomotriz.com/uploads/images/07e87-rav4-colores7.png",
    //         "features": {
    //             "engine": "2.5L 4 cilindros",
    //             "power": "203 hp",
    //             "transmission": "Automatic",
    //             "drive": "all-wheel",
    //             "capacity": "5 passengers"
    //         }
    //     },
    //     {
    //         "id": 6,
    //         "brand": "Toyota",
    //         "model": "Corolla",
    //         "year": 2014,
    //         "price": 25000,
    //         "img": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220923074240_Corolla%20Flex%20Fuel.jpg&w=700&q=90&c=1",
    //         "features": {
    //             "engine": "1.8L 4 cilindros",
    //             "power": "139 hp",
    //             "transmission": "CVT",
    //             "drive": "front-wheel",
    //             "capacity": "5 passengers"
    //         }
    //     },
    //     {
    //         "id": 7,
    //         "brand": "Jeep",
    //         "model": "Wrangler",
    //         "year": 2022,
    //         "price": 30000,
    //         "img": "https://cars.usnews.com/static/images/Auto/izmo/i159614897/2022_jeep_wrangler_angularfront.jpg",
    //         "features": {
    //             "engine": "3.6L V6",
    //             "power": "285 hp",
    //             "transmission": "automatic",
    //             "drive": "all-wheel",
    //             "capacity": "4 passengers"
    //         }
    //     },
    //     {
    //         "id": 8,
    //         "brand": "Ford",
    //         "model": "F-150",
    //         "year": 2022,
    //         "price": 35000,
    //         "img": "https://upload.wikimedia.org/wikipedia/commons/f/f0/2018_Ford_F-150_XLT_Crew_Cab%2C_front_11.10.19.jpg",
    //         "features": {
    //             "engine": "3.3L V6",
    //             "power": "290 hp",
    //             "transmission": "automatic",
    //             "drive": "rear",
    //             "capacity": "6 passengers"
    //         }
    //     },
    //     {
    //         "id": 9,
    //         "brand": "Toyota",
    //         "model": "Prius",
    //         "year": 2022,
    //         "price": 25000,
    //         "img": "https://www.toyotapanamericana.com/uploads/vehiculos/nuevos/colores/color_28-04-2017_Prius_4.jpg",
    //         "features": {
    //             "engine": "1.8L 4-cylinder + electric",
    //             "power": "121 hp",
    //             "transmission": "CVT",
    //             "drive": "front-wheel drive",
    //             "capacity": "5 passengers"
    //         }
    //     },
    //     {
    //         "id": 10,
    //         "brand": "Nissan",
    //         "model": "GT-R",
    //         "year": 2021,
    //         "price": 130000,
    //         "img": "https://siempreauto.com/wp-content/uploads/sites/9/2022/06/210914-01_054-source-e1654493832406.jpg?w=4096",
    //         "features": {
    //             "engine": "3.8L V6",
    //             "power": "565 hp",
    //             "transmission": "automatic",
    //             "drive": "all-wheel",
    //             "capacity": "4 passengers"
    //         }
    //     },
    //     {
    //         "id": 11,
    //         "brand": "Kia",
    //         "model": "Sorento",
    //         "year": 2020,
    //         "price": 35000,
    //         "img": "https://www.kia.com/content/dam/kwcms/gt/en/images/showroom/sorento-mq4-22my/features/360vr/exterior/01-Aurora-Black-ABP/24.png",
    //         "features": {
    //             "engine": "2.5L 4-cylinder",
    //             "power": "191 hp",
    //             "transmission": "8-speed automatic",
    //             "drive": "front-wheel",
    //             "capacity": "7 passengers"
    //         }
    //     },
    //     {
    //         "id": 12,
    //         "brand": "Mazda",
    //         "model": "MX-5 Miata",
    //         "year": 2022,
    //         "price": 28000,
    //         "img": "data:image/jpeg;base64,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",
    //         "features": {
    //             "engine": "2.0L 4-cylinder",
    //             "power": "181 hp",
    //             "transmission": "6-speed manual",
    //             "drive": "rear-wheel",
    //             "capacity": "2 passengers"
    //         }
    //     },
    //     {
    //         "id": 13,
    //         "brand": "Toyota",
    //         "model": "Camry",
    //         "year": 2022,
    //         "price": 26000,
    //         "img": "https://cars.usnews.com/static/images/Auto/izmo/i33960654/2018_toyota_camry_angularfront.jpg",
    //         "features": {
    //             "engine": "2.5L 4-cylinder",
    //             "power": "203 hp",
    //             "transmission": "8-speed automatic",
    //             "drive": "front-wheel",
    //             "capacity": "5 passengers"
    //         }
    //     },
    //     {
    //         "id": 14,
    //         "brand": "Land Rover",
    //         "model": "Range Rover",
    //         "year": 2021,
    //         "price": 100000,
    //         "img": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221207060326_Discovery_story.jpg&w=700&q=90&c=1",
    //         "features": {
    //             "engine": "3.0L inline 6-cylinder",
    //             "power": "355 hp",
    //             "transmission": "8-speed automatic",
    //             "drive": "all-wheel",
    //             "capacity": "5 passengers"
    //         }
    //     },
    //     {
    //         "id": 15,
    //         "brand": "Porsche",
    //         "model": "911 Carrera",
    //         "year": 2022,
    //         "price": 120000,
    //         "img": "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_655b66b7b2814ee9a866a1692313f7f1.jpg",
    //         "features": {
    //             "engine": "3.0L twin-turbo flat-6",
    //             "power": "379 hp",
    //             "transmission": "8-speed automatic",
    //             "drive": "rear-wheel",
    //             "capacity": "4 passengers"
    //         }
    //     },
    //     {
    //         "id": 16,
    //         "brand": "Volkswagen",
    //         "model": "Golf",
    //         "year": 2020,
    //         "price": 25000,
    //         "img": "data:image/jpeg;base64,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EI992HgZtMP0PYMdZqh8HI+kCvtlu20cbSTEMCgsXOlsqkXvqdSNAO/unoumQQLcOUjuxtycFhtadJQf0jcn1MkYWwsIHKIiB8mJiKrDhMyIEcxmJrcryM7Ves6lWuVPEHh6SxmQHkJ1NhEPFRA8+7R3VQkkIQe6aWtu2F4BvOelamyaLcUExqm7mGbikDzd9hqILKzAdnKdTJVHOeiqu5mFb4TMOr0f4Vv0h6QPPb5+ydLs/YZf9Tozwx4O48hMap0WUDwqN6CBQjOe+dZeXu/RPTPCr/lmNU6IkPCqPSBSBeLy56nQ6Dwqr6GYz9DTcqy+kCoZ1svpLbboYq8q6+k6m6F8RyxFP0MCscPoJv8AZe3KtEe6yMosLOMwGug7RJYOhfFDhiKX7p/Off6GcX/eKP7rQNdS30xKFjTSlTLW95U94aAe6WJAvx4cTI7tTbL1CwLM7ObuxJZmPeZPaXQxXY/1mMS3YqsT6kyRbK6J8NSHvOznmbAXgUmuEZuXkJmYfYdR+CMfIz0Jg9zcJT4UwT3zc0Nn0k6qKPIQPP2B3GxL2tTYeIklwHRdVNs5Cy5QoHACcoFe4Hozor12v4SQ4PdDC0+CAnvkhiBjUcFTXqoo8pkT7EBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/2Q==",
    //         "features": {
    //             "engine": "1.4L turbocharged 4-cylinder",
    //             "power": "147 hp",
    //             "transmission": "8-speed automatic",
    //             "drive": "front-wheel",
    //             "capacity": "5 passengers"
    //         }
    //     },
    //     {
    //         "id": 17,
    //         "brand": "Subaru",
    //         "model": "Outback",
    //         "year": 2022,
    //         "price": 33000,
    //         "img": "https://www.autoo.com.br/fotos/2016/10/1280_960/subaru_outback_2016_1_04102016_3837_1280_960.jpg",
    //         "features": {
    //             "engine": "2.4L turbocharged 4-cylinder",
    //             "power": "260 hp",
    //             "transmission": "continuously variable",
    //             "drive": "all-wheel",
    //             "capacity": "5 passengers"
    //         }
    //     },
    //     {
    //         "id": 18,
    //         "brand": "BMW",
    //         "model": "5 Series",
    //         "year": 2022,
    //         "price": 55000,
    //         "img": "data:image/jpeg;base64,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",
    //         "features": {
    //             "engine": "2.0L turbocharged 4-cylinder",
    //             "power": "248 hp",
    //             "transmission": "8-speed automatic",
    //             "drive": "rear-wheel",
    //             "capacity": "5 passengers"
    //         }
    //     },
    //     {
    //         "id": 19,
    //         "brand": "Kia",
    //         "model": "Rio",
    //         "year": 2022,
    //         "price": 17000,
    //         "img": "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_6eb84b999a0a4f15ac5220399b3206b5.jpg",
    //         "features": {
    //             "engine": "1.6L 4-cylinder",
    //             "power": "120 hp",
    //             "transmission": "continuously variable",
    //             "drive": "front-wheel",
    //             "capacity": "5 passengers"
    //         }
    //     },
    //     {
    //         "id": 20,
    //         "brand": "Nissan",
    //         "model": "Frontier",
    //         "year": 2022,
    //         "price": 28000,
    //         "img": "https://di-uploads-pod35.dealerinspire.com/newtonnissanofgallatin/uploads/2021/03/2021-Nissan-Frontier-2021-Nissan-Frontier-Overview-Left.jpeg",
    //         "features": {
    //             "engine": "3.8L V6",
    //             "power": "310 hp",
    //             "transmission": "9-speed automatic",
    //             "drive": "rear-wheel / all-wheel",
    //             "capacity": "5 passengers"
    //         }
    //     },
    //     {
    //         "id": 21,
    //         "brand": "Chevrolet",
    //         "model": "Malibu",
    //         "year": 2021,
    //         "price": 24000,
    //         "img": "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2023/cars/malibu/mov/01-images/colorizer/2023-malibu-1sp-g5d-colorizer.jpg?imwidth=960",
    //         "features": {
    //             "engine": "1.5L turbocharged 4-cylinder",
    //             "power": "160 hp",
    //             "transmission": "continuously variable",
    //             "drive": "front-wheel",
    //             "capacity": "5 passengers"
    //         }
    //     },
    //     {
    //         "id": 22,
    //         "brand": "BMW",
    //         "model": "Coupe",
    //         "year": 2020,
    //         "price": 50000,
    //         "img": "https://www.bmw.com.pe/content/dam/bmw/common/all-models/4-series/series-overview/bmw-4-series-seo-page-model-carousel-02.jpg",
    //         "features": {
    //             "engine": "3.0L inline 6-cylinder",
    //             "power": "382 hp",
    //             "transmission": "8-speed automatic",
    //             "drive": "rear-wheel",
    //             "capacity": "4 passengers"
    //         }
    //     },
    //     {
    //         "id": 23,
    //         "brand": "Subaru",
    //         "model": "Forester",
    //         "year": 2022,
    //         "price": 25000,
    //         "img": "https://cars.usnews.com/static/images/Auto/izmo/i159615461/2023_subaru_forester_angularfront.jpg",
    //         "features": {
    //             "engine": "2.5L 4-cylinder",
    //             "power": "182 hp",
    //             "transmission": "continuously variable",
    //             "drive": "all-wheel",
    //             "capacity": "5 passengers"
    //         }
    //     },
    //     {
    //         "id": 24,
    //         "brand": "DFSK",
    //         "model": "Glory",
    //         "year": 2021,
    //         "price": 17000,
    //         "img": "https://onecarz.com/uploads/car/2022-06-15-08-48-09-rw.jpg",
    //         "features": {
    //             "engine": "1.5L turbocharged 4-cylinder",
    //             "power": "150 hp",
    //             "transmission": "6-speed manual",
    //             "drive": "front-wheel",
    //             "capacity": "5 passengers"
    //         }
    //     },
    //     {
    //         "id": 25,
    //         "brand": "Honda",
    //         "model": "City Sport",
    //         "year": 2020,
    //         "price": 22000,
    //         "img": "https://hondaankhanh.net/wp-content/uploads/2022/03/tai-xuong-1-4.png",
    //         "features": {
    //             "engine": "1.5L turbocharged 4-cylinder",
    //             "power": "180 hp",
    //             "transmission": "continuously variable",
    //             "drive": "front-wheel",
    //             "capacity": "5 passengers"
    //         }
    //     },
    //     {
    //         "id": 26,
    //         "brand": "Audi",
    //         "model": "Sedan",
    //         "year": 2022,
    //         "price": 45000,
    //         "img": "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Audi-A5-Sportback-120420212020.jpg&w=872&h=578&q=75&c=1",
    //         "features": {
    //             "engine": "2.0L turbocharged 4-cylinder",
    //             "power": "248 hp",
    //             "transmission": "7-speed automatic",
    //             "drive": "front-wheel / all-wheel",
    //             "capacity": "5 passengers"
    //         }
    //     },
    //     {
    //         "id": 27,
    //         "brand": "Porsche",
    //         "model": "Cayman",
    //         "year": 2022,
    //         "price": 70000,
    //         "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmMnxyM8aAes1wu7tDiKdDKHGYUJzgY1Zc6oBP0MaeYIdKbEeKMc2xwJHVkTAbu2UsslM&usqp=CAU",
    //         "features": {
    //             "engine": "2.0L turbocharged 4-cylinder",
    //             "power": "300 hp",
    //             "transmission": "7-speed automatic",
    //             "drive": "rear-wheel",
    //             "capacity": "2 passengers"
    //         }
    //     },
    //     {
    //         "id": 28,
    //         "brand": "Jeep",
    //         "model": "4x4",
    //         "year": 2022,
    //         "price": 35000,
    //         "img": "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_86b90098e03149d0bc211f20288ba79e.jpg",
    //         "features": {
    //             "engine": "3.6L V6",
    //             "power": "285 hp",
    //             "transmission": "6-speed manual",
    //             "drive": "four-wheel",
    //             "capacity": "5 passengers"
    //         }
    //     },
    //     {
    //         "id": 29,
    //         "brand": "Kia",
    //         "model": "Picanto",
    //         "year": 2022,
    //         "price": 14000,
    //         "img": "https://www.kia.com/content/dam/kwcms/gt/en/images/showroom/picanto-ja-18my/features/360vr/01_UD/07.jpg",
    //         "features": {
    //             "engine": "1.0L 3-cylinder",
    //             "power": "67 hp",
    //             "transmission": "5-speed manual",
    //             "drive": "front-wheel",
    //             "capacity": "5 passengers"
    //         }
    //     },
    //     {
    //         "id": 30,
    //         "brand": "Ford",
    //         "model": "Fiesta",
    //         "year": 2022,
    //         "price": 16000,
    //         "img": "https://www.sernac.cl/portal/619/articles-5327_imagen_01.jpg",
    //         "features": {
    //             "engine": "1.6L 4-cylinder",
    //             "power": "120 hp",
    //             "transmission": "5-speed manual",
    //             "drive": "front-wheel",
    //             "capacity": "5 passengers"
    //         }
    //     }
    // ].find(car => car.id == id)

    if (Object.entries(carDetail).length !== 0) {
        return (
            <>
                <img src={carDetail.img} alt="car" />
                <div>
                    <h4>Name car: {carDetail.brand} {carDetail.model}</h4>
                    <h4>Price: {carDetail.price}</h4>
                    {/* <h4>Location: </h4>
                    <h4>Seller information: </h4>
                    <p></p> */}
                </div>
                <div>
                    <h3>Features:</h3>
                    <h4>Brand: {carDetail.brand}</h4>
                    <h4>Model: {carDetail.model}</h4>
                    <h4>Year: {carDetail.year}</h4>
                    {/* <h4>Mileage: </h4>
                    <h4>Version: </h4>
                    <h4>Color: </h4>
                    <h4>Fuel: </h4>
                    <h4>Doors: </h4> */}
                    <h4>Transmission: {carDetail.features.transmission}</h4>
                    {/* <h4>Type of bodywork: </h4>
                    <h4>Engine: </h4> */}
                    <h4>Capacity: {carDetail.features.capacity}</h4>
                    <h4>Drive: {carDetail.features.drive}</h4>
                    <h4>Power: {carDetail.features.power}</h4>
                    <h4>Engine: {carDetail.features.engine}</h4>
                </div>
                {/* <div>
                    <h3>Description:</h3>
                    <p></p>
                </div> */}
                <div>
                    <input type="text" />
                    <button type="submit">Ask</button>
                </div>
            </>
        )
    }
    else
        return (
            <>
                <h1>loading...</h1>
            </>
        )
}