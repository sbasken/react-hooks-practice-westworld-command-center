import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({ host, handleClick, selectedHost }) {
  const { imageUrl } = host
  /* NOTE: The className "host selected" renders a different style than simply "host". */
  const clicked = () => {
    handleClick(host)
  } 

  return (
    <Card
      className={(selectedHost === host) ? "host selected" : "host"}
      onClick={clicked}
      image={imageUrl}
      raised
      link
    />
  );
}

export default Host;
