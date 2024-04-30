import React from "react";

const cities = ["Manila", "Cebu City", "Antipolo", "Davao"];

const OneComponents = () => {
  return (
    <>
      <ul className="list-group">
        {cities.map((city,index) => {
            return (
                <li className="list-group-item" key={index} >{city}</li>
            )
        })}
      </ul>
    </>
  );
};

export default OneComponents;
