import React from 'react';
import Particles from 'react-particles-js';
import {Link} from 'react-router-dom';
import '../Home.css';
import { faUserCircle , faGrinHearts,faComments, faHeart, faEnvelope, faGift, faComment, faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";
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
              <h3 className=" match-title">Steps to Find Your Match</h3>
              <div className="d-flex justify-content-around">
                <div className="info">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faUserCircle}
                    size="3x"
                  />

                  <h3 className="tag">Create Profile</h3>
                  <p className="match-txt">Want others to know more about you? By registering now you can have access to multiple singles near you!</p>
                </div>
                <div className="info">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faGrinHearts}
                    size="3x"
                  />

                  <h3 className="tag">Find Matches</h3>
                  <p className="match-txt">Based on your personality traits Uniquely You matches you with your better half. Find out what you share in commom before breaking the ice.</p>
                </div>
                <div className="info">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faComments}
                    size="3x"
                  />

                  <h3 className="tag2">Start Dating</h3>
                  <p className="match-txt">Are the feelings Mutual? Send a Like, Message , or leave a comment on your matches proile to stay in contact.   </p>
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
                        <a className="ui purple ribbon label">
                            Tom & Venessa
                        </a>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title story-title">
                            Perfect Chemistry
                          </h5>
                          <p className="card-text">
                          My boyfriend Tom and I matched in October 2013 and for weeks,
                           he was afraid to meet up with me because we had such amazing chemistry online.
                       
                          </p>
                          <p className="card-text">
                          We finally grabbed drinks at my favorite Midwestern spot in Brooklyn
                          , where he said he would be ‘the creep ...
                            
                            <a href="#" className="card-link">

                            <FontAwesomeIcon
                    className="arrow"
                    icon={faArrowCircleRight}
                    size="1x"
                  />
                  </a>
                          </p>
                    
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-3 stories">
                    <div className="row no-gutters">
                      <div className="col-md-4 story">
                      <img
                          src="https://www.verywellmind.com/thmb/iBoNI6_E5AZ5Ex1-CJ7yiI_FkX4=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/92262434-56a5feb03df78cf7728ad130.jpg"
                          className="card-img"
                          alt="young-couple"
                        />
                             <a className="ui purple ribbon label">
                            Mark & Sabrina
                        </a>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title story-title">
                            Lady Of My Life
                          </h5>
                          <p className="card-text">
                          My husband and I met here four years ago and I wouldn’t 
                          have done things any differently. As soon 
                          as I stumbled on Mark’s profile, 
                          </p>
                          <p className="card-text">
                          I instantly thought he was so handsome.I reached out 
                          with a witty statement (that took me way too long to write) 
                          ...
                            <a href="#" className="card-link">

                            <FontAwesomeIcon
                    className="arrow"
                    icon={faArrowCircleRight}
                    size="1x"
                  />
                  </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-3 stories">
                    <div className="row no-gutters">
                      <div className="col-md-4 story">
                      <img
                          src="https://images.squarespace-cdn.com/content/v1/514a0556e4b0de06a6f0c60a/1369418829141-DVH5C4OQMF6SYYVE2D77/ke17ZwdGBToddI8pDm48kO0lMDxNL9k40kV8hU5yU-BZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHhYkxqWDMMlq5YS25qC0mjrirlPhp-J3JewslZ2lNB1pG3kqknfvZFsSCDOsU_GUM/couple+massage.jpg"
                          className="card-img"
                          alt="young-couple"
                        />
                         <a className="ui purple ribbon label">
                            Zach & Stephanie
                        </a>
                      
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title story-title">
                            Hearts Knit Together
                          </h5>
                          <p className="card-text">
                          I online dated on and off for about three years.I had 
                          so many train wreck dates that I eventually wrote a 
                          book about my dating life.
                           
                          </p>
                          <p className="card-text">
                          I decided then that I needed to take down my online 
                          profiles and start to meet people in the real world.
                          Just as I emptied ...
                            <a href="#" className="card-link">
                            <FontAwesomeIcon
                    className="arrow"
                    icon={faArrowCircleRight}
                    size="1x"
                  />
                  </a>
                          </p>
                  
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="card mb-3 stories">
                    <div className="row no-gutters">
                      <div className="col-md-4 story">
                      <img
                          src="https://image.freepik.com/free-photo/african-american-couple-looking-through-finger-frame-smiling_1258-2739.jpg"
                          className="card-img"
                          alt="young-couple"
                        />
                         <a className="ui purple ribbon label">
                            Sean & Zakhari
                        </a>
                      
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title story-title">
                            Picture Perfect
                          </h5>
                          <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </p>
                          <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                            <a href="#" className="card-link">
                            <FontAwesomeIcon
                    className="arrow"
                    icon={faArrowCircleRight}
                    size="1x"
                  />
                  </a>
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