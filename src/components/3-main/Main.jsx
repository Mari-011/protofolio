import React from "react";
import "../3-main/Main.css";
export default function Main() {
  return (
    <main className="flex ">
      <section className=" flex  left-section">
        <button className="active">All Projects</button>
        <button>HTML & CSS</button>
        <button>JavaScript</button>
        <button>React & MUI</button>
        <button>Node & Express</button>
      </section>
      <section className=" flex right-section">
        {["aa","bb","cc",1,7].map((item)=>{
          return(
            <article key={item} className="card">
            <img src="/z.png" width={266} alt="" />
            <div className="box  " style={{ width: "266px" }}>
              <h1 className="title">landing page1</h1>
              <p className="subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur{" "}
              </p>
              <div className="flex icons ">
                <div  style={{gap:"11px"}}className="flex">
                  <div className="icon-link"></div>
                  <div className="icon-github"></div>
                </div>
  
                <a href="" className="link flex">
                  more
                  <span  style={{alignSelf:"end"}} className="icon-arrow-right2"></span>
                </a>
              </div>
            </div>
          </article>
          )
        })}
       
      </section>
    </main>
  );
}
