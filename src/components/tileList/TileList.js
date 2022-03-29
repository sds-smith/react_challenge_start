import React from "react";
import { Tile } from '../tile/Tile'

export const TileList = ({list}) => {
  return (
    <div>
      {list.map((item, index) => {
        return <Tile item={item} key={index} />
      })}
    </div>
  );
};
