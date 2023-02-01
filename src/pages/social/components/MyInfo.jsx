import React from 'react'
import spring from '../static/spring.png'
import ProfileImg from '../static/profile.jpg'
import './MyInfo.css'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';


function MyInfo() {
  return (
    <div className='profilePic' style={{marginTop:"15px", position:"relative", top:" 30px"}}>

        <img className='profileImg fadeInDown' src= {spring} alt="Spring" style={{"width": "85%","height" : "35px", 
        "margin-left" : "6rem", position:"absolute", top:"-8px"}} />

        <div className='profileDiv' style={{"marginTop" : "-3%", position:"relative"}}>
            <div className='photoName'>
                <img className='photo' src= {ProfileImg} alt="Profile Dp" />
                
            </div> 
            <div className='description'>
                <Typography className='aboutTitle'>
                    <h1>About</h1>
                </Typography>
                <Typography className='aboutDetail'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officiis ipsum ut quam laudantium at sequi aperiam alias saepe adipisci! Ratione alias assumenda, saepe distinctio minus sed nisi vero ducimus dolores nulla! Temporibus eveniet itaque odit unde, aperiam iure dolor veritatis tenetur doloribus reprehenderit porro hic perferendis, sequi soluta odio, provident totam sint obcaecati suscipit consequatur repellat quod esse ullam consequuntur. Quae commodi atque voluptatem ex non suscipit, veritatis voluptate sapiente, autem blanditiis a maiores facere placeat vel. Unde repellendus eius ratione suscipit eveniet vel exercitationem, iure nemo repudiandae doloribus deserunt? Blanditiis itaque dolorum porro aperiam at ipsa, nemo impedit?
</Typography>

            </div>

        <Button

                className="nav-button1 nav-button-ltr1"
                sx={{
                  my: 2,
                  mx: 4,
                  color:  "black",
                  display: "block",
                  fontWeight: "bold",
                  fontSize: 15,
                  textTransform: "uppercase",
                  textAlign: "center",
                  position:"absolute",
                  bottom:"20px",
                  left: "65px"

                }}

                style={{"border": "2px solid black"}}
              >
                FOllow +

              </Button>


        </div>
        <div  className="nameFollowers">
            <div className='name'>
                <Typography   style={{"width" : "100%" , "text-align": "center", }}>
                                <b style={{"text-transform" : "uppercase"}}>
                                    Muhammad AbuBakar</b>
                </Typography>
            </div>
            <div className='followers'>
                
            <Button

                className="nav-button1 nav-button-ltr1"
                sx={{
                  my: 2,
                  mx: 4,
                  color:  "white",
                  display: "block",
                  fontWeight: "bold",
                  fontSize: 15,
                  textTransform: "uppercase",
                  textAlign: "center"
                }}

                style={{"border": "2px solid white"}}
              >
                Follower  219000

              </Button>

                <Button

                className="nav-button1 nav-button-ltr1"
                sx={{
                  my: 2,
                  mx: 4,
                  color:  "white",
                  display: "block",
                  fontWeight: "bold",
                  fontSize: 15,
                  textTransform: "uppercase",
                  textAlign: "center"
                }}
                style={{"border": "2px solid white"}}
              >
                Following 50000

              </Button>

              <Button

                className="nav-button1 nav-button-ltr1"
                sx={{
                  my: 2,
                  mx: 4,
                  color:  "white",
                  display: "block",
                  fontWeight: "bold",
                  fontSize: 15,
                  textTransform: "uppercase",
                  textAlign: "center"
                }}

                style={{"border": "2px solid white"}}
              >
                Posts
                10000


              </Button>

            </div>
        </div>
    </div>
  );
}

export default MyInfo;