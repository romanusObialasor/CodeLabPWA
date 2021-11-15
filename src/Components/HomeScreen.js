import React from "react";
import styled from "styled-components";
import First from "./ComHolder/First";
import Second from "./ComHolder/Second";
import Third from "./ComHolder/Third";
import Fourth from "./ComHolder/Fourth";
import Fifth from "./ComHolder/Fifth";
import Sixth from "./ComHolder/Sixth";
import Seventh from "./ComHolder/Seventh";
import Header from "./Header";

const HomeScreen = () => {
  return (
    <Container>
      <Header />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Seventh />
    </Container>
  );
};

export default HomeScreen;

const Container = styled.div``;
