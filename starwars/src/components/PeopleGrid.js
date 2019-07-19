import React, { useState, useEffect } from "react";
import axios from "axios";
import PeopleCard from "./PeopleCard";

export default function PeopleGrid({ limit }) {
  const [people, setPeople] = useState([]);
  console.log(people);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response.data.results);
        const results = response.data.results;
        setPeople(results);
      })
      .catch(err =>
        console.log("The SWAPI is currently down; may the force be with you.")
      );
  }, []);

  return (
    <div className="people-grid">
      {people.map(info => (
        <PeopleCard
          key={people.url}
          name={people.name}
          height={people.height}
          weight={people.mass}
          hairColor={people.hair_color}
          eyeColor={people.eye_color}
          birthYear={people.birth_year}
        />
      ))}
    </div>
  );
}
