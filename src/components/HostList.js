import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host";

function HostList({ hosts, handleClick, selectedHost}) {
  return (
    <Card.Group itemsPerRow={6}>
      {hosts.map(host => <Host key={host.id} host={host} handleClick={handleClick} selectedHost={selectedHost}/>)}
    </Card.Group>
  );
}

export default HostList;
