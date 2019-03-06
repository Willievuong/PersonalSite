import React, { Component } from 'react';
import '../../App.css';
import Typing from '../Typing'
import Cards from '../Cards'
import Grid from '@material-ui/core/Grid';
import roomm8Logo from '../../img/roomm8.png'


class Project extends Component{
  render(){
    const roomm8 = {
      name: "roomm8",
      description: "(IN DEVELOPMENT) An application meant for interaction between roommates",
      image: roomm8Logo,
    }

    const pacwoman = {
      name: "PacWoman",
      description: "1st person VR Pacman game",
      image: roomm8Logo,
    }

    const placeHolder = {
      name: "placeHolder",
      description: "Place Holder Description",
      image: roomm8Logo,
    }

    return(
      <div className="Page"> 
        <div className="Intro-Type">
          <Typing strings={["Whoops!", "I don't have anything cool to show yet!", 
                           "check back in a few weeks!"
                          ]}
          />
        </div>
        <Grid container direction="row" justify="center" alignItems="center" spacing={16}>
          <Grid item xs={2}>                            
            <a href="https://github.com/Willievuong/roomm8">
              <Cards detail={roomm8}/>
            </a>
          </Grid>
          <Grid item xs={2}>
            <a href="https://devpost.com/software/3d-pacman-rocly9"> 
              <Cards detail={pacwoman}/>
            </a>
          </Grid>
          <Grid item xs={2}>
            <a href="https://devpost.com/software/3d-pacman-rocly9"> 
              <Cards detail={placeHolder}/>
            </a>
          </Grid>
        </Grid>
          
          <div className="Project-End">
            If you are curious about other project I've done in the past that aren't listed here, 
            check my <strong><a href="https://devpost.com/willievuong">devpost&nbsp;</a></strong>
            and <strong><a href="https://github.com/Willievuong">github</a></strong>!
          </div>
      </div>
    )
  }
}

export default Project;