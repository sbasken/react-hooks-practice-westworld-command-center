import React from "react";
import "../stylesheets/Area.css";

function Area({area}) {
  const { id, name, limit, auth_req } = area
  return (
    <div
      className="area"
      id={name}
    >
      <h3 className="labels">
        {name.toUpperCase().replace(/_/g, "  ")}
      </h3>
      {/* See Checkpoint 1 item 2 in the Readme for a clue as to what goes here */}
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
