import React from "react";
// import { Header, Card } from "semantic-ui-react";

const PeopleCard = props => (
  <div className="card">
    <h2>{props.name}</h2>
    console.log(props.name)
    <p className="homeworld">{props.homeworld}</p>
    <h2>The Lowdown</h2>
    <p className="height">{props.date}</p>
    <p className="weight">{props.weight}</p>
    <p className="hairColor">{props.hairColor}</p>
    <p className="eyeColor">{props.eyeColor}</p>
    <p className="birthYear">{props.birthYear}</p>
  </div>
);

export default PeopleCard;
