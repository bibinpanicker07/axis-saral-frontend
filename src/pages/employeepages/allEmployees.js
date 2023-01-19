import React from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import styles from "./allEmployees.module.css"
function AllEmployees() {
    const [employees, setEmployees] = useState([]);
    const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

    useEffect(() => {
      axios.get("http://localhost:8080/employee").then((response) => {
        setEmployees(response.data);
      });
    }, []);
  return (
    <div className={"all"}>
        <ToggleButtonGroup

        className={styles.toggle}
      color="secondary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="web">Employees</ToggleButton>
      <ToggleButton value="android">Managers</ToggleButton>
    </ToggleButtonGroup>
    <div class="card" style={ { width: "18rem" } }>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    {/* <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a> */}
  </div>
    </div>
    
    
    </div>
  )
}

export default AllEmployees