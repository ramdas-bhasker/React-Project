import React from "react";
import { NavLink } from "react-router-dom";

const BlogList = (props) => {
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="blog-card">
          <NavLink to="/">
            <img src={props.imgsrc} alt={props.imgalt} />
          </NavLink>
          <div className="blog-content">
            <NavLink to="/">
              <h3>{props.title}</h3>
            </NavLink>
            <ul className="blog-admin">
              <li>
                <NavLink to="/">
                  <i className="bx bxs-user"></i>
                  {props.user}
                </NavLink>
              </li>
              <li>
                <i className="bx bx-calendar-alt"></i> {props.date}
              </li>
            </ul>
            <p>{props.text}</p>
            <NavLink to="/" className="read-more-btn">
              Read More <i className="bx bxs-chevrons-right"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogList;
