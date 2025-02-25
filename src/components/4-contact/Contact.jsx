import React from "react";
import "../4-contact/Contact.css";
export default function Contact() {
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-mail"></span>
        Contact us
      </h1>
      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis eligendi
        hic molestiae ab sint eaque vero iure, deserunt ipsum quisquam. Quam
        voluptatem error unde iure vero repellat velit eaque molestias!
      </p>
      <div className="flex">
        <form className="">
          <div className="flex">
          <label htmlFor="email">Email Address:</label>
          <input required  type="email" name="" id="email" />
          </div>
         <div  className="flex" style={{marginTop:"24px"}}>
         <label htmlFor="message">Your Message:</label>
         <textarea required name=" " id="message" placeholder="message"></textarea>
         </div>
          <button className="submit">Submit</button>
        </form>
        <div className=" animation">hhhhhhh</div>
      </div>
    </section>
  );
}
