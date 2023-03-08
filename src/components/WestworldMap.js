import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area"

function WestworldMap({ areas, activeHosts, handleClick }) {
  return (
  <Segment id="map">
    { areas.map(area => <Area key={area.id} area={area} activeHosts={activeHosts} handleClick={handleClick}/>)}
  </Segment>
  );
}

export default WestworldMap;
