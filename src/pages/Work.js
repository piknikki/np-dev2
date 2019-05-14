import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";

import './style.css';

function Work(props) {
    return (
        <div id="work">
            <div className="work-section">
                <h1 className="work-section-h1">My work to date . . . </h1>
                <p>
                    I started programming when I was in 6th grade, but I haven't always been a coder. Although I started then,
                    I have done a great number of things in the time since. I've been a firefighter, a model, a life coach, bussed tables,
                    worked on an ambulance, in an ER, and an operating room. I've run a nonprofit and even got a Masters in Nonprofit
                    Management. (Oh, and I also went to graduate medical school).
                    <br/><br/>
                    I keep coming back to programming and tech. I am currently finishing up a bootcamp cohort at the University
                    of Denver for Full Stack Software Development, and it has turned out to be a deeply rewarding experience.
                    I have found myself thrilled at what I can make, disappointed when I can't get the code to bend to my whims,
                    and challenged to keep pursuing that end. I work with the MERN stack (MongoDB, Express, React, and Node.js) and MySQL, and I
                    previously learned SQL (PostgreSQL) and Python.  Right now I'm really loving React!
                    <br/><br/>
                </p>

                        <Link
                            to={`${props.match.url}/learn`}
                            role="button"
                            className="btn btn-link nav-link">
                            See More
                        </Link>

                        <Link to="/work"
                              role="button"
                              className="btn btn-link nav-link">
                            See Less
                        </Link>
                        <Route exact path={`${props.match.url}/learn`} component={Learn} />

            </div>
        </div>
    );
}
export default Work;
