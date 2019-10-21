import React, { Component } from 'react';
import './App.css';
import QuestionOne from './components/QuestionOne';
import LovePoll from './components/LovePoll';
import Home from './components/Home';
import {Switch, Route} from 'react-router-dom'
import UserList from './components/UserList';

const users = [
  {
    id:1,
    name:'Cindy Lockheart',
    gender:'Female',
    age:'22',
    country:'Canada',
    city:'Ottawa',
    description:'About me huh…  Well, I’d probably smile and say hi to you if we were strangers passing on the street. I believe in kindness, empathy, holding open doors, putting your phone away at dinner, and always making time to listen to a friend.',
    photo:'https://www.wonderslist.com/wp-content/uploads/2016/10/Rachelle-Lefevre-hair-full.jpg'

  },
  {
    id:2,
    name:'Arjana Okiro',
    gender:'Female',
    age:'20',
    country:'Africa',
    city:'Nairobi',
    description:'I am an outgoing girl and am a good blend of traditional and modern values. I love singing, dancing, music and go for long drives frequently.',
    photo:'https://www.stylevore.com/wp-content/uploads/2019/04/16.4k-Likes-89-Comments-BigNaturalHair-S-Simons-on-Instagram.jpg',

  },
  {
    id:3,
    name:'Steven Rogers',
    gender:'Male',
    age:'27',
    country: 'United States',
    city:'Chicago',
    description:'Ok, I just have to be real… I’m a bit of a shut-in. Don’t get me wrong, I like going out for drinks and having fun but I find more peace and have more fun just kicking back.',
    photo:'https://media.istockphoto.com/photos/portrait-of-a-handsome-young-man-outdoors-picture-id171277012?k=6&m=171277012&s=612x612&w=0&h=WRW6yBqwWlDrHI5PXXxDlI23TlpxM0Sv7qwk7UPIncw=',

  },
  {
    id:4,
    name:'Shimon Tzvi',
    gender:'male',
    age:'33',
    country:'United States',
    city:'Austin',
    description:' I’ll admit it, I’m a little old-fashioned when it comes to my dating style. I open doors and like to go for drinks AND dinner on the first date. But it’s all part of what makes me a gentleman.',
    photo:'https://2xdk1q3673ff3bw16b2dbu7i-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/single-jewish-men.jpg',

  },
  {
    id:5,
    name:'Cyn Riverez',
    gender:'Female',
    age:'28',
    country: 'United States',
    city:'Tampa',
    description:'Basically I love life and I love living life. I enjoy the outdoors, traveling, restaurants, laughing, going to cultural events, and sociaLizing with quality people.',
    photo:'https://www.hdwallpapers.in/download/camila_mendes_4k-wide.jpg',

  },
  {
    id:6,
    name:'Malcom Simmons Jr.',
    gender:'Male',
    age:'35',
    countrty:'United States', 
    city:'Memphis',
    description:'I love to live an active life and explore.I have a love for the outdoors and anything that involves me being on the water.',
    photo:'https://bloximages.newyork1.vip.townnews.com/insightnews.com/content/tncms/assets/v3/editorial/7/01/70189f99-79a6-5c71-a98c-c38af0a4a266/5a8ca060ebe39.image.jpg',

  },
  
  
]
  class App  extends Component {
    constructor(props) {
      super(props);
      this.state ={ 
        users:users
    }
  }




    render() { 
   
   
  
  return (
    <div className="App">
   <Switch>
      <Route 
        exact path="/QuestionOne"  
        render={()=> <QuestionOne   /> }
        />
           <Route 
        exact path="/LovePoll"  
        render={()=> <LovePoll /> }
        />
         <Route 
        exact path="/"  
        render={()=> <Home users={this.state.users} /> }
        />
          <Route 
        exact path="/UserList"  
        render={()=> <UserList users={this.state.users} /> }
        />
        
        </Switch>     
    
      

    </div>
  );
}
  }

export default App;
