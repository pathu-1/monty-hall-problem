import React, { useState } from "react";
import Goat from "/images/goat.png"
import Car from "/images/car.png";
import Door from "./door";

// let doors = [Goat, Car, Goat]
interface DoorInterface{
    [index: number]: {
        src: any,
        car: boolean
    }
}
let doors: DoorInterface = {
    1:{
        src: Goat,
        car: false
    },
    2:{
        src: Car,
        car: true
    },
    3: {
        src: Goat,
        car: false
    }
}



const Game = () =>{
    const doors_array = [1, 2, 3].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5);
    const [handleDoor, setHandleDoor] = useState("goat");
    return(
        <>
            <div className="game_area">
                <div className="game_area_doors">
                    <Door Image={doors[doors_array[0]].src}  car={doors[doors_array[0]].car} door_no={1} setHandleDoor={setHandleDoor}/>
                    <Door Image={doors[doors_array[1]].src}  car={doors[doors_array[1]].car} door_no={2} setHandleDoor={setHandleDoor}/>
                    <Door Image={doors[doors_array[2]].src}  car={doors[doors_array[2]].car} door_no={3} setHandleDoor={setHandleDoor}/>
                </div>
            </div>
        </>
    )
}

export default Game;