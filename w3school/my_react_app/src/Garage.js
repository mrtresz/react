import Car from "./Car";

function Garage(props) {
    const cars = props.cars
    return <>
        <h1> Garage</h1>
        {cars.map((c) => {
            return <Car brand={c} />
        })}
    </>
}

export default Garage;