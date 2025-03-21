import React, { useState } from "react";
import "../3-main/Main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "motion/react";
export default function Main() {
  const [currentActive, setCurrentActive] = useState("all");
 
  const [projects, setProjects] = useState([]);
  const [arr, setArr] = useState(myProjects);
  







  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);
    const newArray = projects.filter((item) => {
      const zzz = item.category.find((cat) => {
        return cat === buttonCategory;
      });

      return zzz === buttonCategory;
    });

    setArr(newArray);
  };


  


  return (
    <main className="flex ">
      <section className=" flex  left-section">
        <button
          className={currentActive === "all" ? "active" : ""}
          onClick={() => {
            setCurrentActive("all");
            setArr(myProjects);
          }}
        >
          All Projects
        </button>
        <button
          className={currentActive === "css" ? "active" : ""}
          onClick={() => {
            handleClick("css");
          }}
        >
          {" "}
          HTML & CSS
        </button>
        <button
          className={currentActive === "flutter" ? "active" : ""}
          onClick={() => {
            handleClick("flutter");
          }}
        >
          {" "}
          Flutter
        </button>
        <button
          className={currentActive === "react" ? "active" : ""}
          onClick={() => {
            handleClick("react");
          }}
        >
          {" "}
          React & MUI
        </button>
        <button
          className={currentActive === "node" ? "active" : ""}
          onClick={() => {
            handleClick("node");
          }}
        >
          {" "}
          Node & JavaScript
        </button>
      </section>
      <section className=" flex right-section  ">
        <AnimatePresence>
        {projects.map((item) => {
          return (
            <motion.article key={item.name} className="card  "
            layout
            initial={{transform:"scale(0)"}}
            animate={{transform:"scale(1)"}}
            transition={{type:"spring", damping:8,stiffness:50}}
            >
            
              <img
                src={item.imgPath}
               width={240}
                alt=""
                className="image-projects "
              />
             
            
              <div className="box  " 
              style={{ width: "240px" }}
              >
                <h1 className="title">{item.projectTitle}</h1>
                <p className="subtitle">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur
                </p>
                <div className="flex icons ">
                  <div 
                 
                   className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>

                  <a href="" className="link flex">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right2"
                    ></span>
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
        </AnimatePresence>
      
      </section>
    </main>
   
  );
}
