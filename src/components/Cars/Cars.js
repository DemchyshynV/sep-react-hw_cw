import {useEffect, useState} from "react";

import {carService} from "../../services/car.service";
import Car from "../Car/Car";

const Cars = ({trigger, update, setCarForUpdate}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(value => setCars([...value]))
    }, [trigger])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} update={update} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export default Cars;
