import React from "react";
import { Segment } from "semantic-ui-react";
import HostList from "./HostList";

function ColdStorage({ hosts, handleClick, selectedHost }) {
  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact>
        <HostList hosts={hosts} handleClick={handleClick} selectedHost={selectedHost}/>
      </Segment>
    </Segment.Group>
  );
}

export default ColdStorage;
