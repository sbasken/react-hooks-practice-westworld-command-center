import React, { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap"
import Headquarters from "./Headquarters"

function App() {
  const [ areas, setAreas ] = useState([])
  const [ hosts, setHosts ] = useState([])
  const [ selectedHost, setSelectedHost ] = useState([])

  const showDetail = (host) => {
    setSelectedHost(host)
  }

  const updateHosts = (updatedHost) => {
    setSelectedHost(updatedHost)
    const newHosts = hosts.map(host => {
      if (host.id === updatedHost.id) {
        return updatedHost
      } else {
        return host
      }
    })
    setHosts(newHosts) 
  }

  useEffect(() => {
    fetch("http://localhost:3001/hosts")
      .then(res => res.json())
      .then(setHosts)
  }, [])

  useEffect(() => {
    fetch("http://localhost:3001/areas")
      .then(res => res.json())
      .then(setAreas)  
  }, [])

  return (
    <Segment id="app">
      <WestworldMap areas={areas}/>
      <Headquarters hosts={hosts} onUpdateHosts={updateHosts} showDetail={showDetail} selectedHost={selectedHost}/>
    </Segment>
  );
}

export default App;
