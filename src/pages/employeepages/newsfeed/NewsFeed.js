import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./NewsFeed.module.css";
import Comments from './Comments';
function NewsFeed(props) {
  const [post, setPost] = useState([]);
 
  useEffect(() => {
    axios.get(`http://localhost:8080/news`).then((response) => {
      setPost(response.data);     
    });
  },[]);
  return (
   <> 
    <div> <div className={styles.newsfeed}>
      <div className="container ">

      <div
          className={styles.heading}
          style={{  textAlign: "center" }}
        >
          NEWS FEED
        </div>
         
              <div className="row">
                {post.map((item, index) => {
                  
                  return (
                    <Comments posts={item} index={index}/>
                  );
                })}
              </div>



      </div>
    </div>
    </div>
 
    </>
  );
}

export default NewsFeed;