import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import styled from "styled-components";

const CardContainer = styled.div`
  margin-bottom: 20px;
`;

const CardTitle = styled.h1`
  margin: 8px 0;
  font-size: 22px;
`;

const Course = ({ name, description, section, subject, room }) => {
  return (
    <CardContainer>
      <Card>
        <CardContent>
          <CardTitle>{name}</CardTitle>
          <Typography>
            {description}
          </Typography>
          <Typography variant="body2">
            {section}
          </Typography>
          <Typography variant="body2">
            {subject}
          </Typography>
          <Typography variant="body2">
            {room}
          </Typography>
        </CardContent>
      </Card>
    </CardContainer>
  );
};

export default Course;
