import React from "react";
import { Header, Card } from "semantic-ui-react";

const PeopleCard = props => (
  <div className="card">
    <Card>
      <div className="cardHeader">
        <Header as="h2">{props.name}</Header>
      </div>
      <div className="cardInfo">
        <div className="details">
          <Header as="h3">All My Stats</Header>
          <p className="height">Height:{props.height}cm</p>
          <p className="weight">Weight: {props.weight} kgs</p>
          <p className="hairColor">Hair Color:{props.hairColor}</p>
          <p className="eyeColor">Eye Color: {props.eyeColor}</p>
          <p className="birthYear">Birth Year: {props.birthYear}</p>
        </div>
      </div>
    </Card>
  </div>
);

export default PeopleCard;
