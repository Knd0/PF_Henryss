import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars, filterByBrand, filterByYear, orderByAlf, orderByKM, orderByPrice, cleanState } from "../../Redux/actions";
import style from '../Filters/Filters.module.css'

export default function Filters(props) {
    const dispatch = useDispatch();
    // const [order, setOrder] = useState("");
    const cars =useSelector((state)=>state.allcars)
    let arr = [];
    for (let i = 0; i < cars.length; i++) {
      for (let j = i + 1; j < cars.length; j++) {
        if (cars[i].year !== cars[j].year && !arr.includes(cars[j].year)) {
          arr.push(cars[j].year);
        }
      }
    }

    useEffect(() => {
        dispatch(getCars());
        dispatch(cleanState());
    }, [dispatch]);


    const handleSortAlf = (e) => {
        props.setSelectedOptionAlf(e.target.value);
        e.preventDefault();
        dispatch(orderByAlf(e.target.value));
        // setOrder(`Order ${e.target.value}`)
        // setCurrentPage(1);
        props.setSelectedOptionPrice("")
        props.setSelectedOptionKm("")

    }
    function handleFilteredBrand(e) {
        props.setSelectedOptionBrand(e.target.value);
        dispatch(filterByBrand(e.target.value));
        // setOrder(`Order ${e.target.value}`)
        // setCurrentPage(1);
    }

    function handleFilteredYear(e) {
        props.setSelectedOptionYear(e.target.value);
        e.preventDefault()
        dispatch(filterByYear(e.target.value));
        // setOrder(`Order ${e.target.value}`)
        // setCurrentPage(1);
    }

    // function handleSortAlf(e) {
    //     e.preventDefault();
    //     dispatch(orderByAlf(e.target.value));
    //     setOrder(`Order ${e.target.value}`)
    //     // setCurrentPage(1);

    // }

    function handleSortKM(e) {
        props.setSelectedOptionKm(e.target.value);
        e.preventDefault();
        dispatch(orderByKM(e.target.value));
        // setOrder(`Order ${e.target.value}`)
        // setCurrentPage(1);
        props.setSelectedOptionAlf("")
        props.setSelectedOptionPrice("")
    }

    function handleSortPrice(e) {
        props.setSelectedOptionPrice(e.target.value)
        e.preventDefault();
        dispatch(orderByPrice(e.target.value));
        // setOrder(`Order ${e.target.value}`)
        // setCurrentPage(1);
        props.setSelectedOptionAlf("")
        props.setSelectedOptionKm("")
    }
    // function handleChange(e) {
    //     e.preventDefault()
    //     setInput(e.target.value)
    // }

    return (
        <div className={style.filtros}>
            <div>
                Order alphabetically:
                <select className={style.select} value={props.selectedOptionAlf} onChange={handleSortAlf}>
                    <option value="" disabled>--select--</option>
                    <option value="atoz">A - Z</option>
                    <option value="desc">Z - A</option>
                </select>
            </div>
            <div>
                Order by price:
                <select className={style.select} value={ props.selectedOptionPrice} onChange={(e) => handleSortPrice(e)}>

                    <option value="" disabled>--select--</option>
                    {/* <option value="All">All</option> */}
                    <option value="mayp">Minor to Major</option>
                    <option value="menp">Major to Minor</option>
                </select>
            </div>
            <div>
                Order by KM:
                <select className={style.select} value={ props.selectedOptionKm} onChange={(e) => handleSortKM(e)}>
                    <option value="" disabled>--select--</option>
                    {/* <option value="All">All</option> */}
                    <option value="maykm">Minor to Major</option>
                    <option value="menkm">Major to Minor</option>
                </select>
            </div>
            <div>
                Filter by year:
                <select className={style.select} value={ props.selectedOptionYear} onChange={e => handleFilteredYear(e)}>
                    <option value="" disabled>--select--</option>
                    <option value="All">All</option>
                     {arr?.map((a)=>{
                        return(
                            <option key={a}>{a}</option>
                        )
                     })}
                        
                     
                </select>
            </div>
            <div>
                Filter by brand:
                <select className={style.select} value={ props.selectedOptionBrand} onChange={e => handleFilteredBrand(e)}>
                    <option value="" disabled>--select--</option>
                    <option value="All">All</option>
                    <option value="Audi">Audi</option>
                    <option value="Honda">Honda</option>
                    <option value="DFSK">DFSK</option>
                    <option value="Subaru">Subaru</option>
                    <option value="BMW">BMW</option>
                    <option value="Chevrolet">Chevrolet</option>
                    <option value="Nissan">Nissan</option>
                    <option value="Kia">Kia</option>
                    <option value="Volkswagen">Volkswagen</option>
                    <option value="Porsche">Porsche</option>
                    <option value="Land Rover">Land Rover</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Mazda">Mazda</option>
                    <option value="Ford">Ford</option>
                    <option value="Jeep">Jeep</option>
                    <option value="Tesla">Tesla</option>
                </select>
            </div>
        </div>
    )
}