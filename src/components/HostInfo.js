import React, { useState } from "react";
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider,
} from "semantic-ui-react";
import "../stylesheets/HostInfo.css";

function HostInfo({ selectedHost, onUpdateHosts, onChangeLocation }) {
  const { id, imageUrl, firstName, gender, area, active } = selectedHost
  
  const [options] = useState([
    { key: "high_plains", text: "HIGH PLAINES", value: "high_planes" },
    { key: "python_pass", text: "PYTHON PATH", value: "python_pass" },
    { key: "lowlands", text: "LOWLANDS", value: "lowlands" },
    { key: "badlands", text: "BADLANDS", value: "badlands" },
    { key: "under_construction", text: "UNDER CONSTRUCTION", value: "under_construction" },
    { key: "pariah", text: "PARIAH", value: "pariah" },
  ]);

  function handleOptionChange(e, { value }) {
    onChangeLocation(value, id)
  }


  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={imageUrl}
          floated="left"
          size="small"
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {firstName} | {(gender === "Male") ? <Icon name="man" /> : <Icon name="woman" />}
            </Card.Header>
            <Card.Meta>
              <Radio
                onChange={()=>onUpdateHosts(selectedHost)}
                label={(active) ? "Active" : "Decomissioned"}
                checked={(active) ? true : false}
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area:
            <Dropdown
              onChange={handleOptionChange}
              value={area}
              options={options}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;
