import React from "react";
import { Container } from "@material-ui/core";

const About = () => {
  return (
    <Container
      style={{
        height: "90%",
        overflow: "scroll"
      }}
    >
      <h2
        style={{
          fontFamily: "sans-serif"
        }}
      >
        About WomenWired Interactive Map
      </h2>
      <div
        style={{
          fontFamily: "sans-serif",
          lineHeight: "1.4em",
          paddingTop: "40px"
        }}
      >
        This summer we parnted with Griptape and participated in the Griptape challenge. This Interactive map that showcases women all around the world is our challenge that complemented summer 2021. <br></br>
        Learn more about the WomenWired team at <a href="https://womenwired.wixsite.com/womenwired">WomenWired Website</a> <br></br>
        Contact us at womenwired@gmail.com
      </div>
    </Container>
  );
};

export default About;
