import React from "react";
import { NewRoomForm } from "./NewRoomForm";

export const House = (props) => {
  const { house, updateHouse } = props;

  const deleteRoom = (roomId) => {
    const updateHouse = {
      ...house,
      rooms: house.rooms.filter((x) => x._id !== roomId),
    };
    updatedHouse(updatedHouse);
  };

  const addNewRoom = (room) =>
    updateHouse({ ...house, rooms: [...house.rooms, room] });

  const rooms = () => (
    <ul>
      {house.rooms.map((room, index) => (
        <li key={index}>
          <label> {"${room.name} Area: ${room.area}"} </label>
          <button onClick={(e) => deleteRoom(room._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
