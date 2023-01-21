import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./allProjects.module.css"
function AllProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/allprojects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  return (
    <div className={styles.allprojects}>
      <div className="container ">
      <div
          className={styles.heading}
          style={{ paddingTop: "1%", textAlign: "center" }}
        >
          LIVE PROJECTS
        </div>
        <div class="row">
        {projects?.map((item, index) => {
          return(
          <div class="col-12  col-md-4">
              <Link
                style={{ textDecoration: "none", color: "#15171c" }}
                // to={`/${item.id}`}
                key={index}
              >
                <div class={"card text-center  m-5 p-5 shadow "+ styles.cards}  style={{backgroundColor: "whitesmoke" }}>
                  <div class="card-body">
                    <h5 class="card-title ">{item.projectName}</h5>
                  </div>
                </div>
              </Link>
         
          </div>
             )})}
        </div>
      </div>
    </div>
  );
}

export default AllProjects;
