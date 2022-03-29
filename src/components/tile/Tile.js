import React from "react";

export const Tile = ({item}) => {

  const listing = Object.values(item)

  
  return (
    <div className="tile-container">
      {
      listing.map((data, index) => {
        if (index === 0) {
          return <p className="tile-title" key={index}>{data}</p>
        } else {
          return <p className="tile" key={index}>{data}</p>
        }
      })
      }
    </div>
  );
};
