import React from "react";
import {Link} from "react-router-dom";


function Learn() {
    return (
        <div>
            <Link to="/work"
                  role="button"
                  className="btn btn-link nav-link">
                Hide Projects
            </Link>
            <div className="card">
                <div className="img-container">
                    <a href="https://thawing-caverns-69795.herokuapp.com/" >
                        <img className="image" src={process.env.PUBLIC_URL + '/images/clickgame.png'} alt="click game" />
                    </a>
                    <a href="https://whispering-spire-37868.herokuapp.com/" >
                        <img className="image" src={process.env.PUBLIC_URL + '/images/burgers.png'} alt="burgers" />
                    </a>
                    <a href="https://evening-headland-21699.herokuapp.com" >
                        <img className="image" src={process.env.PUBLIC_URL + '/images/sociallyawkward.png'} alt="socially awkward" />
                    </a>
                    <a href="http://www.nikkipetersen.dev/Project1/" >
                        <img className="image" src={process.env.PUBLIC_URL + '/images/eventsearch.png'} alt="event search" />
                    </a>
                    <a href="http://www.nikkipetersen.dev/TrainSchedule/" >
                        <img className="image" src={process.env.PUBLIC_URL + '/images/trains.png'} alt="trains" />
                    </a>

                    <a href="https://www.nikkipetersen.dev/unit-4-game/" >
                        <img className="image" src={process.env.PUBLIC_URL + '/images/crystal.png'} alt="click game" />
                    </a>

                </div>
            </div>
        </div>
    );
}

export default Learn;
