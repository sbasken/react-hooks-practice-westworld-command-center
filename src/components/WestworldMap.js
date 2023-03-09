import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area"

function WestworldMap({ areas, activeHosts, handleClick, selectedHost }) {
  return (
  <Segment id="map">
    { areas.map(area => <Area 
      key={area.id} 
      area={area} 
      activeHosts={activeHosts} 
      handleClick={handleClick}
      selectedHost={selectedHost}
    />)}
  </Segment>
  );
}

export default WestworldMap;
