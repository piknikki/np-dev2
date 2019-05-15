import React from "react";
import {Link} from "react-router-dom";
import './style.css';


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

                    <h2>A list of the above and some other projects: </h2>
                    <ul>


                        <li>A Click Game, utilizing React front end and deployed with Heroku (no back end) -- <a href="https://thawing-caverns-69795.herokuapp.com/" target="_blank">Deployed</a> and <a href="https://github.com/piknikki/ReactClickGame">Repository</a> </li>

                        <li>A Burger app, utilizing node.js, express, SQL, and Heroku -- <a href="https://whispering-spire-37868.herokuapp.com/" target="_blank">Deployed</a> and <a href="https://github.com/piknikki/burger">Repository</a> </li>

                        <li>A Friend Finder Heroku app, utilizing node.js, express, and Heroku -- <a href="https://evening-headland-21699.herokuapp.com" target="_blank">Deployed</a> and <a href="https://github.com/piknikki/friendfinder3000">Repository</a> </li>

                        <li>An event search app, utilizing Bootstrap, jQuery, AJAX, APIs, and Firebase -- <a href="http://www.nikkipetersen.dev/Project1/" target="_blank">Deployed</a> and <a href="https://github.com/piknikki/Project1">Repository</a></li>

                        <li>A train scheduler app, utilizing Firebase -- <a href="http://www.nikkipetersen.dev/TrainSchedule/" target="_blank">Deployed</a> and <a href="https://github.com/piknikki/TrainSchedule">Repository</a></li>

                        <li>A Gif picker app, utilizing jQuery -- <a href="http://www.nikkipetersen.dev/GifTastic/" target="_blank">Deployed</a> and <a href="https://github.com/piknikki/GifTastic">Repository</a></li>

                        <li>A Crystal collector game, utilizing JavaScript -- <a href="https://www.nikkipetersen.dev/unit-4-game/" target="_blank">Deployed</a> and <a href="https://github.com/piknikki/unit-4-game">Repository</a></li>

                        <li>A to-do list Heroku app, utilizing node.js, EJS templating, MongoDB/Mongoose, Express, and a sprinkling of lodash -- <a href="https://morning-falls-36786.herokuapp.com" target="_blank">Deployed</a></li>

                        <li>A sign-up Heroku app, utilizing node.js, express, and an API key -- <a href="https://npsignup.herokuapp.com/" target="_blank">Deployed</a></li>

                        <li>A drum kit project, utilizing event handlers -- <a href="/DrumKit/index.html" target="_blank">Deployed</a> and <a href="https://github.com/piknikki/piknikki.github.io/tree/master/DrumKit">Repository</a></li>

                        <li>TinDog, a mock-up of Tinder for Dogs, utilizing CSS -- <a href="TinDog/index.html" target="_blank">Deployed</a> and <a href="https://github.com/piknikki/piknikki.github.io/tree/master/TinDog">Repository</a></li>

                        <li>Another alternative option for my website, utilizing Bootstrap -- <a href="ello/ello.html" target="_blank">Deployed</a> and <a href="https://github.com/piknikki/piknikki.github.io/tree/master/ello">Repository</a></li>

                    </ul>

                </div>
            </div>
        </div>
    );
}

export default Learn;
