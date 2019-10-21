import React from 'react';
import Particles from 'react-particles-js';
import {Link} from 'react-router-dom';
import '../Home.css';
import { faUserCircle , faGrinHearts,faComments, faHeart, faEnvelope, faGift,faComment} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LovePoll from './LovePoll';




const particleOpt = {
    particles:{
        "number": {
            "value": 80
        },
        "color":{
            "value": "#60ed53"
        },
        "shape":{
            "type": "circle",
            "stroke":{
                "width": 1,
                "color": "#f2ef46"
            }
        },
        "opacity":{
            "value": 0.5,
            "random": "true"
        },
        "size": {
            "value": 3
        }
    },
    "line_linked":{
        "enable":true
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }

}

const Home = (props) =>{
console.log(props.users);

    return (
      <div className="box">
        <div className="home-text">
          <h1 id="greeting">Personally Unique</h1>
          <p>Personality begins where comparison ends</p>
          <Link to="/QuestionOne">
            <button className="ui purple button">Register</button>
          </Link>
        </div>

        <div id="friends"></div>

        <div className="card container">
          <div className="card-body">
            <div className="ui segment">
              <h3 className="ui header">Steps to find you match</h3>
              <div className="d-flex justify-content-around">
                <div className="info">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faUserCircle}
                    size="3x"
                  />

                  <h3 className="tag">Create Profile</h3>
                </div>
                <div className="info">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faGrinHearts}
                    size="3x"
                  />

                  <h3 className="tag">Find Matches</h3>
                </div>
                <div className="info">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faComments}
                    size="3x"
                  />

                  <h3 className="tag2">Start Dating</h3>
                </div>
              </div>
              <div className="ui section divider"></div>
              <h3 className="ui header"> Success Stories</h3>
              <h3 className="ui header2">Featured Profiles</h3>
              <div className="d-flex justify-content-around">
                <div className="info2">
                  <div className="card mb-3 stories">
                    <div className="row no-gutters">
                      <div className="col-md-4 story">
                        <img
                          src="https://www.lotuspointwellness.com/wp-content/uploads/2015/10/premaritalmain-300x300.jpg"
                          className="card-img"
                          alt="young-couple"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title story-title">
                            Perfect Chemistry
                          </h5>
                          <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </p>
                          <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.This content is a little bit
                            longer.This content is a.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div className="card mb-3 stories">
                    <div className="row no-gutters">
                      <div className="col-md-4 story">
                        <img
                          src="https://images.squarespace-cdn.com/content/v1/514a0556e4b0de06a6f0c60a/1369418829141-DVH5C4OQMF6SYYVE2D77/ke17ZwdGBToddI8pDm48kO0lMDxNL9k40kV8hU5yU-BZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHhYkxqWDMMlq5YS25qC0mjrirlPhp-J3JewslZ2lNB1pG3kqknfvZFsSCDOsU_GUM/couple+massage.jpg"
                          className="card-img"
                          alt="young-couple"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title story-title">
                            Hearts Knit Together
                          </h5>
                          <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </p>
                          <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.This content is a little bit
                            longer.This content is a.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="info2">

                <div className="card mb-3 feature">
                    <div className="row no-gutters">
                      <div className="col-md-4">
                      <span className="indicator online"></span>
                        <img src={props.users[0].photo} className="card-img feature-img" alt="User1" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title feature-title">{props.users[0].name}</h5>
                          <p className="card-text feature-txt">
                          {props.users[0].description}
                          </p>
                        </div>
                      </div>
                      <div className="ui menu1">
                      <a href="#" className="card-link">
                      <FontAwesomeIcon
                    className="icon menu-icon"
                    icon={faHeart}
                    size="1x"
                  />
                  </a>
                  <a href="#" className="card-link">
                   <FontAwesomeIcon
                    className="icon menu-icon2"
                    icon={faEnvelope}
                    size="1x"
                  />
                  </a>
                  <a href="#" className="card-link">
                   <FontAwesomeIcon
                    className="icon menu-icon3"
                    icon={faGift}
                    size="1x"
                  />
                  </a>
                  <a href="#" className="card-link">
                   <FontAwesomeIcon
                    className="icon menu-icon4"
                    icon={faComment}
                    size="1x"
                  />
                  
                      </a>
                      </div>
                    </div>
                  </div>


                <div className="card mb-3 feature">
                    <div className="row no-gutters">
                      <div className="col-md-4">
                      <span className="indicator offline"></span> 
                        <img src={props.users[3].photo} className="card-img feature-img" alt="User2" />
                      </div>
                      <div className="col-md-8">
                          
                        <div className="card-body">
                          <h5 className="card-title feature-title">{props.users[3].name}</h5>
                          <p className="card-text feature-txt">
                          {props.users[3].description}
                          </p>
                        </div>
                      </div>
                      <div className="ui menu2">
                      <a href="#" className="card-link">
                      <FontAwesomeIcon
                    className="icon menu-icon"
                    icon={faHeart}
                    size="1x"
                  />
                  </a>
                  <a href="#" className="card-link">
                   <FontAwesomeIcon
                    className="icon menu-icon2"
                    icon={faEnvelope}
                    size="1x"
                  />
                  </a>
                  <a href="#" className="card-link">
                   <FontAwesomeIcon
                    className="icon menu-icon3"
                    icon={faGift}
                    size="1x"
                  />
                  </a>
                  <a href="#" className="card-link">
                   <FontAwesomeIcon
                    className="icon menu-icon4"
                    icon={faComment}
                    size="1x"
                  />
                  
                      </a>
                      </div>
                    </div>
                  </div>


                <div className="card mb-3 feature">
                    <div className="row no-gutters">
                      <div className="col-md-4">
                      <span className="indicator online"></span> 
                        <img src={props.users[4].photo} className="card-img feature-img" alt="User3" />
                      </div>
                      <div className="col-md-8">
                          
                        <div className="card-body">
                          <h5 className="card-title feature-title">{props.users[4].name}</h5>
                          <p className="card-text feature-txt">
                          {props.users[4].description}
                          </p>
                        </div>
                      </div>
                      <div className="ui menu3">
                      <a href="#" className="card-link">
                      <FontAwesomeIcon
                    className="icon menu-icon"
                    icon={faHeart}
                    size="1x"
                  />
                  </a>
                  <a href="#" className="card-link">
                   <FontAwesomeIcon
                    className="icon menu-icon2"
                    icon={faEnvelope}
                    size="1x"
                  />
                  </a>
                  <a href="#" className="card-link">
                   <FontAwesomeIcon
                    className="icon menu-icon3"
                    icon={faGift}
                    size="1x"
                  />
                  </a>
                  <a href="#" className="card-link">
                   <FontAwesomeIcon
                    className="icon menu-icon4"
                    icon={faComment}
                    size="1x"
                  />
                  
                      </a>
                      </div>
                    </div>
                  </div>
                <LovePoll />
                </div>
            </div>
            </div>
          </div>
        </div>
        <Particles params={particleOpt} />
      </div>
    );
}

export default Home;