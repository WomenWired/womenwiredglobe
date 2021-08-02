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
        This summer we have been tasked with 
      </div>
    </Container>
  );
};

export default About;
