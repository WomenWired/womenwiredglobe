import React from 'react'
//import CountryDropdown from './CountryDropdown'
import Dropdown from './Dropdown'
//import TopicInput from './TopicInput'
import { Button, Container, makeStyles } from '@material-ui/core/'
import CallMade from '@material-ui/icons/CallMade'



const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: "20%",
    backgroundColor: "#020308",
    padding: "24px",
    paddingLeft: "24px",
    paddingRight: "24px",
    width: "80%"
  },
  blockLine: {
    color: "#fafafa",
    fontSize: "160%",
    lineHeight: "1.2em",
    fontFamily: "sans-serif",
    //display: "inline",
    maxWidth: "500px",
    margin: 0
  },

  purple: {
    color: "#f3f3f3"
  },

  transpButton: {
    color: "white",
    padding: "8px",
    position: "absolute",
    backgroundColor: "#111",
    left: "20%",
    marginTop: "20px"
  }
}));

const CTAText = ({ selectedCountry, setSelectedCountry, prepareInitMarkers }) => {

  const classes = useStyles();

  return (
    <div className={classes.box}>
      <div className={classes.blockLine}>
        <h1 style={{ lineHeight: "1.2em"}}> WomenWired Interactive Map </h1>
        <span>
          Learn about the Women who have paved the way for us.
          <span className={classes.purple}>
           
          </span>
        
        </span>
        <br />
        <div style = {{
        color: "#fafafa",
        fontFamily: "sans-serif",
        maxWidth: "460px",
        paddingTop: "80px",
        opacity: "0.4",
        position: "fixed",
        top: "40%"
      }}>
        <br/><br/><h3 style={{ fontSize: "16px"}}>How it works</h3> 
        <p style={{ fontSize: "16px",color: "white",lineHeight: "24px", }}>

        Click on the globe to explore the map
        <br/><br/>Make the connection– Do certain places focus on different keywords to share the same news? Or are certain perspectives entirely missing from others?</p>
        </div>
       
      </div>

      {/*This button actually launches the markers.*/}
      <Container>
        <Button
          className={classes.transpButton}
          onClick={() => prepareInitMarkers()}
          endIcon={<CallMade />}>
          Explore
        </Button>
      </Container>

    </div>
  )
}

export default CTAText