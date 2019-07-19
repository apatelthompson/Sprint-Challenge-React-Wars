import React, { useState, useEffect } from "react";
import axios from "axios";
import PeopleCard from "./PeopleCard";
// import { Header, Card } from "semantic-ui-react";

export default function PeopleGrid() {
  const [people, setPeople] = useState([]);
  console.log(people);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/1/`)
      .then(response => {
        console.log(response.data);
        const results = response.data;
        setPeople(results);
      })
      .catch(err =>
        console.log("The SWAPI is currently down; may the force be with you.")
      );
  }, []);

  return (
    <div className="people-grid">
      <PeopleCard
        key={people.name}
        name={people.name}
        height={people.height}
        weight={people.mass}
        hairColor={people.hair_color}
        eyeColor={people.eye_color}
        birthYear={people.birth_year}
        homeworld={people.homeworld}
      />
    </div>
  );
}
