import React from 'react'
import styles from "./Project.module.css"
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function Project() {

    const params = useParams();
    const [project, setProject] = useState([]);
    useEffect(() => {
      const setID = params.id;
      if(params.user === "employee"){
      axios.get(`http://localhost:8080/project/ ${setID}`).then((response) => {
        setProject(response.data);   
        console.log(response.data);
      });}

    }, []);

    
  return (
    <div className={styles.project}>





    </div>
  )
}

export default Project