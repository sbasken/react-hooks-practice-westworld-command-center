import React, { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap"
import Headquarters from "./Headquarters"

function App() {
  const [ areas, setAreas ] = useState([])
  const [ hosts, setHosts ] = useState([])
  const [ selectedHost, setSelectedHost ] = useState([])
  const [ activeHosts, setActiveHosts ] = useState([])
  const [ discomissionedHosts, setDiscomissionedHosts ] = useState([])

  function handleRadioChange(selectedHost) {
    const { id, active } = selectedHost
    const newActive = !active
    console.log(newActive)
    fetch(`http://localhost:3001/hosts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ active: newActive})
    })
    .then(res => res.json())
    .then(updatedHost => {
      setSelectedHost(updatedHost)
    const newHosts = hosts.map(host => {
      if (host.id === updatedHost.id) {
        return updatedHost
      } else {
        return host
      }
    })
    setHosts(newHosts) 
    })
  }

  const showDetail = (host) => {
    setSelectedHost(host)
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

  useEffect(() => {
    fetch("http://localhost:3001/hosts")
      .then(res => res.json())
      .then(hostsData => {
        const activeOnes = hostsData.filter(host => host.active === true)
        setActiveHosts(activeOnes)
        const discomOnes = hostsData.filter(host => host.active === false)
        setDiscomissionedHosts(discomOnes)
       })
  }, [hosts])


  return (
    <Segment id="app">
      <WestworldMap areas={areas} activeHosts={activeHosts} handleClick={handleRadioChange}/>
      <Headquarters hosts={discomissionedHosts} onUpdateHosts={handleRadioChange} handleClick={showDetail} selectedHost={selectedHost}/>
    </Segment>
  );
}

export default App;
