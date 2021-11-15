import React from "react";
import styled from "styled-components";
import FourthProps from "./FourthProps";

const Fourth = () => {
  return (
    <Container>
      <FourthProps
        image="/images/task-board (1).png"
        text="Develop is a modern work management platform that brings together the best tools for high-level planning, project and product management, task organization and productivity growth based on transparency, agility, and motivation.
Develop is a modern work management platform that brings together the best tools for high-level planning, project and product management, task organization and productivity growth based on transparency, agility, and motivation."
      />
      <FourthProps
        flip
        image="/images/Screenshot 2021-11-08 131605.png"
        text="Develop is a modern work management platform that brings together the best tools for high-level planning, project and product management, task organization and productivity growth based on transparency, agility, and motivation.
Develop is a modern work management platform that brings together the best tools for high-level planning, project and product management, task organization and productivity growth based on transparency, agility, and motivation."
      />
    </Container>
  );
};

export default Fourth;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
