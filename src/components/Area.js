import React from "react";
import "../stylesheets/Area.css";
import HostList from "./HostList";

function Area({area, activeHosts, handleClick, selectedHost}) {
  const { name } = area

  const hosts = activeHosts.filter(activeHosts => activeHosts.area === name)
  return (
    <div
      className="area"
      id={name}
    >
      <h3 className="labels">
        {name.toUpperCase().replace(/_/g, "  ")}
      </h3>
      <HostList hosts={hosts} handleClick={handleClick} selectedHost={selectedHost}/>
    </div>
  );
}

Area.propTypes = {
  hosts: function (props) {
    if (props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      );
    }
  },
};

export default Area;
