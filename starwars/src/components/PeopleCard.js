import React from "react";
import { Header, Card } from "semantic-ui-react";

const PeopleCard = props => (
  <div className="card">
    <Card>
      <Header as="h2">{props.name}</Header>
      <p className="homeworld">My Homeworld:{props.homeworld}</p>
      <div className="details">
        <Header as="h3">All My Stats</Header>
        <p className="height">Height:{props.height}cm</p>
        <p className="weight">Weight: {props.weight} kgs</p>
        <p className="hairColor">Hair Color:{props.hairColor}</p>
        <p className="eyeColor">Eye Color: {props.eyeColor}</p>
        <p className="birthYear">Birth Year: {props.birthYear}</p>
      </div>
    </Card>
  </div>
);

export default PeopleCard;
