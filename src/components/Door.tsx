import React from "react";
import { useState } from "react";

const Door = ({Image, car, door_no, setHandleDoor}: {Image: any, car: boolean, door_no: number, setHandleDoor: Function}) =>{
    const [opened, isOpened] = useState(false);
    return(
        <>
            <div className="door">
                <div className={opened ? "door_opened": "door_closed"} onClick={()=> {isOpened(!opened), setHandleDoor(car ? "car": "goat")}}>
                    door {door_no}
                </div>
                <img src={Image}/>
            </div>
        </>
    )
}

export default Door;