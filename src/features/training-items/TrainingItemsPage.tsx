import React from 'react'
import { Card, Container, Icon } from 'semantic-ui-react';

const TrainingCard = () => {
  return (
    <Card color="blue">
      <Card.Content>
        <Card.Header>JavaZone</Card.Header>
        <Card.Meta>
          <span>Frontend, Backend, Java</span>
        </Card.Meta>
        <Card.Description>Konferansen JavaZone</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <span>
          <Icon name="clock" />
          23.02.2021
        </span>
      </Card.Content>
    </Card>
  );
}

const TrainingItemsPage = () => {
  return (
    <>
      <h1>Training Items</h1>
      <Container className="container" textAlign="center">
        <Card.Group itemsPerRow={5}>
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
        </Card.Group>
      </Container>
    </>
  );
};

export { TrainingItemsPage };
